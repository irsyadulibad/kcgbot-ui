<script setup lang="ts">
const form = ref({
  username: "sahrullah5775",
  name: "Mohammad Sahrullah",
  background: "101521",
  color: "FFFFFF",
});

const originalForm = ref({
  username: "sahrullah5775",
  name: "Mohammad Sahrullah",
  background: "101521",
  color: "FFFFFF",
});

const hasChanges = computed(() => {
  return (
    form.value.username !== originalForm.value.username ||
    form.value.name !== originalForm.value.name ||
    form.value.background !== originalForm.value.background ||
    form.value.color !== originalForm.value.color
  );
});

const resetForm = () => {
  form.value = { ...originalForm.value };
};

const saveChanges = () => {
  originalForm.value = { ...form.value };
};

watch(
  form,
  (newForm) => {
    console.log("Form changed:", newForm);
  },
  { deep: true }
);
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
            placeholder="Enter username"
          />
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-sm text-gray-400">Name</p>
          <input
            v-model="form.name"
            class="bg-default w-full rounded-md border border-gray-700/80 px-4 py-2 outline-none"
            placeholder="Enter name"
          />
        </div>
      </div>
    </div>
    <div
      :class="{
        'translate-y-0': hasChanges,
        'translate-y-36': !hasChanges,
      }"
      class="bg-muted fixed right-0 bottom-10 left-0 mx-auto flex w-full max-w-4xl items-center justify-center rounded-md border border-gray-700/80 p-5 transition-all duration-300"
    >
      <div class="w-full">
        <p class="text-lg text-gray-400">Careful - you have unsaved changes!</p>
      </div>
      <div class="shrink-0">
        <UButton
          variant="outline"
          class="mr-2 cursor-pointer"
          @click="resetForm"
        >
          Reset
        </UButton>
        <UButton class="cursor-pointer" @click="saveChanges">
          Save Changes
        </UButton>
      </div>
    </div>
  </div>
</template>
