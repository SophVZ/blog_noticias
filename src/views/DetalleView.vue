<template>
    <div class="bg-light min-vh-100 py-5">
        <div class="container" v-if="noticia">
            <div class="row justify-content-center">
                <div class="col-lg-8 bg-white p-4 p-md-5 shadow-sm rounded">
                    <img :src="noticia.imagen" class="img-fluid rounded mb-4" style="max-height: 400px; width: 100%; object-fit: cover;">
                    <h1>{{ noticia.titulo }}</h1>
                    <p class="text-muted">
                    Publicado el: {{ noticia.fecha && noticia.fecha.toDate ? noticia.fecha.toDate().toLocaleDateString() : 'Cargando fecha...' }}
                    </p>        <hr>
                    <div class="lead">
                        {{ noticia.contenido }}
                    </div>
                    <section class="mt-5 pb-5">
                        <h3>Comentarios</h3>
                        <div v-if="usuarioLogueado" class="mb-4">
                            <textarea v-model="nuevoComentario" class="form-control mb-2" placeholder="Escribe tu comentario..."></textarea>
                            <button @click="enviarComentario" class="btn btn-primary btn-sm">Publicar Comentario</button>
                        </div>
                        <div v-else class="alert alert-info">
                            Debes <router-link to="/login">iniciar sesión</router-link> para comentar.
                        </div>
                        <div class="list-group mt-3">
                            <div v-for="com in comentarios" :key="com.id" class="list-group-item">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1 fw-bold">{{ com.usuarioEmail }}</h6>
                                    <small>
                                    {{ com.fecha && com.fecha.toDate ? com.fecha.toDate().toLocaleDateString() : 'Reciente' }}
                                    </small>                    </div>
                                <p class="mb-1">{{ com.texto }}</p>
                            </div>
                            <p v-if="comentarios.length === 0" class="text-muted">Aún no hay comentarios. ¡Sé el primero!</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
    import { db, auth } from '../firebase/friebase.js';
    import { collection, query, where, orderBy, getDocs, addDoc, serverTimestamp, doc, getDoc, updateDoc} from "firebase/firestore";
    import { onAuthStateChanged } from "firebase/auth";

    export default {
        props: ['id'], 
        data() {
            return {
            noticia: null,
            comentarios: [],
            nuevoComentario: '',
            usuarioLogueado: null
            }
        },
        methods: {
            async cargarNoticia() {
                const docRef = doc(db, "noticias", this.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.noticia = docSnap.data();
                    this.registrarVisita(); 
                }
            },
            async registrarVisita() {
                if (auth.currentUser) {
                    const userRef = doc(db, "usuarios", auth.currentUser.uid);
                    try {
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        let historial = userSnap.data().ultimas_vistas || [];
        historial = historial.filter(id => id !== this.id);
        historial.push(this.id);
        if (historial.length > 10) historial.shift();
        await updateDoc(userRef, {
          ultimas_vistas: historial
        });
      }
    } catch (e) {
      console.log("Error al actualizar historial:", e);
    }
                }
            },
            async cargarComentarios() {
                const q = query(
                    collection(db, "comentarios"),
                    where("noticiaId", "==", this.id), 
                    orderBy("fecha", "desc")
                );
                const querySnapshot = await getDocs(q);
                this.comentarios = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            },
            async enviarComentario() {
                if (this.nuevoComentario.trim() === '') return;
                try {
                    await addDoc(collection(db, "comentarios"), {
                    noticiaId: this.id,
                    texto: this.nuevoComentario,
                    usuarioEmail: this.usuarioLogueado.email,
                    usuarioId: this.usuarioLogueado.uid,
                    fecha: serverTimestamp()
                    });
                    this.nuevoComentario = ''; 
                    this.cargarComentarios(); 
                } catch (e) {
                    console.error("Error al comentar:", e);
                }
            },
        },
        mounted() {
            this.cargarNoticia();
            this.cargarComentarios();
            onAuthStateChanged(auth, (user) => {
                this.usuarioLogueado = user;
            });
        }
    }
</script>