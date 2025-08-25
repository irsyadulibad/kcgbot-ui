<script setup lang="ts">
const activeTab = ref("profile");
const tabs = [
  {
    name: "Profile",
    icon: "tabler:user",
  },
  {
    name: "Sessions",
    icon: "tabler:clock",
  },
  {
    name: "Settings",
    icon: "tabler:settings",
  },
];

const setTab = (tab: string) => {
  activeTab.value = tab;
};
</script>
<template>
  <div
    class="container mx-auto mt-20 flex w-full flex-row justify-center gap-10"
  >
    <div class="top-0 w-[20%] flex-auto">
      <p class="mb-3 text-lg font-bold">Account</p>
      <div class="flex flex-col gap-y-2 rounded-md">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="setTab(tab.name)"
          :class="{
            'bg-gray-800 text-green-300':
              activeTab.toLowerCase() === tab.name.toLowerCase(),
            'text-gray-600 hover:bg-gray-800 hover:text-gray-400':
              activeTab.toLowerCase() !== tab.name.toLowerCase(),
          }"
          class="flex cursor-pointer items-center justify-start gap-2 rounded-md px-3 py-2 transition-all"
        >
          <Icon :name="tab.icon" size="24" />
          <span>{{ tab.name }}</span>
        </button>
      </div>
    </div>
    <div class="w-full flex-auto">
      <UserProfile v-if="activeTab.toLowerCase() === 'profile'" />
      <UserSessions v-if="activeTab.toLowerCase() === 'sessions'" />
      <UserSettings v-if="activeTab.toLowerCase() === 'settings'" />
    </div>
  </div>
</template>
