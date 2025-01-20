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
    const applications = await prisma.application.findMany();
  
    return (
      <Table>
        <TableCaption>A list of applications received.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.id}</TableCell>
              <TableCell>{application.firstName}</TableCell>
              <TableCell>{application.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  