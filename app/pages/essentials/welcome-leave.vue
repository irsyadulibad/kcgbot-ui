<script setup lang="ts">
// Welcome & Leave page functionality
</script>

<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">
        Essentials
      </h2>
      <h1 class="text-2xl font-bold">Welcome & Leave</h1>
    </div>

    <div
      class="bg-muted w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">
          Welcome & Leave Settings
        </h2>
        <UButton>Save Settings</UButton>
      </div>

      <div class="space-y-4">
        <div>
          <label class="mb-2 block text-sm font-medium"
            >Welcome Message</label
          >
          <UTextarea
            placeholder="Enter welcome message for new members..."
            class="w-full"
            rows="4"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium"
            >Leave Message</label
          >
          <UTextarea
            placeholder="Enter leave message for departing members..."
            class="w-full"
            rows="4"
          />
        </div>

        <div class="flex items-center space-x-4">
          <UCheckbox label="Enable welcome messages" />
          <UCheckbox label="Enable leave messages" />
        </div>
      </div>
    </div>
  </div>
</template>
