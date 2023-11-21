import Main from '../../assets/js/app/Main.vue'
import PageNotFound from '../../assets/js/app/components/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Main },
    { path: '/404', component: PageNotFound },
    { path:"/:catchAll(.*)", redirect: '/404' }
]

export default () => createRouter({
    history: createWebHistory(),
    routes,
})
