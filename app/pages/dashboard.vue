<script setup lang="ts"></script>

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
        class="flex min-h-[50rem] w-full items-center justify-center rounded-md bg-gray-800"
      >
        <h2>Nothing logs to show, yet.</h2>
      </div>
    </div>
  </div>
</template>
