## secure-file-validator

I got the package to work fine in a server action, but trying different PDFs always returned

```json
{ "status": false, "message": "Suspicious PDF pattern detected: /JS/" }
```

## Possible solution

I could not find any other libraries that looked promising for our task. However, it looks like Azure has [Microsoft Defender for Blob Storage](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-storage-introduction).

Also, here is a guide from OWASP on what to consider when dealing with file uploads: [OWASP File Upload Security](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
