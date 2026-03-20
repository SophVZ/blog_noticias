<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow p-4">
          <h2 class="mb-4 text-center">Publicar Nueva Noticia</h2>
          <form @submit.prevent="crearNoticia">
            <div class="mb-3">
              <label class="form-label">Título</label>
              <input v-model="titulo" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción Corta</label>
              <input v-model="descripcion" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">URL de la Imagen</label>
              <input v-model="imagen" type="url" class="form-control" placeholder="https://ejemplo.com">
            </div>
            <div class="mb-3">
              <label class="form-label">Categoría</label>
              <select v-model="categoria" class="form-select" required>
                <option value="Tecnología">Tecnología</option>
                <option value="Deportes">Deportes</option>
                <option value="Cultura">Cultura</option>
                <option value="Economía">Economía</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Contenido de la Noticia</label>
              <textarea v-model="contenido" class="form-control" rows="6" required></textarea>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-success btn-lg">Publicar Noticia</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../firebase/friebase.js'; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; //

export default {
  data() {
    return {
      titulo: '',
      descripcion: '',
      imagen: '',
      categoria: 'Tecnología',
      contenido: ''
    }
  },
  methods: {
    // En AdminView.vue o donde tengas el formulario de posteo
async crearNoticia() {
  try {
    // Obtenemos el usuario actual de Firebase Auth
    const autor = auth.currentUser;

    await addDoc(collection(db, "noticias"), {
      titulo: this.titulo,
      descripcion: this.descripcion,
      contenido: this.contenido,
      categoria: this.categoria,
      imagen: this.imagen || 'https://picsum.photos',
      fecha: serverTimestamp(),
      // Guardamos la info del autor para que se sepa quién la posteó
      autorId: autor.uid,
      autorEmail: autor.email 
    });

    alert("¡Noticia publicada!");
    this.$router.push('/');
  } catch (error) {
    console.error("Error:", error);
  }
}

  }
}
</script>
