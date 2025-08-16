<script setup lang="ts">
import type { Log } from "@/types/log";

const { fetch } = useApi();
const { isConnected, subscribe } = useSocket("logger");

const logs = ref<Log[]>([]);

const loggerFetch = async () => {
  const res = await fetch<Log[]>("/logs");
  logs.value = res?.data ?? [];
};

subscribe("log", async () => {
  await loggerFetch();
});

onMounted(async () => {
  await loggerFetch();
});
</script>

<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">Overview</h2>
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <h2>{{ isConnected ? "Connected" : "Disconnected" }}</h2>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <DashCard />
      <DashCard />
      <DashCard />
      <DashCard />
      <DashCard />
    </div>
    <div
      class="bg-muted w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <div class="flex items-center justify-between">
        <h2>Realtime Logs</h2>
        <UButton>Clear log</UButton>
      </div>
      <div
        class="bg-default flex min-h-[50rem] w-full flex-col justify-start rounded-md border border-gray-500 p-4"
      >
        <div v-for="(item, index) in logs" :key="index" class="space-y-3">
          <span
            :class="
              item.type === 'INFO'
                ? 'text-blue-400'
                : item.type === 'ERROR'
                  ? 'text-red-400'
                  : item.type === 'WARNING'
                    ? 'text-yellow-400'
                    : 'text-green-500'
            "
          >
            {{ `[${index + 1}]` }}
            {{ item.type }}
            {{ item.content }}
            {{ item.context }}
            {{ item.createdAt }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
