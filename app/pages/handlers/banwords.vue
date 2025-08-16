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
      <UCard class="bg-muted">
        <UTable
          sticky
          :data="data"
          :columns="columns"
          class="max-h-[312px] flex-1"
        />
      </UCard>
    </div>
  </div>
</template>
