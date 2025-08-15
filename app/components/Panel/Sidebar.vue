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
      label: "Essentials",
      type: "label",
    },
    {
      label: "Welcome & Leave",
      icon: "tabler:hand-click",
      to: "/essentials/welcome-leave",
    },
    {
      label: "Presence",
      icon: "tabler:user-check",
      to: "/presence",
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
  <aside
    class="bg-muted sticky top-0 min-h-screen w-64 border-r p-4 dark:border-gray-700"
  >
    <div
      class="flex flex-col items-center justify-center gap-3 py-2"
    >
      <div class="flex items-center gap-3 rounded-md">
        <Icon
          name="emojione:cat-face-with-wry-smile"
          size="28"
        />
        <h3 class="text-xl font-semibold">KCG Bot UI</h3>
      </div>

      <div
        class="flex items-center space-x-3 rounded-md border border-gray-800 px-1"
      >
        <div
          class="rounded-md bg-gray-800 px-4 py-1 text-sm font-medium"
        >
          Status
        </div>
        <div class="flex items-center gap-2 px-4 py-1">
          <div class="h-3 w-3 rounded-full bg-green-500"></div>
          <span>Online</span>
        </div>
      </div>
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
