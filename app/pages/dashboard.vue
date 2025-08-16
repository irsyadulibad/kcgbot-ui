<script setup lang="ts">
import type { Log } from "@/types/log";

const { fetch, pending } = useApi();

const logs = ref<Log[]>([]);

const loggerFetch = async () => {
  const res = await fetch<Log[]>("/logs");
  logs.value = res?.data ?? [];
};

onMounted(async () => {
  await loggerFetch();
});
</script>

<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">Overview</h2>
      <h1 class="text-2xl font-bold">Dashboard</h1>
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
        :class="
          pending
            ? 'flex min-h-[50rem] w-full flex-col items-center justify-center bg-gray-800 transition-all'
            : 'bg-default flex min-h-[50rem] w-full flex-col justify-start'
        "
        class="rounded-md border border-gray-500 p-4"
      >
        <div v-if="pending">
          class="flex flex-col items-center justify-center space-y-4
          text-center"
          <Icon name="tabler:loader-2" size="50" class="animate-spin" />
          <span>Retrieving logs...</span>
        </div>
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
