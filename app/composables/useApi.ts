import type { NitroFetchOptions } from "nitropack";
import type { ApiResponse } from "~/types/api";

export function useApi() {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  const { loggedIn, session } = useUserSession();

  async function fetch<T>(url: string, options?: NitroFetchOptions<string>) {
    const headers: Record<string, string> = {};

    if (loggedIn.value && session.value?.token)
      headers.Authorization = `Bearer ${session.value.token}`;

    const response = await $fetch<ApiResponse<T>>(`${apiBaseUrl}${url}`, {
      ...options,
      headers: {
        ...headers,
        ...options?.headers,
      },
    });

    return response;
  }

  return { fetch };
}
