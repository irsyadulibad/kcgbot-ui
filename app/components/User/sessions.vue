<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-y-3">
    <p class="mb-3 text-lg font-bold">Active Sessions</p>
    <div
      class="bg-muted w-full divide-y divide-gray-700/80 rounded-md border border-gray-700/80 p-3"
    >
      <div class="flex items-center justify-between px-4 py-5">
        <div class="flex flex-col gap-y-1">
          <div class="flex gap-3">
            <Icon name="tabler:brand-chrome" size="24" />
            <div class="space-y-1">
              <p class="text-sm font-semibold text-gray-200">Chrome</p>
              <p class="text-sm font-semibold text-gray-400">127.0.0.1</p>
              <p class="text-xs text-gray-400">Last used 2025-08-28 12:00:00</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <UButton size="lg" variant="outline"> Revoke </UButton>
        </div>
      </div>
      <div class="flex items-center justify-between px-4 py-5">
        <div class="flex flex-col gap-y-1">
          <div class="flex gap-3">
            <Icon name="tabler:brand-chrome" size="24" />
            <div class="space-y-1">
              <p class="text-sm font-semibold text-gray-200">Chrome</p>
              <p class="text-sm font-semibold text-gray-400">127.0.0.1</p>
              <p class="text-xs text-gray-400">Last used 2025-08-28 12:00:00</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <UButton size="lg" variant="outline"> Revoke </UButton>
        </div>
      </div>
      <div class="flex items-center justify-between px-4 py-5">
        <div class="flex flex-col gap-y-1">
          <div class="flex gap-3">
            <Icon name="tabler:brand-chrome" size="24" />
            <div class="space-y-1">
              <p class="text-sm font-semibold text-gray-200">Chrome</p>
              <p class="text-sm font-semibold text-gray-400">127.0.0.1</p>
              <p class="text-xs text-gray-400">Last used 2025-08-28 12:00:00</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <UButton size="lg" variant="outline"> Revoke </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
