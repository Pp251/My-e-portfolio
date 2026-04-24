import { motion } from "motion/react";
import {
  Brain,
  Code,
  Database,
  Smartphone,
  Shield,
  BarChart,
} from "lucide-react";

const skills = [
  {
    category: "AI / Machine Learning",
    icon: Brain,
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "LSTM",
      "Transfer Learning",
      "Data Preprocessing",
    ],
  },
  {
    category: "Backend Development",
    icon: Code,
    items: ["FastAPI", "REST APIs", "Authentication Systems", "Python"],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter", "Dart", "UI/UX Design", "Cross-platform Apps"],
  },
  {
    category: "Data & Analytics",
    icon: BarChart,
    items: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Feature Engineering",
      "Visualization",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    items: [
      "Ethical Hacking",
      "Network Analysis",
      "Penetration Testing",
      "Security Fundamentals",
    ],
  },
];

const education = [
  {
    degree: "B.Sc Computer Science",
    institution: "University of Wollongong Dubai, UAE",
    period: "2023 - 2026",
    status: "Current",
  },
  {
    degree: "12th Grade - CBSE",
    institution: "International Indian School, Ajman, UAE",
    period: "May/June 2022",
    subjects: "Maths, Physics, Chemistry, English, Information Technology",
  },
  {
    degree: "10th Grade - CBSE",
    institution: "International Indian School, Ajman, UAE",
    period: "Feb/March 2020",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl md:text-7xl mb-8"
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            AI-focused Computer Science graduate with hands-on experience
            building full-stack intelligent systems, machine learning models,
            and real-world applications.
          </motion.p>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-32 p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl border border-gray-200 dark:border-gray-800"
        >
          <motion.h2
            className="text-3xl mb-6"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Who I Am
          </motion.h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Skilled in developing scalable backend APIs, mobile applications,
              and data-driven solutions, including AI-powered vehicle
              diagnostics, demand forecasting systems, and computer vision
              models.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Strong foundation in Python, FastAPI, Flutter, and deep learning,
              with a focus on building production-ready solutions that solve
              real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Passionate about leveraging AI and machine learning to create
              intelligent systems that make a tangible impact.
            </motion.p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { label: "Age", value: "22 years" },
              { label: "Location", value: "UAE" },
              { label: "Languages", value: "English, Urdu" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="p-6 bg-white dark:bg-black rounded-2xl"
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="text-2xl">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-32">
          <motion.h2
            className="text-4xl md:text-5xl mb-16 text-center"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl group hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-900 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl mb-16 text-center"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Education
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="pb-8">
                  {edu.status && (
                    <span className="inline-block px-3 py-1 text-sm bg-blue-500 text-white rounded-full mb-2">
                      {edu.status}
                    </span>
                  )}
                  <h3 className="text-2xl mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                    {edu.period}
                  </p>
                  {edu.subjects && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.subjects}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
