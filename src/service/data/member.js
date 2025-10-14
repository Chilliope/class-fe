import axios from '../axios'
import { ref } from 'vue'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useMember() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    const member = ref([])
    const showMember = ref([])

    async function getMember() {
        const response = await axios.get('/api/v1/user')
        member.value = response.data.data
    }

    async function getDetailMember(id) {
        const response = await axios.get(`/api/v1/user/${id}`)
        showMember.value = response.data
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

    async function editMember(payload, id) {
        try {
            const response = await axios.put(`/api/v1/user/${id}`, payload)
            accepted('Member Updated')
            getMember()
        } catch (error) {
            rejected('Member Updated Failed')
        }
    }

    async function deleteMember(id) {
        const response = await confirm('Are You Sure?')

        if (response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/user/${id}`)
                accepted('User Deleted')
                getMember()
            } catch (error) {
                rejected('User Deleted Failed')
            }
        }
    }


    return {
        member,
        showMember,
        getMember,
        getDetailMember,
        createMember,
        editMember,
        getMember,
        deleteMember
    }
}