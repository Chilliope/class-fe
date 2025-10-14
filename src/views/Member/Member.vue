<template>
    <div class="flex flex-col-reverse lg:flex-row justify-between">
        <div class="flex justify-end gap-2">
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150"
                to="/dashboard">Dashboard</router-link>
            <span class="text-slate-500">/</span>
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/member">Member</router-link>
        </div>
    </div>

    <div class="flex flex-col mt-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex flex-col w-full">
                <div class="flex justify-between">
                    <h2 class="text-lg lg:text-xl font-semibold">Members</h2>
                    <div v-if="user.role == 'lead'">
                        <button
                            @click="showModal = true"
                            class="bg-sky-500 px-4 py-2 rounded-lg text-white text-center hover:bg-sky-600 hover:duration-150 flex items-center gap-1">
                            <Plus></Plus>
                            <span>Add Member</span>
                        </button>
                    </div>
                </div>
                <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="member in member" :key="member.id"
                        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <img :src="baseUrl + '/' + member.image" alt="Profile Image" class="w-full h-52 object-cover" />
                        <div class="flex flex-col gap-1 px-5 py-4 border-b border-slate-100">
                            <h3 class="font-semibold text-lg text-slate-800">{{ member.firstname }} {{ member.lastname }}</h3>
                            <!-- <p class="text-slate-500 text-sm leading-snug">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p> -->
                        </div>
                        <div class="flex items-center justify-end px-5 py-3 gap-3">
                            <button @click="popupEdit(member.id)" class="bg-blue-200 text-blue-500 px-4 w-24 py-2 rounded-lg flex justify-center gap-2 hover:bg-blue-500 hover:text-white hover:duration-150">
                                <span>Edit</span>
                            </button>
                            <form @submit.prevent="deleteMember(member.id)">
                                <button class="bg-red-200 text-red-500 px-4 w-24 py-2 rounded-lg flex justify-center gap-2 hover:bg-red-500 hover:text-white hover:duration-150">
                                <span>Delete</span>
                            </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <!-- <div class="lg:w-2/5 mt-[52px]">
                <div class="bg-white w-full h-64 shadow-xs rounded-lg"></div>
            </div> -->
        </div>
    </div>

    
    <!-- Popup Input Form -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-96 lg:w-[440px] 2xl:w-[600px] p-6">
            <h2 class="text-lg font-semibold mb-4">Add Member</h2>

            <form @submit.prevent="doCreateMember" class="flex flex-col gap-3">
                <div class="flex flex-col gap-3 lg:flex-row">
                    <div>
                        <label class="text-sm text-gray-600">Firstname</label>
                        <input type="text" v-model="form.firstname" placeholder="Firstname" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                    </div>
                    <div>
                        <label class="text-sm text-gray-600">Lastname</label>
                        <input type="text" v-model="form.lastname" placeholder="Lastname" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                    </div>
                </div>

                <div>
                    <label class="text-sm text-gray-600">Email</label>
                    <input type="email" v-model="form.email" placeholder="email@republikode.com" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                </div>
                <div>
                    <label class="text-sm text-gray-600">Password</label>
                    <input type="password" v-model="form.password" placeholder="Password" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
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
    <div v-if="showModalEdit" class="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-96 lg:w-[440px] 2xl:w-[600px] p-6">
            <h2 class="text-lg font-semibold mb-4">Add Member</h2>

            <form @submit.prevent="editMember(showMember, showMember.id)" class="flex flex-col gap-3">
                <div class="flex flex-col gap-3 lg:flex-row">
                    <div>
                        <label class="text-sm text-gray-600">Firstname</label>
                        <input type="text" v-model="showMember.firstname" placeholder="Firstname" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                    </div>
                    <div>
                        <label class="text-sm text-gray-600">Lastname</label>
                        <input type="text" v-model="showMember.lastname" placeholder="Lastname" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                    </div>
                </div>

                <div>
                    <label class="text-sm text-gray-600">Email</label>
                    <input type="email" v-model="showMember.email" placeholder="email@republikode.com" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                </div>
                <div>
                    <label class="text-sm text-gray-600">Reset Password</label>
                    <input type="password" v-model="showMember.password" placeholder="Password" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none">
                </div>

                <div class="flex justify-end gap-2 mt-4">
                    <button type="button" @click="showModalEdit = false"
                        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                        Cancel
                    </button>
                    <button type="submit" class="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                        Edit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import useAuth from '../../service/auth'
import useMember from '../../service/data/member'
import { Plus, Pencil, Trash } from 'lucide-vue-next'

const baseUrl = import.meta.env.VITE_API_URL
const showModal = ref(false)
const showModalEdit = ref(false)
const { user, getUser } = useAuth()
const { member, showMember, getMember, getDetailMember, createMember, editMember, deleteMember } = useMember()

const form = reactive({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
})

function popupEdit(id) {
    showModalEdit.value = true
    console.log(id)
    getDetailMember(id)
}

const memberId = 0;

onMounted(() => {
    getUser()
    getMember()
})

function doCreateMember() {
    createMember({...form})
    showModal.value = false 
}
</script>