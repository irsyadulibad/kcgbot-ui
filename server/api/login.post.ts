import type { ApiResponse } from "~/types/api";
import { errorResponse } from "../utils/apiResponse";

export default defineEventHandler(async (event) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  const credentials = await readBody<{
    username: string;
    password: string;
  }>(event);

  try {
    const response = await $fetch<ApiResponse<{ access_token: string }>>(
      `${apiBaseUrl}/auth/login`,
      {
        method: "POST",
        body: credentials,
      }
    );

    await setUserSession(event, {
      user: credentials.username,
      token: response.data.access_token,
    });

    return successResponse(event, {
      user: credentials.username,
    });
  } catch (error) {
    const apiErr = error as { data: ApiResponse<null> };
    return errorResponse(event, apiErr.data.message, null);
  }
});
