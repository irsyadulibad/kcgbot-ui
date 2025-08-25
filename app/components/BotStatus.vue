<script setup lang="ts">
import type { Status } from "@/types/status";

const props = defineProps<{
  status?: Status;
}>();
</script>

<template>
  <div
    class="flex items-center space-x-3 rounded-md border border-gray-800 px-1"
  >
    <div class="rounded-md bg-gray-800 px-4 py-1 text-sm font-medium">
      Status
    </div>
    <div class="flex items-center gap-2 px-4 py-1">
      <div
        class="h-3 w-3 rounded-full"
        :class="
          props.status?.status === 'online' ? 'bg-green-500' : 'bg-red-500'
        "
      >
        <div
          class="h-3 w-3 animate-ping rounded-full"
          :class="
            props.status?.status === 'online' ? 'bg-green-500' : 'bg-red-500'
          "
        ></div>
      </div>
      <span class="capitalize">{{ props.status?.status || "offline" }}</span>
    </div>
  </div>
</template>
