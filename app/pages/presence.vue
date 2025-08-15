<script setup lang="ts">
const items = ref<string[]>([
  "Playing",
  "Listening",
  "Watching",
  "Custom",
  "Streaming",
  "Competing",
]);
const value = ref("Listening");
const statusName = ref("normies people");
</script>

<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">
        Essentials
      </h2>
      <h1 class="text-2xl font-bold">Presence</h1>
    </div>

    <div
      class="bg-muted w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">Presence Settings</h2>
        <UButton>Save Settings</UButton>
      </div>

      <div
        class="flex max-w-5xl items-center justify-center gap-4"
      >
        <div class="w-full flex-auto space-y-3">
          <label class="block text-sm font-medium"
            >Activity</label
          >
          <USelect
            v-model="value"
            :items="items"
            class="w-full"
          />
        </div>
        <div
          class="mt-5 flex w-10 flex-none items-center justify-center p-4 text-center text-lg text-gray-400"
        >
          to
        </div>
        <div class="w-full flex-auto space-y-3">
          <label class="block text-sm font-medium"
            >Status Name</label
          >
          <UInput
            v-model="statusName"
            type="text"
            placeholder="Enter your status name..."
            class="w-full"
          />
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <UCheckbox label="Show activity status" />
      </div>
    </div>

    <div
      class="bg-muted w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <h3 class="text-lg font-semibold">Current Status</h3>
      <div class="flex items-center space-x-3">
        <div class="h-3 w-3 rounded-full bg-green-500"></div>
        <span>Online</span>
        <span class="text-gray-400">• Last seen: Just now</span>
      </div>
    </div>
  </div>
</template>
