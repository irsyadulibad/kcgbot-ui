<script setup lang="ts">
const form = reactive({
  theme: "light",
});
const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <p class="mb-3 text-lg font-bold">Settings</p>
    <div class="space-y-3">
      <div
        class="bg-muted flex w-full justify-between rounded-md border border-gray-700/80 p-4"
      >
        <div>
          <p class="text-sm font-semibold text-gray-200">Relaunch Bot</p>
          <p class="text-sm text-gray-400">
            Relaunch the bot to apply the changes, this make a few seconds.
          </p>
        </div>
        <div class="flex justify-end">
          <UButton size="lg" class="cursor-pointer" variant="outline">
            Relaunch
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
