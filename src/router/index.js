import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import Index from "../views/Index.vue";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Index',
            redirect: { path: '/dashboard' },
            component: Index,
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                }
            ]
        }
    ]
})

export default router