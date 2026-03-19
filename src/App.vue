<template>
  <div class="d-flex flex-column min-vh-100">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">
        <i class="bi bi-newspaper me-2"></i>BlogNoticias
      </router-link>

      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Todas</router-link>
          </li>
          <li class="nav-item" v-for="cat in categorias" :key="cat">
            <router-link 
              class="nav-link text-capitalize" 
              :to="{ path: '/', query: { categoria: cat } }"
            >
              {{ cat }}
            </router-link>
          </li>
        </ul>
        <div class="navbar-nav ms-auto">
          <router-link v-if="!user" class="nav-link btn btn-outline-primary btn-sm px-3 text-white" to="/login">
            <i class="bi bi-person-circle me-1"></i>Ingresar
          </router-link>
          
          <div v-else class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              {{ user.email }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" @click="logout">Cerrar Sesión</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
    <main class="flex-grow-1">
      <router-view />
    </main>
    

    <footer class="bg-light text-center py-4 mt-5">
      <p>&copy; 2026 - Blog de Noticias</p>
    </footer>
  </div>
</template>

<script>
import { auth } from './firebase/friebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: 'App',
  data() {
    return {
      user: null,
      categorias: ['Tecnología', 'Deportes', 'Cultura', 'Economía', 'Ocio', 'Sociedad']
    }
  },  
  methods: {
    async logout() {
      await signOut(auth);
      this.$router.push('/login');
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  }
}
</script>

