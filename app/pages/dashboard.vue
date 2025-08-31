<script setup lang="ts">
import type { Log } from "@/types/log";
import { toast } from "vue-sonner";

const { fetch, onSuccess } = useApi<Log[]>();
const { subscribe } = useSocket("logger");

const logs = ref<Log[]>([]);

const loggerFetch = async () => {
  await fetch("/logs");
};

onSuccess((res) => {
  logs.value = res?.data ?? [];
});

subscribe("log", async () => {
  await loggerFetch();
});

onMounted(async () => {
  await loggerFetch();
});
</script>

<template>
  <div class="box-border w-full space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">Overview</h2>
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </div>
    <div
      class="box-border grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <DashCard />
      <DashCard />
      <DashCard />
      <DashCard />
    </div>
    <div
      class="bg-muted box-border w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <div class="flex w-full items-center justify-between">
        <h2>Realtime Logs</h2>
        <UButton>Clear log</UButton>
      </div>
      <div
        class="bg-default flex h-full flex-col justify-start overflow-x-auto rounded-md border border-gray-500 p-4 lg:min-h-[50rem]"
      >
        <div v-for="(item, index) in logs" :key="index">
          <div
            :class="
              item.type === 'INFO'
                ? 'border-blue-500 text-blue-500 lg:bg-blue-500/10'
                : item.type === 'ERROR'
                  ? 'border-red-500 text-red-500 lg:bg-red-500/10'
                  : item.type === 'WARNING'
                    ? 'border-yellow-500 text-yellow-500 lg:bg-yellow-500/10'
                    : 'border-green-500 text-green-500 lg:bg-green-500/10'
            "
            class="mb-2 box-border flex transform items-center justify-start gap-4 border-l-4 px-3 py-1 transition-all hover:translate-x-2 lg:px-2"
          >
            <span class="text-gray-300">
              {{ item.createdAt }}
            </span>
            <span> LOG </span>
            <span class="text-nowrap lg:text-wrap"> [{{ item.type }}] </span>
            <span class="text-nowrap uppercase lg:text-wrap">
              <b> {{ item.context }}</b>
            </span>
            <span class="text-nowrap lg:text-wrap">{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
