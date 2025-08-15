<script lang="ts" setup>
import type z from "zod";
import { AuthSchema } from "~/schemas/auth";

type AuthSchema = z.output<typeof AuthSchema>;
const { login } = useAuth();

definePageMeta({
  layout: "auth",
});

const form = reactive({
  username: "",
  password: "",
});

async function onSubmit() {
  await login(form);
}
</script>
<template>
  <div class="flex h-screen w-full flex-col items-center justify-center gap-6">
    <div class="w-full max-w-lg space-y-5 rounded-md p-4">
      <div class="flex flex-col items-center justify-center gap-5">
        <div class="w-full space-y-3 text-left">
          <Icon
            name="emojione:cat-face-with-wry-smile"
            size="50"
            class="animate-bounce"
          />
          <h1 class="text-3xl font-bold tracking-tighter">Login</h1>
          <p class="text-neutral-500">
            Welcome to kcg bot management to continue, nor...i mean my lord.
          </p>
        </div>
      </div>
      <UForm
        :schema="AuthSchema"
        :state="form"
        class="space-y-4"
        @submit.prevent="onSubmit"
      >
        <div class="text- w-full space-y-3">
          <UFormField label="Username" name="username">
            <UInput v-model="form.username" class="w-full" />
          </UFormField>

          <UFormField label="Password" name="password">
            <UInput v-model="form.password" class="w-full" type="password" />
          </UFormField>
        </div>

        <UButton type="submit" class="flex w-full items-center justify-center"
          >Login</UButton
        >
      </UForm>
    </div>
    <p class="text-sm text-gray-200">Developed by Two Villains</p>
  </div>
</template>
