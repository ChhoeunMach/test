<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar component with toggle functionality and fixed position -->
    <Sidebar :sidebarOpen="sidebarOpen" class="shadow-md" />

    <!-- Main content area -->
    <div :class="['flex-1 flex flex-col transition-all duration-700 ease-in-out overflow-y-auto', sidebarOpen ? 'ml-0' : 'ml-4']">
      <!-- Navbar with toggle button -->
      <Navbar @toggleSidebar="toggleSidebar" :class="sidebarOpen ? '' : 'rounded-bl-md'" />

      <!-- Main content section with scrollable content -->
      <main class=" " :class="['bg-white my-4 mr-4 rounded-md', sidebarOpen ? 'ms-4' : '']">
      <div class="p-4 rounded-md">
        <slot/>
      </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'

const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
