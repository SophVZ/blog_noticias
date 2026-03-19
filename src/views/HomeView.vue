<template>

    <header class="bg-primary text-white text-center py-5 mb-4">
        <div class="container">
            <h1 class="display-4">Bienvenido al Blog de Noticias</h1>
            <p class="lead">Entérate de lo último aquí mismo.</p>
        </div>
    </header>

    <main>
        <div class="container">
            <h2 class="mb-4">Últimas Noticias</h2>
            <div class="row">
                <div class="col-md-4 mb-4" v-for="noticia in noticias" :key="noticia.id">
                    <div class="card h-100 shadow-sm">
                        <img :src="noticia.imagen" class="card-img-top" alt="Noticia">
                        <div class="card-body">
                            <h5 class="card-title">{{ noticia.titulo }}</h5>
                            <p class="card-text text-truncate">{{ noticia.descripcion }}</p>
                            <!-- BOTÓN AL DETALLE (Requisito de la tarea) -->
                            <router-link :to="'/noticia/' + noticia.id" class="btn btn-outline-primary">
                                Ver más
                            </router-link>
                        </div>
                        <div class="card-footer text-muted small">
                            Publicado el: {{ noticia.fecha }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { db } from '../firebase';
    import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

    export default {
        name: 'HomeView',
        data() {
            return {
            noticias: []
            }
        },
        watch: {
            '$route.query.categoria': function() {
            this.fetchNoticias();
            }
        },
        methods: {
            async fetchNoticias() {
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
                    this.noticias = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                } catch (error) {
                    console.error("Error al filtrar:", error);
                }
            },
            mounted() {
                this.fetchNoticias();
            }
        }
    }
</script>