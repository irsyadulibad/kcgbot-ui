<script setup lang="ts">
import { columns } from "~/tables/banwordColumns";
import type { Banword } from "~/types/tables";

const data = ref<Banword[]>([
  {
    no: 1,
    word: "Kontol",
    createdAt: new Date("12-05-2022"),
    updatedAt: new Date("10-05-2022"),
  },
  {
    no: 2,
    word: "Memek",
    createdAt: new Date("12-05-2022"),
    updatedAt: new Date("10-05-2022"),
  },
]);
</script>
<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-sm font-medium text-gray-400">Handlers</h2>
      <h1 class="text-2xl font-bold">Banwords</h1>
    </div>
    <div>
      <div class="mb-4 flex items-center gap-x-2">
        <input type="text" class="rounded-md border border-gray-700/80 p-2" />
        <UButton>Add</UButton>
      </div>
      <div
        class="bg-muted inline-flex w-full gap-2 rounded-md border border-gray-700/80 p-5"
      >
        <div
          v-for="item in data"
          :key="item.no"
          class="rounded-md bg-gray-700/80 px-2 py-2"
        >
          <div class="flex items-center justify-center gap-5">
            <div>
              <p>{{ item.word }}</p>
            </div>
            <button class="flex items-center text-red-500 hover:text-red-600">
              <Icon name="mdi:times" class="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
