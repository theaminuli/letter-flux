import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

/**
 * Array of route objects for the application.
 * Each route defines a path, a unique name, and the component to render.
 *
 * @type {Array<{
 *   path: string,
 *   name: string,
 *   component: import('vue').Component
 * }>}
 *
 * @property {string} path - The URL path for the route.
 * @property {string} name - The unique name of the route.
 * @property {import('vue').Component} component - The Vue component to render for the route.
 */
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
