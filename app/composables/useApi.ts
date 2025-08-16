import type { NitroFetchOptions } from "nitropack";
import type { ApiResponse } from "~/types/api";

export function useApi() {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  const pending = ref(false);
  const isError = ref(false);
  const { loggedIn, session } = useUserSession();

  async function fetch<T>(
    url: string,
    options?: NitroFetchOptions<string>
  ): Promise<ApiResponse<T> | undefined> {
    const headers: Record<string, string> = {};

    if (loggedIn.value && session.value?.token)
      headers.Authorization = `Bearer ${session.value.token}`;

    pending.value = true;

    try {
      const response = await $fetch<ApiResponse<T>>(`${apiBaseUrl}${url}`, {
        ...options,
        headers: {
          ...headers,
          ...options?.headers,
        },
      });

      return response;
    } catch (error) {
      const errResponse = error as { data: ApiResponse<T> };

      useToast().add({
        title: "Error Fetching Data",
        description:
          errResponse.data.message || "An error occurred while fetching data.",
        color: "error",
      });

      isError.value = true;
    } finally {
      pending.value = false;
    }
  }

  return { fetch, pending };
}
