<template>
  <footer class="bg-white py-10 mt-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Brand & Description -->
      <div>
        <img :src="'educafy.png'" alt="Educafy">
        <p class="text-sm text-slate-400 mt-2">
          Empowering the next generation of developers.
        </p>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Menu</h3>
        <ul class="space-y-2 text-sm text-slate-400">
            <li v-for="item in items">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
      </div>

      <!-- Social & Address -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Social Media</h3>
        <div class="flex gap-4 mb-4">
            <a href="https://instagram.com/bksahabatsiswa" target="_blank" class="text-slate-400 text-sm flex items-center gap-2">
                <Instagram class="w-5 h-5"></Instagram>
                <span>Instagram</span>
          </a>
        </div>

        <h3 class="text-lg font-semibold mb-1">Developer</h3>
        <p class="text-sm text-slate-400">
            work from home.
        </p>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-slate-200 mt-10 pt-4 text-center text-sm text-slate-500">
      © 2025 Built with ❤️ by <span class="text-red-500">Republikode</span>. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { Instagram } from 'lucide-vue-next'

const items = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/project', name: 'Project' },
    { path: '/team', name: 'Team' },
]

</script>