'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { useRouter } from 'next/navigation';

export default function ApplicationTableClient({ groups }: { groups: { id: number; persons: { id: number; firstName: string; lastName: string }[] }[] }) {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>A list of applications received.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>GroupID</TableHead>
          <TableHead>Members</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {groups.map((group) => (
          <TableRow
            key={group.id}
            onClick={() => router.push(`/groups/${group.id}`)}
            className="cursor-pointer hover:bg-blue-950"
          >
            <TableCell>{group.id}</TableCell>
            <TableCell>
              {group.persons.length > 0 ? (
                <ul>
                  {group.persons.map((person) => (
                    <li key={person.id}>
                      {person.firstName} {person.lastName}
                    </li>
                  ))}
                </ul>
              ) : (
                "No members"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
