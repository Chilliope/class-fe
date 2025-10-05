<template>
    <nav class="bg-white shadow-xs w-full h-16 flex justify-center px-4 py-2">
        <div class="w-full lg:w-[1200px] flex justify-between items-center">
            <div>
                <img :src="'educafy.png'" alt="" class="w-full h-12 object-cover" />
            </div>
            <div class="lg:hidden">
                <button ref="menuButtonRef" @click.stop="togglePopup">
                    <Menu />
                </button>
            </div>
            <ul class="hidden lg:flex gap-8">
                <li v-for="item in items" :key="item.name" class="w-full h-max flex justify-between">
                    <router-link :to="item.path" class="flex items-center gap-2 hover:text-blue-500 hover:duration-150" :class="item.name == route.name ? 'text-blue-500 hover:text-blue-600' : ''">
                        <!-- <component :is="item.icon" class="w-4 h-4" /> -->
                        <span>{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
            <div class="hidden lg:flex gap-6 items-center">
                <div class="flex gap-2 items-center">
                    <img :src="'default.jpg'" alt="User Picture" class="w-9 h-9 object-cover rounded-full">
                    <div class="flex flex-col">
                        <span class="text-sm">{{ user.firstname }} {{ user.lastname }}</span>
                        <span class="text-xs text-slate-400 capitalize">{{ user.role }}</span>
                    </div>
                </div>
                <form @submit.prevent="doLogout">
                    <button class="text-start rounded-lg hover:text-blue-500 hover:duration-150 flex gap-3 items-center">
                        <LogOut class="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    </nav>

    <div v-if="isPopup" ref="popupRef"
        class="bg-white h-max fixed top-20 right-4 border border-slate-200 w-44 rounded-lg p-2 shadow-lg">
        <div class="flex gap-3 items-center border-b border-slate-200 pb-1">
            <div class="flex flex-col">
                    <span class="text-sm">{{ user.firstname }} {{ user.lastname }}</span>
                    <span class="text-xs text-slate-400 capitalize">{{ user.role }}</span>
            </div>
        </div>

        <ul class="flex flex-col gap-3 py-1 border-b border-slate-200">
            <li v-for="item in items" :key="item.name" class="w-full h-max flex justify-between">
                <router-link :to="item.path" class="flex items-center gap-2">
                    <component :is="item.icon" class="w-4 h-4" />
                    <span>{{ item.name }}</span>
                </router-link>
                <div v-if="item.name === route.name" class="w-1 h-6 bg-blue-500 rounded-full"></div>
            </li>
        </ul>

        <ul class="pt-2">
            <li>
                <form @submit.prevent="doLogout">
                    <button class="w-full text-start rounded-lg text-blue-500 flex gap-3 items-center">
                        <LogOut class="w-4 h-4" />
                        <span>Sign Out</span>
                    </button>
                </form>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, Gauge, FolderKanban, Users, LogOut } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import useAuth from '../service/auth'

const isPopup = ref(false)
const popupRef = ref(null)
const menuButtonRef = ref(null)
const route = useRoute()
const { getUser, user, logout } = useAuth()

const items = [
    { path: '/dashboard', name: 'Dashboard', icon: Gauge },
    { path: '/project', name: 'Project', icon: FolderKanban },
    { path: '/team', name: 'Team', icon: Users },
]

const togglePopup = () => {
    isPopup.value = !isPopup.value
}

const handleClickOutside = (event) => {
    if (
        popupRef.value &&
        !popupRef.value.contains(event.target) &&
        menuButtonRef.value &&
        !menuButtonRef.value.contains(event.target)
    ) {
        isPopup.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    getUser()
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

function doLogout() {
    logout()
}
</script>
