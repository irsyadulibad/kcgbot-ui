<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">Essentials</h2>
      <h1 class="text-2xl font-bold">Presence</h1>
    </div>

    <div
      class="bg-muted w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">Presence Settings</h2>
        <UButton>Save Settings</UButton>
      </div>

      <div class="space-y-4">
        <div>
          <label class="mb-2 block text-sm font-medium">Status Message</label>
          <UTextarea
            placeholder="Enter your status message..."
            class="w-full"
            rows="3"
          />
        </div>

        <div class="flex items-center space-x-4">
          <UCheckbox label="Show activity status" />
        </div>
      </div>
    </div>

    <div
      class="bg-muted w-full space-y-4 rounded-md border border-gray-500 p-5"
    >
      <h3 class="text-lg font-semibold">Current Status</h3>
      <div class="flex items-center space-x-3">
        <div class="h-3 w-3 rounded-full bg-green-500" />
        <span>Online</span>
        <span class="text-gray-400">• Last seen: Just now</span>
      </div>
    </div>
  </div>
</template>
