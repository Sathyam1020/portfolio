'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("meqbkjjd");

  if (state.succeeded) {
    return <p className="text-green-500 font-semibold text-center mt-4">Thanks for contacting!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md bg-[#121417] p-6 rounded-lg shadow-md">
      <label htmlFor="firstName" className="block text-gray-300 font-semibold mb-2">
        First Name
      </label>
      <input
        id="firstname"
        type="text"
        name="firstname"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5f9ed6] bg-black text-gray-300"
      />
      <label htmlFor="firstName" className="block text-gray-300 font-semibold mb-2 mt-2">
        Last Name
      </label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5f9ed6] bg-black text-gray-300"
      />
      <label htmlFor="email" className="block text-gray-300 font-semibold mt-4 mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5f9ed6] bg-black text-gray-300"
      />
      <label htmlFor="phoneNumber" className="block text-gray-300 font-semibold mt-4 mb-2">
        Phone Number
      </label>
      <input
        id="phoneNumber"
        type="tel"
        name="phoneNumber"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5f9ed6] bg-black text-gray-300"
      />
      <label htmlFor="message" className="block text-gray-300 font-semibold mt-4 mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5f9ed6] bg-black text-gray-300"
        rows={4}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500 mt-1"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#5f9ed6] text-white px-4 py-2 rounded-lg mt-4 hover:bg-[#4988c0] focus:outline-none w-full"
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

function Page() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className='font-semibold text-3xl md:text-3xl text-blue text-center py-2 mb-5'>Let’s talk about a project, collaboration or an idea you may have</h1>
      <ContactForm />
    </div>
  );
}

export default Page;