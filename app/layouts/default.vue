<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const target = useTemplateRef<HTMLElement>("sidebar");

onClickOutside(target, (event) => {
  event.preventDefault();
  toggle.value = false;
});

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
  <main class="box-border flex h-screen w-full overflow-hidden">
    <PanelSidebar
      :open="toggle"
      ref="sidebar"
      v-if="route.name !== 'auth-login'"
    />
    <div class="box-border w-full flex-1 overflow-y-auto">
      <PanelNavbar
        @toggleSidebar="toggleSidebar"
        v-if="route.name !== 'auth-login'"
      />
      <div class="box-border w-full p-4">
        <slot />
      </div>
    </div>
  </main>
</template>
