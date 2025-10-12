import axios from '../axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSwal from '../swal'

export default function useTeamPost() {
    const { accepted, rejected, confirm } = useSwal()
    const teamPosts = ref([])
    const route = useRoute()
    const router = useRouter()

    async function getTeamPost() {
        const response = await axios.get(`/api/v1/team-post/${route.params.slug}`)
        teamPosts.value = response.data.data
        console.log(teamPosts.value)
    }

    async function createTeamPost(payload) {
        try {
            const response = await axios.post(`/api/v1/team-post/${route.params.slug}`, payload)
            accepted('Post Created')
        } catch (error) {
            rejected('Failed')
        }
    }

    return {
        teamPosts,
        getTeamPost,
        createTeamPost
    }
}