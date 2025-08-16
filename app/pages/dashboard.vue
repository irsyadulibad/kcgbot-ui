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
        <div v-for="(item, index) in logs" :key="index" class="space-y-5">
          <div
            :class="
              item.type === 'INFO'
                ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                : item.type === 'ERROR'
                  ? 'border-red-500 bg-red-500/10 text-red-500'
                  : item.type === 'WARNING'
                    ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                    : 'border-green-500 bg-green-500/10 text-green-500'
            "
            class="mb-2 flex flex-row justify-start gap-4 border-l-4 px-3"
          >
            <span class="text-gray-300">
              {{ item.createdAt }}
            </span>
            <span> [{{ item.type }}] </span>
            <span class="uppercase">
              <b> {{ item.context }}</b>
            </span>
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
