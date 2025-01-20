import ApplicationForm from "@/components/application-form"

export default function Page() {
    async function createApplication(formData: FormData) {
      'use server'
   
      const rawFormData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
      }

      console.log(rawFormData.firstName);
   
      // mutate data
      // revalidate cache
    }
   
    return (
        <ApplicationForm/>
    )
  }
