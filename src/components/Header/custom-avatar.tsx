import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { auth } from '@/lib/auth';
import SignOutButton from '../auth/sign-out-button';

export default async function CustomAvatar() {
  const session = await auth();
  const avatarImageUrl = session?.user?.image || '';
  const initials =
    session?.user?.name
      ?.split(' ')
      .map((n) => n[0])
      .join('') || 'TU';

  console.log('avatarImageUrl', avatarImageUrl);
  console.log('initials', initials);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='h-8 w-8'>
          <AvatarImage src={avatarImageUrl} alt={initials} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={'/account'}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
