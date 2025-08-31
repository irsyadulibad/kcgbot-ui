<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const emit = defineEmits(["toggleSidebar"]);
const toggle = () => emit("toggleSidebar");

const profileItems = ref<DropdownMenuItem[][]>([
  [
    {
      label: "Profile",
      type: "link",
      icon: "tabler:user",
      to: "/profile",
    },
    {
      label: "Settings",
      type: "link",
      icon: "tabler:settings",
      to: "/",
    },
  ],
]);
</script>

<template>
  <header
    class="sticky top-0 z-50 box-border flex w-full items-center justify-between border-b border-gray-600 bg-gradient-to-l from-gray-400/20 via-gray-600/10 to-gray-200/0 px-6 py-4 backdrop-blur-lg"
  >
    <UButton @click="toggle" variant="ghost" class="cursor-pointer p-0">
      <UIcon class="text-white" size="22" name="tabler:layout-sidebar" />
    </UButton>

    <div class="flex">
      <UDropdownMenu :items="profileItems" class="cursor-pointer p-2">
        <UAvatar size="lg" alt="KCG" />
      </UDropdownMenu>
    </div>
  </header>
</template>
