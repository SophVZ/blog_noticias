<template>

    <header class="bg-primary text-white text-center py-5 mb-4">
        <div class="container">
            <h2 class="display-5">Bienvenido al Blog de Noticias</h2>
            <p class="lead">Entérate de lo último aquí mismo.</p>
        </div>
    </header>

    <main>
        <div class="container">
            <h3 class="mb-4">Últimas Noticias</h3>
            <div class="row">
                <div class="col-md-4 mb-4" v-for="noticia in noticias" :key="noticia.id">
                    <div class="card h-100 shadow-sm">
                    <img 
                    :src="noticia.imagen || 'https://placehold.co/600x400?text=Noticia+'" 
                    @error="$event.target.src = 'https://placehold.co/600x400?text=Noticia+'"
                    class="card-img-top" 
                    alt="Noticia"
                    style="height: 200px; object-fit: cover;"
                    >                    
                        <div class="card-body">
                                                    <h5 class="card-title">{{ noticia.titulo }}</h5>
                                                    <p class="card-text text-truncate">{{ noticia.descripcion }}</p>
                                                    <router-link :to="'/noticia/' + noticia.id" class="btn btn-outline-primary">
                                                        Ver más
                                                    </router-link>
                                                    <button 
                        v-if="user && noticia.autorId === user.uid" 
                        @click="eliminarNoticia(noticia.id)" 
                        class="btn btn-outline-danger btn-sm ms-2"
                        >
                        <i class="bi bi-trash"></i> Eliminar
                        </button>
                        </div>
                        <div class="card-footer text-muted small">
                            Publicado el: {{ noticia.fecha?.toDate ? noticia.fecha.toDate().toLocaleDateString() : noticia.fecha }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="user && historialNoticias.length > 0" class="container mt-5 pt-4 border-top">
                <h5 class="mb-4 text-muted"><i class="bi bi-clock-history me-2"></i>Visto recientemente</h5>
                <div class="row row-cols-1 row-cols-md-4 g-3">
                    <div class="col" v-for="h in historialNoticias" :key="h.id">
                        <div class="card h-100 border-0 shadow-sm bg-light">
                            <div class="card-body py-2">
                                <h6 class="card-title mb-1 small fw-bold text-truncate">{{ h.titulo }}</h6>
                                <router-link :to="'/noticia/' + h.id" class="btn btn-sm btn-link p-0 text-decoration-none">Leer de nuevo</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { auth, db } from '../firebase/friebase.js';
    import { onAuthStateChanged } from "firebase/auth";
    import { collection, query, where, orderBy, getDocs,doc, getDoc, deleteDoc } from "firebase/firestore";

    export default {
        name: 'HomeView',
        data() {
            return {
            noticias: [],
            historialNoticias: [], 
            user: null
            }
        },
        watch: {
            '$route.query.categoria': function() {
            this.fetchNoticias();
            }
        },
        methods: {
            async fetchNoticias() {
                console.log("Ejecutando fetchNoticias..."); 
                try {
                    const categoriaSeleccionada = this.$route.query.categoria;
                    let q;

                    if (categoriaSeleccionada) {
    q = query(
        collection(db, "noticias"),
        where("categoria", "==", categoriaSeleccionada),
        orderBy("fecha", "desc")
    );
} else {
    q = query(collection(db, "noticias"), orderBy("fecha", "desc"));
}
                    const querySnapshot = await getDocs(q);
                    console.log("Documentos recibidos:", querySnapshot.docs.length);
                    this.noticias = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                } catch (error) {
                    console.error("Error al filtrar:", error);
                }
            },
                async fetchHistorial(uid) {
                try {
                    const userDoc = await getDoc(doc(db, "usuarios", uid));
                    if (userDoc.exists() && userDoc.data().ultimas_vistas) {
                        const ids = userDoc.data().ultimas_vistas.slice(-4).reverse(); 
                        
                        const promesas = ids.map(id => getDoc(doc(db, "noticias", id)));
                        const resultados = await Promise.all(promesas);
                        
                        this.historialNoticias = resultados
                            .filter(d => d.exists())
                            .map(d => ({ id: d.id, ...d.data() }));
                    }
                } catch (error) {
                    console.error("Error al cargar historial:", error);
                }
            },
            async eliminarNoticia(id) {
                if (confirm("¿Estás seguro de que quieres eliminar esta noticia?")) {
                    try {
                    await deleteDoc(doc(db, "noticias", id));
                    alert("Noticia eliminada correctamente");
                    this.noticias = this.noticias.filter(n => n.id !== id);
                    } catch (error) {
                    console.error("Error al eliminar:", error);
                    alert("No tienes permisos para eliminar esta noticia");
                    }
                }
                }
            },
            mounted() {
            this.fetchNoticias();

            onAuthStateChanged(auth, (firebaseUser) => {
                if (firebaseUser) {
                    this.user = firebaseUser;
                    this.fetchHistorial(firebaseUser.uid);
                    this.fetchNoticias(); 
                }
            });
            }
    }
</script>