import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '../axios'
import useSwal from '../swal'

export default function useTeam() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    const team = ref([])

    async function index() {
        const response = await axios.get('/api/v1/team') 
        team.value = response.data.data
        console.log(team.value)
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/team', payload)
            accepted('Team Created')
        } catch (error) {
            console.log(error)
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/team/${route.params.slug}`) 
        team.value = response.data.data
        console.log(team.value)
    }

    return {
        team,
        index,
        create,
        show
    }
}