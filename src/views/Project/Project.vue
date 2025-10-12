<template>
    <div class="flex flex-col-reverse lg:flex-row justify-between">
        <div class="flex justify-end gap-2">
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/dashboard">Dashboard</router-link>
            <span class="text-slate-500">/</span>
            <router-link class="text-sky-500 hover:text-sky-600 hover:duration-150" to="/project">Project</router-link>
        </div>
    </div>
    <div class="flex flex-col mt-8">
        <h2 class="text-lg lg:text-xl font-semibold">Project</h2>

        <div class="bg-white w-full h-44 mt-3 shadow-xs rounded-lg flex justify-center items-center">
            <span class="text-slate-400 text-lg lg:text-xl">Sorry, you all don't need project right now :D</span>
        </div>
    </div>
</template>