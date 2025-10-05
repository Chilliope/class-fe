<template>
    <Navbar></Navbar>
    <div class="px-4 py-2 w-full lg:flex lg:justify-center mt-4">
        <div class="lg:w-[1200px]">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>