<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const { fetchProfile } = useAuthStore();
const route = useRoute();
const toggle = ref(false);

const toggleSidebar = () => {
  toggle.value = !toggle.value;
};

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <main class="box-border flex h-screen w-full overflow-y-auto">
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
      <div class="box-border px-2 py-4 lg:px-6">
        <slot />
      </div>
    </div>
  </main>
</template>
