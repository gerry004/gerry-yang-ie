'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-800 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-800 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-gray-800 font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="website" className="block text-sm text-gray-800 font-medium mb-2">
          Company Website
        </label>
        <input
          type="url"
          id="website"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-800 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for reaching out, we'll get back to you as soon as possible!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          Something went wrong, please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
} 