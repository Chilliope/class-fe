<template>
    <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <!-- Logo -->
            <div class="flex justify-center mb-6">
                <img :src="'/rk2.png'" alt="Logo" class="h-16 w-auto">
            </div>

            <!-- Judul -->
            <h2 class="text-center text-2xl font-semibold text-slate-800 mb-6">
                Sign in to your account
            </h2>

            <!-- Form -->
            <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Email</label>
                    <input v-model="email" type="email" placeholder="you@example.com"
                        class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Password</label>
                    <input v-model="password" type="password" placeholder="••••••••"
                        class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                        required />
                </div>

                <button type="submit"
                    class="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
                    Login
                </button>
            </form>

        </div>
    </div>
</template>


