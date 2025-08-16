export type Member = {
  no: number;
  name: string;
  serverName: string;
  role: string;
  status: string;
  existed: string;
  joinedAt: string;
};

export type Banword = {
  no: number;
  word: string;
  createdAt: Date;
  updatedAt: Date;
};
