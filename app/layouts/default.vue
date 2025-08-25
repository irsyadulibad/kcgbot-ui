<script setup lang="ts">
const route = useRoute();
const toggle = ref(false);

const toggleSidebar = () => {
  toggle.value = !toggle.value;
};
</script>

<template>
  <main class="box-border flex h-screen w-full overflow-hidden">
    <PanelSidebar
      :open="toggle"
      @focusout="toggleSidebar"
      v-if="route.name !== 'auth-login'"
    />
    <div class="box-border w-full flex-1">
      <PanelNavbar
        @toggleSidebar="toggleSidebar"
        v-if="route.name !== 'auth-login'"
      />
      <div class="box-border w-full overflow-y-auto p-4">
        <slot />
      </div>
    </div>
  </main>
</template>
