<script setup lang="ts">
import type { Status } from "@/types/status";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const props = defineProps<{
  status?: Status;
}>();

const currentUptime = ref<string>("Loading...");
const serverStartTime = ref<number>(0);

dayjs.extend(relativeTime);

const formatDuration = (duration: number) => {
  const seconds = Math.floor(duration / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

watchEffect(() => {
  if (props.status?.uptime) {
    serverStartTime.value = Date.now() - props.status.uptime;

    updateUptimeDisplay();

    const interval = setInterval(() => {
      updateUptimeDisplay();
    }, 1000);

    onUnmounted(() => {
      clearInterval(interval);
    });
  }
});

const updateUptimeDisplay = () => {
  if (serverStartTime.value) {
    const currentUptimeMs = Date.now() - serverStartTime.value;
    currentUptime.value = formatDuration(currentUptimeMs);
  }
};
</script>

<template>
  <div
    class="absolute bottom-10 flex w-full flex-col items-start justify-start gap-2 rounded-md bg-gray-800 px-3 py-2 text-white"
  >
    <p class="text-lg text-gray-400">Bot uptime</p>
    <div class="flex items-center justify-between gap-2">
      <Icon name="mdi:clock" class="text-gray-400" size="20" />
      <p class="text-lg text-gray-200">
        {{ currentUptime }}
      </p>
    </div>
  </div>
</template>
