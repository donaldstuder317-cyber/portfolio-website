'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const fieldClasses =
  'border-blue-slate bg-surface-base placeholder:text-pale-slate/60 focus:border-pacific-cyan w-full rounded-lg border px-4 py-3 text-sm text-white transition outline-none';

const STATUS_MESSAGE: Partial<Record<Status, string>> = {
  success: 'Thanks, your message has been sent.',
  error: 'Something went wrong. Please try again.',
};

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error('Contact form submission failed.');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className='mx-auto max-w-6xl px-4 pb-20 md:px-8 xl:px-0'>
      <div className='border-blue-slate bg-surface-base/85 grid gap-8 rounded-[28px] border p-6 md:p-10 lg:grid-cols-[1fr_1.2fr]'>
        <div className='flex items-center'>
          <div>
            <p className='text-pale-slate text-xs font-semibold tracking-[0.28em] uppercase'>
              Let&apos;s work together
            </p>
            <h2 className='mt-3 text-3xl font-black text-white sm:text-4xl'>
              Have a project in mind?
            </h2>
          </div>
        </div>

        <div className='border-blue-slate bg-surface-raised/85 rounded-[24px] border p-6'>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='text-alabaster-grey space-y-2 text-sm font-medium'>
                Name
                <input
                  type='text'
                  name='name'
                  required
                  placeholder='Your name'
                  autoComplete='name'
                  className={fieldClasses}
                />
              </label>
              <label className='text-alabaster-grey space-y-2 text-sm font-medium'>
                Email
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='you@example.com'
                  autoComplete='email'
                  className={fieldClasses}
                />
              </label>
            </div>

            <label className='text-alabaster-grey block space-y-2 text-sm font-medium'>
              Tell me about your project
              <textarea
                name='message'
                required
                rows={4}
                placeholder='What are you looking to build?'
                className={`${fieldClasses} resize-none leading-6`}
              />
            </label>

            <button
              type='submit'
              disabled={status === 'sending'}
              className='border-pacific-cyan/60 bg-pacific-cyan/10 hover:border-pacific-cyan hover:bg-pacific-cyan/20 inline-flex rounded-lg border px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60'
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <span className='ml-2'>→</span>
            </button>

            <p
              aria-live='polite'
              className={`text-sm ${
                status === 'error' ? 'text-red-300' : 'text-pale-slate'
              }`}
            >
              {STATUS_MESSAGE[status] ?? ''}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
