<template>
    <div class="container mt-5" v-if="noticia">
        <img :src="noticia.imagen" class="img-fluid rounded mb-4" style="max-height: 400px; width: 100%; object-fit: cover;">
        <h1>{{ noticia.titulo }}</h1>
        <p class="text-muted">Publicado el: {{ noticia.fecha?.toDate().toLocaleDateString() }}</p>
        <hr>
        <div class="lead">
            {{ noticia.contenido }}
        </div>
        <section class="mt-5">
            <h3>Comentarios</h3>
        </section>
    </div>
</template>

<script>
    import { db, auth } from '../firebase';
    import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

    export default {
        props: ['id'], 
        data() {
            return {
            noticia: null
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
                await updateDoc(userRef, {
                    ultimas_vistas: arrayUnion(this.id) 
                });
                } catch (e) {
                console.log("Error al registrar historial:", e);
                }
            }
            }
        },
        mounted() {
            this.cargarNoticia();
        }
    }
</script>