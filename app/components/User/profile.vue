<script setup lang="ts">
const form = ref({
  username: "sahrullah5775",
  name: "Mohammad Sahrullah",
  background: "101521",
  color: "FFFFFF",
});
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <p class="mb-3 text-lg font-bold">Profile</p>
    <div class="bg-muted w-full rounded-md border border-gray-700/80 p-3">
      <div
        class="flex flex-col items-center justify-between gap-y-4 p-2 px-3 lg:flex-row"
      >
        <div class="flex flex-col items-center gap-x-5 gap-y-5 lg:flex-row">
          <img
            :src="`https://ui-avatars.com/api/?name=${form.name}&background=${form.background}&color=${form.color}&rounded=true&size=50`"
            alt="ms"
            class="h-14 w-14 rounded-full border border-gray-700"
          />
          <div class="flex flex-col items-center lg:items-start">
            <p class="text-lg font-bold">Mohammad</p>
            <p class="text-sm text-gray-500">sahrullah5775</p>
          </div>
        </div>
        <button
          class="flex flex-row gap-2 rounded-md bg-gray-800 p-2 px-5 py-2 text-gray-300"
        >
          <Icon name="tabler:edit" size="24" /> Change Password
        </button>
      </div>
    </div>
    <p class="text-lg font-bold">Edit Profile</p>
    <div class="bg-muted w-full rounded-md border border-gray-700/80 p-5">
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div class="flex flex-col gap-y-2">
          <p class="text-sm text-gray-400">Username</p>
          <input
            v-model="form.username"
            class="bg-default w-full rounded-md border border-gray-700/80 px-4 py-2 outline-none"
          />
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-sm text-gray-400">Name</p>
          <input
            v-model="form.name"
            class="bg-default w-full rounded-md border border-gray-700/80 px-4 py-2 outline-none"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <UButton class="">Save</UButton>
    </div>
  </div>
</template>
