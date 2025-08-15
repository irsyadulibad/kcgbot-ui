<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const profileItems = ref<DropdownMenuItem[][]>([
  [
    {
      label: "Profile",
      type: "link",
      icon: "tabler:user",
      to: "/",
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
    class="sticky top-0 z-50 flex items-center justify-between border-b border-gray-600 bg-gradient-to-l from-gray-400/20 via-gray-600/10 to-gray-200/0 px-6 py-4 backdrop-blur-lg"
  >
    <UButton variant="ghost" class="cursor-pointer p-0">
      <UIcon
        class="text-white"
        size="22"
        name="tabler:layout-sidebar"
      />
    </UButton>

    <div class="flex">
      <UDropdownMenu :items="profileItems">
        <UAvatar size="lg" alt="KCG" />
      </UDropdownMenu>
    </div>
  </header>
</template>
