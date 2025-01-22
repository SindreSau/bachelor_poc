import PersonTable from "@/components/person-table";
import { prisma } from "@/lib/prisma";

export default async function Page(props: { params: Promise<{ id: string }> }) {

    const params = await props.params;
    const id = await parseInt(params.id);

    const group = await prisma.group.findUnique({
        where: {
            id: id
        },
        include: {
            persons: true,
        },
    });
    
    if (!group) {
        return <div>Group not found</div>;
      }
   
    return (
        <PersonTable persons={group.persons} />
    )
  }