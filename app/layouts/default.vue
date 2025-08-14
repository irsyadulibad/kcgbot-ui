<template>
  <main class="flex h-screen overflow-y-auto">
    <PanelSidebar />
    <div class="flex-1">
      <PanelNavbar />
      <div class="px-6 py-4">
        <slot />
      </div>
    </div>
  </main>
</template>
