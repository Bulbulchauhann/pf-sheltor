import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      username: string;
      userId: string;
    };
  }

  interface User extends DefaultUser {
    username: string;
  }
}
