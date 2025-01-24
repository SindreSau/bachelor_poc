// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface User {
    roleId?: string;
    id?: string;
  }

  interface Session {
    user?: User & {
      roleId?: string;
      id?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    roleId?: string;
    id?: string;
  }
}
