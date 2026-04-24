import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import { toast } from "sonner";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or collaboration
            opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-3xl mb-8">Send a Message</h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.a
                  href="mailto:kamranrahman009@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-lg">
                      kamranrahman009@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+971564756218"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="text-lg">+971 52 142 5888</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://github.com/Pp251"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/kamran-rahman-shaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl mb-4">Availability</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm currently available for:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  <span>Full-time opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  <span>Consulting & collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  <span>Open-source contributions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}