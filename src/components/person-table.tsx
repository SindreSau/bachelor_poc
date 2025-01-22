import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  interface Person {
    id: number;
    firstName: string;
    lastName: string;
  }

  export default async function PersonTable({ persons }: { persons: Person[] }) {
    
    return (
      <Table>
        <TableCaption>Persons within a group</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First name</TableHead>
            <TableHead>Last name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {persons.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.id}</TableCell>
              <TableCell>{person.firstName}</TableCell>
              <TableCell>{person.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  