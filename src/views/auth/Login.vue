<template>
    <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <!-- Logo -->
            <div class="flex justify-center mb-6">
                <img :src="'/educafy.png'" alt="Logo" class="h-16 w-auto">
            </div>

            <!-- Judul -->
            <h2 class="text-center text-2xl font-semibold text-slate-800 mb-6">
                Sign in to your account
            </h2>

            <!-- Form -->
            <form @submit.prevent="doLogin" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Email</label>
                    <input v-model="forms.email" type="email" placeholder="you@example.com"
                        class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Password</label>
                    <input v-model="forms.password" type="password" placeholder="••••••••"
                        class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                        required />
                </div>

                <button type="submit"
                    class="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition">
                    Login
                </button>
            </form>

        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import useAuth from '../../service/auth';

const { login } = useAuth()

const forms = reactive({
    email: '',
    password: ''
})

function doLogin() {
    login({...forms})
}
</script>
