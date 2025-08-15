import type { ApiResponse } from "~/types/api";

export function useAuth() {
  const { fetch } = useUserSession();

  const toast = useToast();

  async function login(credentials: { username: string; password: string }) {
    try {
      await $fetch("/api/login", {
        method: "POST",
        body: credentials,
      });

      await fetch();

      onSuccess("Login Successful", "You have successfully logged in.");
      navigateTo("/dashboard");
    } catch (error) {
      const apiError = error as { data: ApiResponse<null> };
      onError(
        "Login Failed",
        apiError.data.message || "An error occurred during login."
      );
    }
  }

  function onSuccess(title: string, description: string) {
    toast.add({
      title,
      description,
      color: "success",
    });
  }

  function onError(title: string, description: string) {
    toast.add({
      title,
      description,
      color: "error",
    });
  }

  return { login };
}
