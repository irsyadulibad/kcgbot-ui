import type { Member } from "~/types/tables";
import type { TableColumn } from "@nuxt/ui";

export const columns: TableColumn<Member>[] = [
  {
    accessorKey: "no",
    header: "No.",
    cell: ({ row }) => `${row.index + 1}`,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => `${row.original.name}`,
  },
  {
    accessorKey: "serverName",
    header: "Server Name",
    cell: ({ row }) => `${row.original.serverName}`,
  },
  {
    accessorKey: "role",
    header: "Roles",
    cell: ({ row }) => `${row.original.role}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => `${row.original.status}`,
  },
  {
    accessorKey: "existed",
    header: "Status Exist",
    cell: ({ row }) => `${row.original.existed}`,
  },
  {
    accessorKey: "joinedAt",
    header: "Joined At",
    cell: ({ row }) => `${row.original.joinedAt}`,
  },
];
