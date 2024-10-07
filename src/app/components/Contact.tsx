'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';

interface AlertState {
  severity: 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [alert, setAlert] = useState<AlertState | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.subject || !formData.message) {
      setAlert({ severity: 'error', message: 'All fields are required.' });
      return;
    }

    emailjs
      .send('service_l1zgsss', 'template_4dkyraf', formData, 'Ks-00blnMcPtH08UP')
      .then(
        (result) => {
          setAlert({ severity: 'success', message: 'Email sent successfully!' });
          setFormData({ email: '', subject: '', message: '' }); // Reset form
        },
        (error) => {
          setAlert({ severity: 'error', message: 'Failed to send email: ' + error.text });
        }
      );
  };

  return (
    <section id="next-section" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Next Section">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-100 lg:sr-only">Next Section</h2>
      </div>
      <div className="px-4 mx-auto max-w-screen-md">
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact me">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            
          </div>
          <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="heading">Contact me</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-100 dark:text-gray-400 sm:text-xl">
              Feel free to reach out to me! Whether you have a question, feedback, or a collaboration proposal, I'd love to hear from you.
            </p>
            
            {/* Render Alert if exists */}
            {alert && (
              <Alert severity={alert.severity}>
                {alert.message}
              </Alert>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">Your email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="matth.pj@outlook.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-400">Your message</label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  value={formData.message}
                  onChange={handleTextareaChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                id="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </form>
            <div className="mt-20 text-gray-100">
              A copied design and coded in Visual Studio Code by myself truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}