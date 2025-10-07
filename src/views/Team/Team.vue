<template>
    <div class="flex flex-col-reverse lg:flex-row justify-between">
        <div class="flex flex-col">
            <!-- <h1 class="text-xl lg:text-2xl">Hi, <span class="font-medium">{{ user.firstname }}</span></h1> -->
            <!-- <h2 class="text-lg lg:text-xl">Welcome back to Dashboard</h2> -->
        </div>
        <div class="flex justify-end gap-2">
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150"
                to="/dashboard">Dashboard</router-link>
            <span class="text-slate-500">/</span>
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/team">Team</router-link>
        </div>
    </div>
    <div class="flex flex-col mt-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex flex-col w-full">
                <div class="flex justify-between">
                    <h2 class="text-lg lg:text-xl font-semibold">Teams</h2>
                    <div v-if="user.role == 'lead'">
                        <button
                            @click="showModal = true"
                            class="bg-sky-500 px-4 py-2 rounded-lg text-white text-center hover:bg-sky-600 hover:duration-150 flex items-center gap-1">
                            <Plus></Plus>
                            <span>Create</span>
                        </button>
                    </div>
                </div>
                <div class="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-3 ">
                    <div class="bg-white shadow-xs rounded-lg w-full h-max px-4 py-2">
                        <img src="https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149225176.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Team Banner" class="w-full h-24 object-cover rounded-lg">
                        <div class="mt-1">
                            <h6 class="font-semibold">Antariksa Team</h6>
                            <div class="flex flex-col lg:flex-row gap-1 mt-3">
                                <div v-for="member in members" class="flex gap-2 items-center">
                                    <img :src="member.image" alt="Member Picture" class="w-8 h-8 rounded-full">
                                    <!-- <div class="flex flex-col">
                                        <span>{{ member.name }}</span>
                                        <span class="text-slate-400 text-xs lg:text-sm capitalize">{{ member.role }}</span>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 border border-slate-200">
                        <div class="flex flex-col gap-3 mt-3">
                            <div class="flex gap-2 items-center">
                                <img :src="'4.png'" alt="Member Picture" class="w-8 h-8 rounded-full">
                                <div class="flex flex-col">
                                    <span>Erlang Andriyanputra</span>
                                    <span class="text-slate-400 text-xs lg:text-sm capitalize">lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-xs rounded-lg w-full h-max px-4 py-2">
                        <img src="https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149225176.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Team Banner" class="w-full h-24 object-cover rounded-lg">
                        <div class="mt-1">
                            <h6 class="font-semibold">Antariksa Team</h6>
                            <div class="flex flex-col lg:flex-row gap-1 mt-3">
                                <div v-for="member in members" class="flex gap-2 items-center">
                                    <img :src="member.image" alt="Member Picture" class="w-8 h-8 rounded-full">
                                    <!-- <div class="flex flex-col">
                                        <span>{{ member.name }}</span>
                                        <span class="text-slate-400 text-xs lg:text-sm capitalize">{{ member.role }}</span>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 border border-slate-200">
                        <div class="flex flex-col gap-3 mt-3">
                            <div class="flex gap-2 items-center">
                                <img :src="'4.png'" alt="Member Picture" class="w-8 h-8 rounded-full">
                                <div class="flex flex-col">
                                    <span>Erlang Andriyanputra</span>
                                    <span class="text-slate-400 text-xs lg:text-sm capitalize">lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-xs rounded-lg w-full h-max px-4 py-2">
                        <img src="https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149225176.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Team Banner" class="w-full h-24 object-cover rounded-lg">
                        <div class="mt-1">
                            <h6 class="font-semibold">Antariksa Team</h6>
                            <div class="flex flex-col lg:flex-row gap-1 mt-3">
                                <div v-for="member in members" class="flex gap-2 items-center">
                                    <img :src="member.image" alt="Member Picture" class="w-8 h-8 rounded-full">
                                    <!-- <div class="flex flex-col">
                                        <span>{{ member.name }}</span>
                                        <span class="text-slate-400 text-xs lg:text-sm capitalize">{{ member.role }}</span>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 border border-slate-200">
                        <div class="flex flex-col gap-3 mt-3">
                            <div class="flex gap-2 items-center">
                                <img :src="'4.png'" alt="Member Picture" class="w-8 h-8 rounded-full">
                                <div class="flex flex-col">
                                    <span>Erlang Andriyanputra</span>
                                    <span class="text-slate-400 text-xs lg:text-sm capitalize">lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-2/5">
                <h1 class="font-medium">Your Team</h1>
                <div class="bg-white shadow-xs rounded-lg h-max px-4 py-2 mt-3">
                    <img src="https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149225176.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Team Banner" class="w-full h-24 object-cover rounded-lg">
                    <div class="mt-1">
                        <h6 class="font-semibold">Antariksa Team</h6>
                        <div class="flex flex-col gap-3 mt-3">
                            <div v-for="member in members" class="flex gap-2 items-center">
                                <img :src="member.image" alt="Member Picture" class="w-8 h-8 rounded-full">
                                <div class="flex flex-col">
                                    <span>{{ member.name }}</span>
                                    <span class="text-slate-400 text-xs lg:text-sm capitalize">{{ member.role }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-3 border border-slate-200">
                    <div class="flex flex-col gap-3 mt-3">
                        <div class="flex gap-2 items-center">
                            <img :src="'4.png'" alt="Member Picture" class="w-8 h-8 rounded-full">
                            <div class="flex flex-col">
                                <span>Erlang Andriyanputra</span>
                                <span class="text-slate-400 text-xs lg:text-sm capitalize">lead</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Popup Input Form -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-96 lg:w-[440px] 2xl:w-[600px] p-6">
            <h2 class="text-lg font-semibold mb-4">Create Team</h2>

            <form @submit.prevent="submitForm" class="flex flex-col gap-3">
                <div>
                    <label class="text-sm text-gray-600">Team Name</label>
                    <input v-model="form.team" type="text" placeholder="Enter team name"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                </div>

                <div>
                    <label class="text-sm text-gray-600">Description</label>
                    <textarea v-model="form.desc" placeholder="Enter description"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none resize-none"></textarea>
                </div>

                <div>
                    <label class="text-sm text-gray-600">Image URL (optional)</label>
                    <input type="file" placeholder="Enter image URL"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                </div>

                <div>
                    <label class="text-sm text-gray-600">Banner URL (optional)</label>
                    <input type="file" placeholder="Enter banner URL"
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
import { onMounted, ref } from 'vue'
import useAuth from '../../service/auth'
import useTeam from '../../service/data/team'

const { user, getUser } = useAuth()
const { create } = useTeam()

const showModal = ref(false)

const form = ref({
    team: '',
    desc: '',
    image: '',
    banner: ''
})

const submitForm = () => {
    create(form.value)
    showModal.value = false
}

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

onMounted(() => {
    getUser()
})
</script>