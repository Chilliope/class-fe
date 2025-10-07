import { useRoute, useRouter } from 'vue-router'
import axios from '../axios'
import useSwal from '../swal'

export default function useTeam() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/team', payload)
            accepted('Team Created')
        } catch (error) {
            console.log(error)
        }
    }

    return {
        create
    }
}