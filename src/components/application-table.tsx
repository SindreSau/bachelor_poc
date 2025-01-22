import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { prisma } from "@/lib/prisma";
  
  export default async function ApplicationTable() {
    const persons = await prisma.person.findMany();
  
    return (
      <Table>
        <TableCaption>A list of applications received.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>GroupID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {persons.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.id}</TableCell>
              <TableCell>{person.firstName}</TableCell>
              <TableCell>{person.lastName}</TableCell>
              <TableCell>{person.groupId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  