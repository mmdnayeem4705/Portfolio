import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-white mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions and feel free to ask anything.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: 'Email', value: 'mmdnayeem4705@gmail.com' },
                { icon: <Phone />, label: 'Phone', value: '+91 7013827080' },
                { icon: <MapPin />, label: 'Location', value: 'Kurnool, India' },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white">{item.label}</div>
                    <div className="text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xrbkanqz"
            method="POST"
            className="space-y-6 animate-fade-in"
            onSubmit={() => setIsSubmitted(true)}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white dark:bg-white border-2 border-gray-200 dark:border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 peer text-black"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-purple-600"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white dark:bg-white border-2 border-gray-200 dark:border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 peer text-black"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-purple-600"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 bg-white dark:bg-white border-2 border-gray-200 dark:border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 peer h-32 resize-none text-black"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-purple-600"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            {isSubmitted && (
              <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
                Message sent! Check your inbox.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
