import { motion } from "motion/react";
import { Link } from "react-router";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import portraitImg from "../../imports/Gemini_Generated_Image_qb1mmyqb1mmyqb1m.png";

const roles = [
  "AI Engineer",
  "Building Intelligent Systems",
  "Full-Stack Developer",
  "Machine Learning Expert",
];

const techStack = [
  "Python",
  "FastAPI",
  "Flutter",
  "TensorFlow",
  "React",
  "PostgreSQL",
  "Docker",
  "Scikit-learn",
];

export function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl tracking-tight overflow-hidden"
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  Kamran
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  Rahman
                </motion.span>
              </motion.h1>

              <div className="h-20 flex items-center overflow-hidden">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
                >
                  {roles[currentRole]}
                </motion.p>
              </div>
            </div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              AI-focused Computer Science graduate building scalable
              full-stack intelligent systems and production-ready
              solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/resume"
                className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </Link>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <a
                href="https://github.com/Pp251"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kamran-rahman-shaik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kamranrahman009@gmail.com"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={portraitImg}
                alt="Kamran Rahman Shaik"
                className="relative rounded-3xl shadow-2xl w-full max-w-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-center mb-16"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Tech Stack
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-8 py-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl text-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl mb-4"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Featured Work
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Building intelligent systems that solve real-world problems
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AutoXpert",
                desc: "AI-Powered Vehicle Diagnostics System",
                tags: ["Python", "FastAPI", "TensorFlow"],
              },
              {
                title: "SmartStock AI",
                desc: "Demand Forecasting for Carrefour",
                tags: ["Machine Learning", "LSTM", "Data Analytics"],
              },
              {
                title: "Computer Vision",
                desc: "Landmark & Scene Analysis",
                tags: ["Deep Learning", "Transfer Learning"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-3xl cursor-pointer group"
              >
                <h3 className="text-2xl mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-lg group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
