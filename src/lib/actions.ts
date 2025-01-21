'use server'

import { z } from 'zod';
import { prisma } from './prisma';

const FormSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string()
});

const CreateApplication = FormSchema.omit({ id: true });

export async function createApplication(formData: FormData) {

    const { firstName, lastName } = CreateApplication.parse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
    });

    console.log(firstName, lastName);

   await prisma.application.create({
        data: {
            firstName,
            lastName,
        }
    });

};


