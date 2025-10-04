import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue"
import Index from "../views/Index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'App',
            redirect: { path: '/home' },
            component: App,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Index
                }
            ]
        }
    ]
})

export default router