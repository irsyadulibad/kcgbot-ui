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
    class="container mx-auto flex w-full flex-col justify-center gap-10 pt-10 lg:flex-row"
  >
    <div class="top-0 w-full flex-auto lg:w-[20%]">
      <p class="mb-3 text-lg font-bold">Account</p>
      <div
        class="flex flex-row rounded-md border border-gray-800 lg:flex-col lg:gap-y-2 lg:border-none"
      >
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="setTab(tab.name)"
          :class="{
            'bg-gray-800 text-green-300':
              activeTab.toLowerCase() === tab.name.toLowerCase(),
            'text-gray-600 hover:bg-gray-900 hover:text-gray-400':
              activeTab.toLowerCase() !== tab.name.toLowerCase(),
          }"
          class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md p-3 transition-all lg:justify-start"
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
