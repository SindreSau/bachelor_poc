import getRoleByRoleId from '@/app/actions/db/get-role';
import UserManager from '@/components/users/user-manager';
import { auth } from '@/lib/auth';

export default async function AccountPage() {
  const session = await auth();
  const role = await getRoleByRoleId(session?.user?.roleId || '');

  return (
    <div>
      <h1>Account Page</h1>
      <div className='space-y-8'>
        {session && (
          <div>
            <h2 className='text-2xl font-semibold'>User Info:</h2>
            <p>ID: {session?.user?.id}</p>
            <p>Name: {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
            <p>Image: {session?.user?.image}</p>
            <p>RoleId: {session?.user?.roleId}</p>
            <p>Role: {role?.name}</p>
          </div>
        )}
        {role?.name === 'SUPERADMIN' && <UserManager />}
      </div>
    </div>
  );
}
