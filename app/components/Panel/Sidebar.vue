<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Home",
      type: "label",
    },
    {
      label: "Dashboard",
      icon: "tabler:home-filled",
      to: "/dashboard",
    },
    {
      label: "Statistics",
      icon: "tabler:chart-area-line-filled",
      to: "/",
    },
    {
      label: "Handlers",
      type: "label",
    },
    {
      label: "Bandwords",
      icon: "tabler:align-box-left-bottom-filled",
      to: "/handlers/bandwords",
    },
  ],
]);
</script>

<template>
  <aside class="min-h-screen w-64 border-r p-4 dark:border-gray-700">
    <div class="flex items-center justify-center gap-3 py-2">
      <Icon name="emojione:cat-face-with-wry-smile" size="28" />
      <h3 class="text-xl font-semibold">KCG Bot UI</h3>
    </div>
    <UNavigationMenu
      orientation="vertical"
      :items="items"
      :ui="{
        root: 'min-h-screen',
        label: 'mt-5',
        link: 'py-3',
      }"
    />
  </aside>
</template>
