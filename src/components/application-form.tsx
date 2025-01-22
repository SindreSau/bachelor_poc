'use client';

import { createApplication } from '@/lib/actions';
import FileUpload from './file-upload';
import { ChangeEvent, useState } from 'react';

export default function ApplicationForm() {
  const [persons, setPersons] = useState([{ firstName: '', lastName: '' }]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof typeof persons[0]
  ) => {
    const value = e.target.value;
    const updatedPersons = [...persons];
    updatedPersons[index] = {
      ...updatedPersons[index],
      [field]: value,
    };
    setPersons(updatedPersons);
  };

  const handleAddPerson = () => {
    setPersons([...persons, { firstName: '', lastName: '' }]);
  };

  const handleRemovePerson = (index: number) => {
    if (persons.length <= 1) return; // Ensure at least one person exists
    const updatedPersons = persons.filter((_, i) => i !== index);
    setPersons(updatedPersons);
  };

  return (
    <form
      action={async (formData: FormData) => {
        formData.append('persons', JSON.stringify(persons));
        await createApplication(formData);
        console.log('Submitted Persons:', persons);
      }}
    >
      {persons.map((person, index) => (
        <div key={index} className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor={`firstName-${index}`}
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id={`firstName-${index}`}
              name={`firstName-${index}`}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="John"
              value={person.firstName}
              onChange={(e) => handleChange(e, index, 'firstName')}
              required
            />
          </div>
          <div>
            <label
              htmlFor={`lastName-${index}`}
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id={`lastName-${index}`}
              name={`lastName-${index}`}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Doe"
              value={person.lastName}
              onChange={(e) => handleChange(e, index, 'lastName')}
              required
            />
          </div>
          <div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={() => handleRemovePerson(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        onClick={handleAddPerson}
      >
        Add Person
      </button>
      <button
        type="submit"
        className="w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}
