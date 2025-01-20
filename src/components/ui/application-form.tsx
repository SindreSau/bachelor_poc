'use client'


import { useActionState } from "react";
import { createApplication } from "@/lib/actions";

export default function Form() {
  

return (
  <div className="min-h-screen flex justify-center items-center bg-black">
    <form
      action={createApplication}
      className="p-6 bg-black shadow-md rounded"

    >
      <h1 className="text-xl font-bold mb-4">Simple Form</h1>

      <div className="mb-4">
        <label
          className="block  text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className="w-full p-2 border rounded"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter your first name"

        />
      </div>

      <div className="mb-4">
        <label
          className="block  text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className="w-full p-2 border rounded"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter your last name"

        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
);
};

