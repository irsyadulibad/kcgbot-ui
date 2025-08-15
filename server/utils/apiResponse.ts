import type { ApiResponse } from "~/types/api";
import type { H3Event } from "h3";

export function successResponse<T>(
  event: H3Event,
  data: T,
  message: string = "Success",
  statusCode: number = 200
): ApiResponse<T> {
  setResponseStatus(event, statusCode);
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse<T>(
  event: H3Event,
  message: string,
  data: T,
  statusCode = 400
): ApiResponse<T> {
  setResponseStatus(event, statusCode);
  return {
    success: false,
    message,
    data,
  };
}
