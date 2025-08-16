export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  pagination?: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
};
