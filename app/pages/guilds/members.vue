<script setup lang="ts">
import { columns } from "~/tables/memberColumns";
import type { Member } from "~/types/tables";

const data = ref<Member[]>([
  {
    no: 1,
    name: "Roel",
    serverName: "KCG GaronxX",
    role: "Owner",
    status: "online",
    existed: "Yes",
    joinedAt: "2022-01-05",
  },
  {
    no: 2,
    name: "Irsyadulibad",
    serverName: "KCG OyeeN",
    role: "Owner",
    status: "online",
    existed: "Yes",
    joinedAt: "2022-01-05",
  },
]);
</script>
<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <h2 class="text-sm font-medium text-gray-400">Guilds</h2>
      <h1 class="text-2xl font-bold">Members</h1>
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
