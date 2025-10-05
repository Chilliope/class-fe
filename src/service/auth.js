import axios from "./axios"
import useSwal from "./swal"
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"

export default function useLogin() {
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

    function setToken(token) {
        localStorage.setItem('auth_token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    return {
        user,
        login,
    }
}