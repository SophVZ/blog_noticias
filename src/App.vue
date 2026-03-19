<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Blog de Noticias</router-link>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/">Inicio</router-link>
          <router-link class="nav-link" to="/login">Login / Registro</router-link>
        </div>
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-for="cat in categorias" :key="cat">
            <router-link 
              class="nav-link" 
              :to="{ path: '/', query: { categoria: cat } }">
              {{ cat }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />

    <footer class="bg-light text-center py-4 mt-5">
      <p>&copy; 2026 - Blog de Noticias</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categorias: ['Tecnología', 'Deportes', 'Cultura', 'Economía', 'Ocio', 'Sociedad']
    }
  }
}
</script>

