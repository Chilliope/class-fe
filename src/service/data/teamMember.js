import axios from '../axios'
import { ref } from 'vue'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useTeamMember() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()

    async function addMember(payload) {
        try {
            const response = await axios.post(`/api/v1/teams/${route.params.slug}`, payload)
            accepted('New Member Added')
        } catch (error) {
            rejected('failed')
        }
    }

    return {
        addMember
    }
}