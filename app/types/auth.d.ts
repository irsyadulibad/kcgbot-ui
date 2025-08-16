declare module "#auth-utils" {
  interface UserSession {
    user: string;
    token?: string;
  }
}
