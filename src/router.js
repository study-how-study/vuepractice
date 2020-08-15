import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as topic } from './module/topic/router'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        ...topic,
        {
            name: 'about',
            path: '/about',
            component: () => import('./pages/About.vue')
        },
        {
            path: '/',
            redirect: '/new'
        }
    ]
})