<template>
    <div class="flex justify-end gap-2">
        <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/dashboard">Dashboard</router-link>
        <span class="text-slate-500">/</span>
        <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/team">Team</router-link>
        <span class="text-slate-500">/</span>
        <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" :to="`/team/` + team.slug">{{ team.team
        }}</router-link>
    </div>

    <div class="flex flex-col mt-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex flex-col w-full">
                <div class="w-full flex justify-between">
                    <h2 class="text-lg lg:text-xl font-semibold">{{ team.team }} Team</h2>
                    <button @click="showModal = true" class="bg-sky-500 px-4 py-2 rounded-lg text-white text-center hover:bg-sky-600 hover:duration-150 flex items-center gap-1">Create Post</button>
                </div>
                <div class="flex flex-col gap-8 mt-3">
                    <div v-for="post in teamPosts" class="bg-white px-4 py-3 w-full h-max shadow-xs rounded-lg">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-3">
                                <img :src="baseUrl + '/' + post.user.image" alt="user picture"
                                    class="w-9 h-9 rounded-full object-cover lg:w-11 lg:h-11">
                                <div class="flex flex-col">
                                    <span>{{ post.user.firstname }} {{ post.user.lastname }}</span>
                                    <span class="text-xs lg:text-sm text-slate-400 capitalize">{{ post.user.role }}</span>
                                </div>
                            </div>
                            <span class="text-xs lg:text-sm text-slate-400">created at {{ timeAgo(post.created_at) }}</span>
                        </div>
                        <div class="mt-4 border-b border-slate-200 pb-4">
                            <p>{{ post.description }}</p>
                        </div>
                        <div class="flex justify-between items-end mt-4">
                            <div class="flex gap-8">
                                <button class="flex gap-1 text-green-500 hover:text-green-600 hover:duration-150">
                                    <Heart></Heart>
                                    <span>4</span>
                                </button>
                                <button class="flex gap-1 hover:text-slate-700 hover:duration-150">
                                    <MessageCircle></MessageCircle>
                                    <span>7</span>
                                </button>
                            </div>
                            <form @submit.prevent="deleteTeamPost(post.id)" v-if="post.user.id == user.id">
                                <button class="bg-red-200 text-red-500 hover:bg-red-500 hover:text-white hover:duration-150 px-4 py-2 rounded-lg">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-2/5">
                <h1 class="text-lg lg:text-xl font-semibold">Handled Team</h1>
                <div class="bg-white shadow-xs rounded-lg h-max px-4 py-2 mt-3">
                    <img src="https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149225176.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Team Banner" class="w-full h-24 object-cover rounded-lg">
                    <div class="mt-1">
                        <h6 class="font-semibold">Antariksa Team</h6>
                        <div class="flex flex-col gap-3 mt-3">
                            <div v-for="member in members" class="flex gap-2 items-center">
                                <img :src="'/' + member.image" alt="Member Picture" class="w-8 h-8 rounded-full">
                                <div class="flex flex-col">
                                    <span>{{ member.name }}</span>
                                    <span class="text-slate-400 text-xs lg:text-sm capitalize">{{ member.role }}</span>
                                </div>
                            </div>
                            <div class="flex gap-2 items-center">
                                <img :src="'/4.png'" alt="Member Picture" class="w-8 h-8 rounded-full">
                                <div class="flex flex-col">
                                    <span>Erlang Andriyanputra</span>
                                    <span class="text-slate-400 text-xs lg:text-sm capitalize">lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-3 border border-slate-200">
                    <div class="flex flex-col gap-3 mt-3">
                        <button class="bg-blue-200 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white hover:duration-150">Add Member</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Popup Input Form -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-96 lg:w-[440px] 2xl:w-[600px] p-6">
            <h2 class="text-lg font-semibold mb-4">Create Post</h2>

            <form @submit.prevent="submitForm" class="flex flex-col gap-3">
                <div>
                    <label class="text-sm text-gray-600">Post</label>
                    <textarea v-model="form.description" placeholder="Hmzzz... "
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none"></textarea>
                </div>

                <div class="flex justify-end gap-2 mt-4">
                    <button type="button" @click="showModal = false"
                        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                        Cancel
                    </button>
                    <button type="submit" class="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div v-if="showModalAddMember" class="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-96 lg:w-[440px] 2xl:w-[600px] p-6">
            <h2 class="text-lg font-semibold mb-4">Add Member</h2>

            <form @submit.prevent="submitFormAddMember" class="flex flex-col gap-3">
                <div>
                    <label class="text-sm text-gray-600">Email</label>
                    <input v-model="formAddMember.email" type="email" placeholder="email@republikode.com"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                </div>

                <div class="flex justify-end gap-2 mt-4">
                    <button type="button" @click="showModal = false"
                        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                        Cancel
                    </button>
                    <button type="submit" class="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useAuth from '../../service/auth';
import useTeam from '../../service/data/team';
import useTeamPost from '../../service/data/teamPost';
import { timeAgo } from '../../utils/time';

import { Heart, MessageCircle } from 'lucide-vue-next'

const baseUrl = import.meta.env.VITE_API_URL

const { user, getUser } = useAuth()
const { show, team } = useTeam()
const { teamPosts, getTeamPost, createTeamPost, deleteTeamPost } = useTeamPost()

const showModal = ref(false)
const showModalAddMember = ref(false)

const members = [
    {
        name: 'Naufal Allam',
        role: 'member',
        image: '1.png'
    },
    {
        name: 'Fadli Rahardiarsya',
        role: 'member',
        image: '2.png'
    },
    {
        name: 'Dionisius Hendra Hernando',
        role: 'member',
        image: '3.png'
    },
]

const form = ref({
    description: '',
})

const formAddMember = ref({
    email: ''
})


const submitForm = async () => {
    await createTeamPost(form.value)
    await getTeamPost()
    showModal.value = false
    form.value.description = ''
}

const submitFormAddMember = async () => {
    
}

onMounted(() => {
    show()
    getUser()
    getTeamPost()
})
</script>