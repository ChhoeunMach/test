<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar component with toggle functionality and fixed position -->
 <header>djhjdjd</header>
    <!-- Main content area -->
    <div class="flex-1 flex flex-col">  
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
const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
