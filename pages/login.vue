<template>
    <div class="min-h-screen flex items-center justify-center">
      <form @submit.prevent="handleLogin" class="bg-white p-8 rounded shadow-md w-96">
        <h1 class="text-2xl mb-4">Login</h1>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="border p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="border p-2 w-full"
            placeholder="Enter your password"
          />
        </div>
        <button class="bg-blue-500 text-white p-2 rounded w-full" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
        <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '~/stores/auth';
  
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const loading = ref(false);
  
  const authStore = useAuthStore();
  
  const handleLogin = async () => {
    error.value = '';
    loading.value = true;
    try {
      await authStore.login({ email: email.value, password: password.value });
      navigateTo('/dashboard');
    } catch (err) {
      error.value = err.message || 'Login failed.';
    } finally {
      loading.value = false;
    }
  };
  </script>
  