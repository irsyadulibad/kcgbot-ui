import type { NitroFetchOptions } from "nitropack";
import type { ApiResponse } from "~/types/api";

export function useApi<T>() {
  const toast = useToast();
  const pending = ref(false);
  const isError = ref(false);
  const { loggedIn, session } = useUserSession();
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  let successHandler: (data: ApiResponse<T>) => void = (
    data: ApiResponse<T>
  ) => {
    toast.add({
      title: "Success",
      description: data.message || "Operation completed successfully.",
      color: "success",
    });
  };

  let errorHandler: (error: unknown) => void = (error: unknown) => {
    const apiError = error as { data: ApiResponse<T> };

    toast.add({
      title: "Error",
      description: apiError.data.message || "An error occurred.",
      color: "error",
    });
  };

  const onSuccess = (callback: (data: ApiResponse<T>) => void) => {
    successHandler = callback;
  };

  const onError = (callback: (error: unknown) => void) => {
    errorHandler = callback;
  };

  const fetch = async (url: string, options?: NitroFetchOptions<string>) => {
    isError.value = false;
    pending.value = true;

    if (loggedIn.value) {
      options = {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${session.value?.token}`,
        },
      };
    }

    try {
      const response = await $fetch<ApiResponse<T>>(
        `${apiBaseUrl}${url}`,
        options
      );
      successHandler(response);
    } catch (error) {
      isError.value = true;
      errorHandler(error);
    } finally {
      pending.value = false;
    }
  };

  return { fetch, onError, onSuccess, pending, isError };
}
