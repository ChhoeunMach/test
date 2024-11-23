<template>
    <div class="min-h-screen p-8">
      <h1 class="text-3xl mb-4">Welcome, {{ authStore.user?.name || 'User' }}!</h1>
      <button @click="authStore.logout()" class="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '~/stores/auth';
  const authStore = useAuthStore();
  </script>
  