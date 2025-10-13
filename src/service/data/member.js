import axios from '../axios'
import { ref } from 'vue'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useMember() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    const member = ref([])

    async function getMember() {
        const response = await axios.get('/api/v1/user')
        member.value = response.data.data
    }

    async function createMember(payload) {
        try {
            const response = await axios.post('/api/v1/user', payload)
            accepted('Member Added')
            getMember()
        } catch (error) {
            rejected('Member Failed to Add')
            console.log(error)
        }
    }

    return {
        member,
        getMember,
        createMember
    }
}