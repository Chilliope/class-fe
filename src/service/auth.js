import axios from "./axios"
import useSwal from "./swal"
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"

export default function useAuth() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    const user = ref([])

    async function login(payload) {
        try {
            const response = await axios.post('/api/v1/login', payload)
            accepted('Redirect to Dashboard')
            setToken(response.data.token)
            router.push('/dashboard')
        } catch (error) {
            rejected('Email or Password Invalid')
        }
    }

    async function getUser() {
        try {            
            const response = await axios.get('/api/user')
            user.value = response.data
        } catch (error) {
            removeToken()
        }
    }

    
    async function logout() {
        try {
            const response = await axios.post('/api/v1/logout')
            removeToken()
            router.push('/login')
        } catch (error) {
            rejected('Logout Failed, try again')
        }
    }

    function setToken(token) {
        localStorage.setItem('auth_token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    function removeToken() {
        localStorage.removeItem('auth_token')
        axios.defaults.headers.common.Authorization = `Bearer `
    }

    return {
        user,
        login,
        logout,
        getUser
    }
}