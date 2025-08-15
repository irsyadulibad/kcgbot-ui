<script lang="ts" setup>
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";
type schema = v.InferOutput<typeof formSchema>;

const form = reactive({
  username: "",
  password: "",
});

const formSchema = v.object({
  username: v.string(),
  password: v.pipe(
    v.string(),
    v.minLength(8, "Password must be at least 8 characters")
  ),
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
      <Uform
        :schema="formSchema"
        :state="form"
        class="space-y-4"
      >
        <div class="w-full space-y-2"></div>

        <UButton class="flex w-full items-center justify-center"
          >Login</UButton
        >
      </Uform>
    </div>
    <p class="text-sm text-gray-200">
      Developed by Two Villains
    </p>
  </div>
</template>
