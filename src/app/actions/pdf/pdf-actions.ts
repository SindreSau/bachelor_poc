'use server';
import Pdf from 'pdf-parse';

export async function parsePdf(formData: FormData) {
    const cv = formData.get('cv') as File;
    const arrayBuffer = await cv.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const data = await Pdf(buffer);

    return data;
}