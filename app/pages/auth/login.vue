<script lang="ts" setup>
const form = useForm({
  username: "",
  password: "",
});
</script>
<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center gap-6"
  >
    <div class="w-full max-w-lg space-y-5 rounded-md p-4">
      <div
        class="flex flex-col items-center justify-center gap-5"
      >
        <div class="w-full space-y-3 text-left">
          <Icon
            name="emojione:cat-face-with-wry-smile"
            size="50"
            class="animate-"
          />
          <h1 class="text-3xl font-bold tracking-tighter">
            Login
          </h1>
          <p class="text-neutral-500">
            Welcome to kcg bot management to continue, nor...i
            mean my lord.
          </p>
        </div>
      </div>
      <form action="" class="space-y-4">
        <div class="w-full space-y-2">
          <p>Username</p>
          <input
            type="text"
            class="w-full rounded-md border border-gray-800 px-2 py-1 outline-none focus:bg-gray-800"
            placeholder=""
            name="username"
            v-model="form.username"
          />
        </div>
        <div class="w-full space-y-2">
          <div class="flex items-center justify-between">
            <p>Password</p>
            <p class="text-sm text-gray-400">Forgot password?</p>
          </div>
          <input
            type="password"
            class="w-full rounded-md border border-gray-800 px-2 py-1 outline-none focus:bg-gray-800"
            placeholder=""
            name="password"
            v-model="form.password"
          />
        </div>

        <UButton class="flex w-full items-center justify-center"
          >Login</UButton
        >
      </form>
    </div>
    <p class="text-sm text-gray-200">
      Developed by Two Villains
    </p>
  </div>
</template>
