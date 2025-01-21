'use server';
import { validateFile, validateFileContent } from 'secure-file-validator';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

export default async function validatePdf(file: File) {
  console.log(file);

  // As this is on server, temporarily store the file to disk
  const tempDir = os.tmpdir();
  const tempFilePath = path.join(tempDir, file.name);

  await fs.writeFile(tempFilePath, Buffer.from(await file.arrayBuffer()));

  const fileUrl = tempFilePath;

  try {
    const result = await validateFile(fileUrl, {
      maxSizeInBytes: 5 * 1024 * 1024, // 5MB
    });
    console.log(result);

    const contentValidation = await validateFileContent(fileUrl);
    console.log(contentValidation);

    return result;
  } catch (error) {
    return {
      status: false,
      message: (error as Error).message,
    };
  }
}
