import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/login', name: 'login', component: LoginView},
    { path: '/noticia/:id',name: 'noticia-detalle',component: () => import('../views/DetalleView.vue'), props: true},
    {path:'/nueva-noticia', name:'nueva-noticia', component:()=>import('../views/NoticiaView.vue')}
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router