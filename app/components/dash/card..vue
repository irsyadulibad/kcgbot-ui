<template>
  <div
    class="bg-muted relative cursor-pointer rounded-md border border-gray-600 from-gray-700/50 via-gray-800/10 to-transparent p-4 transition-discrete duration-300 hover:bg-gradient-to-br"
  >
    <div class="space-y-4">
      <div class="flex justify-between">
        <div
          class="h-[40px] w-[40px] rounded-md border border-gray-700 bg-gray-600 p-2"
        >
          <Icon
            name="tabler:inner-shadow-bottom-filled"
            size="24"
          />
        </div>
        <div class="text-xs text-gray-400">Request</div>
      </div>
      <div>
        <h2
          class="mt-2 text-2xl font-bold tracking-tight text-white"
        >
          530
        </h2>
        <p class="text-xs text-gray-400">AI Token Usage</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
