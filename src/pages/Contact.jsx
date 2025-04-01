import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xgegkrwj");

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-gray-400">Get in touch for collaborations and opportunities</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid-card"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:drdvramanahyd@gmail.com" className="text-white hover:text-gray-300">
                  drdvramanahyd@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+919959423084" className="text-white hover:text-gray-300">
                  +91 99594 23084
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/dvramana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-gray-300"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid-card"
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          {state.succeeded ? (
            <div className="text-center p-8">
              <h3 className="text-xl font-semibold text-accent-color mb-2">Thank you for your message!</h3>
              <p className="text-gray-400">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full dark:bg-gray-800 border border-gray-400 bg-gray-300 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-color"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full dark:bg-gray-800 border border-gray-400 bg-gray-300 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-color"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full dark:bg-gray-800 border border-gray-400 bg-gray-300 rounded-lg px-4 py-2 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-color"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;