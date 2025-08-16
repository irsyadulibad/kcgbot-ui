export type Log = {
  id: number;
  type: "INFO" | "ERROR" | "WARNING" | "SUCCESS ";
  content: string;
  context: string;
  createdAt: string;
};
