<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main class="flex h-screen overflow-y-auto">
    <PanelSidebar v-if="route.name !== 'auth-login'" />
    <div class="flex-1">
      <PanelNavbar v-if="route.name !== 'auth-login'" />
      <div class="px-6 py-4">
        <slot />
      </div>
    </div>
  </main>
</template>
