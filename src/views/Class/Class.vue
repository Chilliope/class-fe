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
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/class/class-1">{{ route.name
            }}</router-link>
        </div>
    </div>

    <div class="mt-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex flex-col w-full">
                <h2 class="text-lg lg:text-xl font-semibold">Latest Posts</h2>
                <div class="flex flex-col">
                    <div v-for="item in 3" class="bg-white w-full h-max rounded-lg shadow-xs mt-3 px-4 py-2">
                        <div class="flex justify-between pb-2">
                            <div class="flex gap-3">
                                <img :src="'/4.png'" alt="user picture" class="w-9 h-9 object-cover rounded-full">
                                <div class="flex flex-col">
                                    <span>Erlang Andriyanputra</span>
                                    <span class="text-xs lg:text-sm text-slate-400">Lead</span>
                                </div>
                            </div>
                            <span class="text-slate-400 text-sm">1 week ago</span>
                        </div>
                        <p class="text-slate-700 border-b border-slate-200 pb-2">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, dolorum ducimus illo esse explicabo qui quae, eligendi
                            obcaecati facere iusto saepe aspernatur tempora cupiditate.</p>
                        <!-- File Preview -->
                        <div class="flex flex-col lg:flex-row gap-3 mt-3">
                            <a
                                href="/dummy.pdf"
                                target="_blank"
                                class="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:bg-slate-100 transition">
                                <!-- Ikon File -->
                                <img src="/pdf.webp" alt="file icon" class="w-10 h-10 object-contain" />
                                <!-- Info File -->
                                <div class="flex flex-col">
                                    <span class="text-slate-600">dummy.pdf</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:w-2/5">
                <h2 class="text-lg lg:text-xl font-semibold">Progress & Other</h2>
                <div class="mt-3 w-full">
                    <router-link to="" v-for="current in currentClass"
                        class="bg-white flex flex-col w-full h-max shadow-xs rounded-lg px-4 py-2 overflow-hidden hover:shadow-md transition-all duration-200">
                        <div class="font-medium">{{ current.name }}</div>
                        <ul class="flex gap-3 mt-3">
                            <li class="text-slate-400 text-xs lg:text-sm flex gap-1 items-center">
                                <Library class="w-4 h-4" />
                                <span>{{ current.module }} Modules</span>
                            </li>
                            <li class="text-slate-400 text-xs lg:text-sm flex gap-1 items-center">
                                <AlarmClockCheck class="w-4 h-4" />
                                <span>{{ current.task }} Tasks</span>
                            </li>
                        </ul>
                        <div class="mt-4">
                            <div class="bg-gray-200 h-3 rounded-full overflow-hidden">
                                <div class="h-3 rounded-full transition-all duration-300"
                                    :class="current.unlocked ? 'bg-blue-600' : 'bg-gray-400'"
                                    :style="{ width: (current.unlocked ? getProgress(current) : 0).toFixed(1) + '%' }">
                                </div>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">
                                {{ current.unlocked ? getProgress(current).toFixed(1) : 0 }}% completed
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="bg-white shadow-xs rounded-lg  h-max px-4 py-2 mt-3">
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
                        </div>
                    </div>
                    <hr class="mt-3 border border-slate-200">
                    <div class="flex flex-col gap-3 mt-3">
                        <div class="flex gap-2 items-center">
                            <img :src="'/4.png'" alt="Member Picture" class="w-8 h-8 rounded-full">
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
</template>

<script setup>
import { useRoute } from 'vue-router';
import { Library, AlarmClockCheck, Lock } from 'lucide-vue-next'

const route = useRoute()

const currentClass = [
    {
        path: 'hypertext-markup-language',
        name: 'Hypertext Markup Language',
        image: 'html.png',
        module: 8,
        task: 3,
        completedModules: 6,
        completedTasks: 2,
        unlocked: true // hanya HTML yang terbuka
    },
]

// Contoh daftar kursus
const courses = [
    {
        path: 'hypertext-markup-language',
        name: 'Hypertext Markup Language',
        image: 'html.png',
        module: 8,
        task: 3,
        completedModules: 6,
        completedTasks: 2,
        unlocked: true // hanya HTML yang terbuka
    },
    {
        path: 'cascading-style-sheet',
        name: 'Cascading Style Sheet',
        image: 'css.png',
        module: 8,
        task: 4,
        completedModules: 4,
        completedTasks: 1,
        unlocked: false
    },
    {
        path: 'javascript',
        name: 'Javascript',
        image: 'js.png',
        module: 24,
        task: 12,
        completedModules: 5,
        completedTasks: 2,
        unlocked: false
    },
    {
        path: 'github',
        name: 'GitHub',
        image: 'github.png',
        module: 1,
        task: 1,
        completedModules: 1,
        completedTasks: 0,
        unlocked: false
    },
    {
        path: 'bootstrap',
        name: 'Bootstrap',
        image: 'bootstrap.png',
        module: 6,
        task: 3,
        completedModules: 3,
        completedTasks: 2,
        unlocked: false
    },
    {
        path: 'php',
        name: 'PHP',
        image: 'php.png',
        module: 24,
        task: 12,
        completedModules: 10,
        completedTasks: 4,
        unlocked: false
    },
    {
        path: 'laravel',
        name: 'Laravel',
        image: 'laravel.png',
        module: 24,
        task: 12,
        completedModules: 0,
        completedTasks: 0,
        unlocked: false
    },
    {
        path: 'tailwind-css',
        name: 'Tailwind CSS',
        image: 'tailwind.png',
        module: 10,
        task: 6,
        completedModules: 7,
        completedTasks: 4,
        unlocked: false
    },
    {
        path: 'vuejs',
        name: 'Vue.JS',
        image: 'vue.png',
        module: 10,
        task: 6,
        completedModules: 9,
        completedTasks: 5,
        unlocked: false
    }
]

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

// Bobot progress
const moduleWeight = 0.7
const taskWeight = 0.3

// Fungsi menghitung progress per course
const getProgress = (course) => {
    const moduleProgress = course.module > 0 ? course.completedModules / course.module : 0
    const taskProgress = course.task > 0 ? course.completedTasks / course.task : 0
    return (moduleProgress * moduleWeight + taskProgress * taskWeight) * 100
}
</script>