<script lang="ts" setup>
import * as z from "zod";

import type { FormSubmitEvent } from "@nuxt/ui";
type schema = z.output<typeof formSchema>;

const form = reactive({
  username: "",
  password: "",
});

const formSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
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
            class="animate-bounce"
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
      <Uform
        :schema="formSchema"
        :state="form"
        class="space-y-4"
        @submit="onSubmit"
      >
        <div class="text- w-full space-y-3">
          <UFormField label="Username" name="username">
            <UInput class="w-full" v-model="form.username" />
          </UFormField>

          <UFormField label="Password" name="password">
            <UInput
              class="w-full"
              v-model="form.password"
              type="password"
            />
          </UFormField>
        </div>

        <UButton
          type="submit"
          class="flex w-full items-center justify-center"
          >Login</UButton
        >
      </Uform>
    </div>
    <p class="text-sm text-gray-200">
      Developed by Two Villains
    </p>
  </div>
</template>
