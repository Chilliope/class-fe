import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import Index from "../views/Index.vue";
import Dashboard from "../views/Dashboard.vue";
import Project from "../views/Project/Project.vue";
import Team from "../views/Team/Team.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                guestRequired: true
            }
        },
        {
            path: '/',
            name: 'Index',
            redirect: { path: '/dashboard' },
            component: Index,
            meta: {
                authRequired: true
            },
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: '/project',
                    name: 'Project',
                    component: Project
                },
                {
                    path: '/team',
                    name: 'Team',
                    component: Team
                },
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem("auth_token")

    if (to.matched.some((record) => record.meta.guestRequired)) {
        if (isLoggedIn == null) {
            next()
        } else {
            next("/dashboard")
        }
    } else if (to.matched.some((record) => record.meta.authRequired)) {
        if (isLoggedIn == null) {
            next("/login")
        } else {
            next()
        }
    } else {
        next()
    }
})


export default router