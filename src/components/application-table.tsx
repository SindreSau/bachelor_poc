
import { prisma } from "@/lib/prisma";
import ApplicationTableClient from "./application-table-client";
  
  export default async function ApplicationTable() {

    const groups = await prisma.group.findMany({
      include: {
        persons: true,
      },
    });

  
    return <ApplicationTableClient groups={groups} />;
  }
  