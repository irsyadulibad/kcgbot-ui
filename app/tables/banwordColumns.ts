import type { Banword } from "~/types/tables";
import type { TableColumn } from "@nuxt/ui";

export const columns: TableColumn<Banword>[] = [
  {
    accessorKey: "no",
    header: "No.",
    cell: ({ row }) => `${row.index + 1}`,
  },
  {
    accessorKey: "word",
    header: "Word",
    cell: ({ row }) => `${row.original.word}`,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => `${row.original.createdAt}`,
  },
  {
    accessorKey: "updatedAt",
    header: "Update At",
    cell: ({ row }) => `${row.original.updatedAt}`,
  },
];
