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
    class="bg-default/50 sticky top-0 flex items-center justify-between px-6 py-4 backdrop-blur-lg"
  >
    <UButton variant="ghost" class="cursor-pointer p-0">
      <UIcon class="text-white" size="22" name="tabler:layout-sidebar" />
    </UButton>

    <div class="flex">
      <UDropdownMenu :items="profileItems">
        <UAvatar size="lg" alt="KCG" />
      </UDropdownMenu>
    </div>
  </header>
</template>
