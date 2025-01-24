import { getAllUsersWithRole } from '@/app/actions/db/get-users';

export default async function UserManager() {
  const users = await getAllUsersWithRole();

  return (
    <div>
      <h2 className='text-2xl font-semibold'>User Manager</h2>
      <div className='space-y-4'>
        {users.map((user) => (
          <div className='flex-col' key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Image: {user.image}</p>
            <p>Role: {user.role?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
