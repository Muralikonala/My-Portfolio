import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  // IMPORTANT: Replace 'YOUR_FORM_ID' with your ID from formspree.io
  const [state, handleSubmit] = useForm("xlgeeork");

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "konalamurali2006@gmail.com",
      href: "mailto:konalamurali2006@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9492054444",
      href: "tel:+919492054444"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Andhra Pradesh, India",
      href: "#"
    }
  ];

  // Success Message View
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-2xl border border-blue-100 dark:border-gray-600 shadow-lg">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
          <p className="text-gray-600 dark:text-gray-300">Thanks for reaching out, Murali. I'll get back to you soon.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <footer id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Formspree Active Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-sm border border-blue-100 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
              </div>
              <div className="space-y-1">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                {state.submitting ? "Sending..." : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer Branding */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              © 2025 Konala S V Murali Ramakrishna Reddy
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/Muralikonala" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/s-v-murali-ramakrishna-reddy-konala-535a04297/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;