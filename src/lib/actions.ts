'use server'

import { z } from 'zod';
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

const PersonSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

const PersonsSchema = z.array(PersonSchema);

export async function createApplication(formData: FormData) {

    const personsData = PersonsSchema.parse(
        JSON.parse(formData.get('persons') as string)
    );

    console.log(personsData);

    const newGroup = await prisma.group.create({
        data: {}
    })

    const groupId = newGroup.id;

    const personsWithGroupId = personsData.map(person => ({
        ...person,
        groupId,
    }));

   await prisma.person.createMany({
        data: personsWithGroupId,
    });

    revalidatePath("/dashboard");

    redirect('/dashboard')


};


function uuidv4() {
    throw new Error('Function not implemented.');
}

