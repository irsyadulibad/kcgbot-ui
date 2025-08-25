<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { Status } from "@/types/status";

defineProps<{
  open: boolean;
}>();

const { fetch } = useApi();
const status = ref<Status>();

const fetchStats = async () => {
  const res = await fetch<Status>("/bot/status");
  status.value = res?.data ?? undefined;
};

onMounted(async () => {
  await fetchStats();
});

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
      label: "Guilds",
      type: "label",
    },
    {
      label: "Members",
      icon: "tabler:users",
      to: "/guilds/members",
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
      label: "Banwords",
      icon: "tabler:align-box-left-bottom-filled",
      to: "/handlers/banwords",
    },
  ],
]);
</script>

<template>
  <aside
    :class="open ? 'block' : 'hidden lg:block'"
    class="bg-muted fixed top-0 z-[999] h-full w-64 border-r p-4 lg:sticky dark:border-gray-700"
  >
    <div class="relative h-screen">
      <div class="flex flex-col items-center justify-center gap-3 py-2">
        <div class="flex items-center gap-3 rounded-md">
          <Icon name="emojione:cat-face-with-wry-smile" size="28" />
          <h3 class="text-xl font-semibold">KCG Bot UI</h3>
        </div>
        <BotStatus :status="status" />
      </div>

      <UNavigationMenu
        orientation="vertical"
        :items="items"
        :ui="{
          root: 'space-y-2 h-full',
          label: 'mt-5',
          link: 'py-3',
        }"
      />
      <BotUptime :status="status" />
    </div>
  </aside>
</template>
