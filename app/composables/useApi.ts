import type { NitroFetchOptions } from "nitropack";
import type { ApiResponse } from "~/types/api";

export function useApi() {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  async function fetch<T>(url: string, options?: NitroFetchOptions<string>) {
    const response = await $fetch<ApiResponse<T>>(
      `${apiBaseUrl}${url}`,
      options
    );

    return response;
  }

  return { fetch };
}
