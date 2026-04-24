import { motion } from "motion/react";
import { Briefcase, GraduationCap, Rocket, Video } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "project",
    icon: GraduationCap,
    title: "AutoXpert - Capstone Project",
    role: "Lead Developer & AI Engineer",
    organization: "University of Wollongong Dubai",
    period: "September 2025 - June 2026",
    duration: "9 months",
    description:
      "Led the development of an AI-powered vehicle diagnostics system as the capstone project for Computer Science degree.",
    achievements: [
      "Designed and implemented end-to-end ML pipeline for vehicle fault detection",
      "Built scalable FastAPI backend handling real-time diagnostic data",
      "Developed cross-platform mobile app using Flutter for seamless UX",
      "Integrated TensorFlow models for predictive maintenance recommendations",
      "Achieved 87% accuracy in fault classification across 20+ vehicle systems",
      "Presented to industry experts and academic panel with outstanding reviews",
    ],
    tech: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "Flutter",
      "Machine Learning",
      "REST API",
    ],
  },
  {
    id: 2,
    type: "business",
    icon: Rocket,
    title: "Founder & Owner",
    role: "Digital Marketing Strategist",
    organization: "CtrlMedia - Digital Marketing Agency",
    period: "January 2025 - Present",
    duration: "Current",
    description:
      "Founded and operate a digital marketing agency providing comprehensive online marketing solutions to businesses.",
    achievements: [
      "Established agency from ground up with service offerings in SEO, social media, and content marketing",
      "Developed data-driven marketing strategies for diverse client portfolio",
      "Managed end-to-end client relationships and campaign execution",
      "Built brand presence and acquired clients through networking and referrals",
      "Applied technical skills to create marketing automation solutions",
    ],
    tech: [
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Analytics",
      "Client Management",
    ],
  },
  {
    id: 4,
    type: "freelance",
    icon: Video,
    title: "Editor / Content Creator",
    role: "Freelance Creator",
    organization: "Freelance",
    period: "2019 - 2025",
    duration: "6 years",
    description:
      "Providing professional video editing and content creation services for various clients across digital platforms.",
    achievements: [
      "Created engaging video content for social media and marketing campaigns",
      "Delivered high-quality editing services for promotional and educational content",
      "Collaborated with clients to understand brand vision and content requirements",
      "Managed multiple projects simultaneously with tight deadlines",
      "Developed creative storytelling approaches to maximize audience engagement",
    ],
    tech: [
      "CapCut",
      "Adobe Premiere Pro",
      "Adobe Creative Cloud",
      "Video Editing",
      "Content Creation",
      "Social Media",
    ],
  },
  {
    id: 3,
    type: "work",
    icon: Briefcase,
    title: "Telesales Executive",
    role: "Sales & Customer Relations",
    organization: "Tradeview Commercial Brokers",
    period: "June 2022 - September 2022",
    duration: "3 months",
    description:
      "Engaged with clients over phone to promote commercial brokerage services and build customer relationships.",
    achievements: [
      "Conducted outbound calls to prospective clients for service promotion",
      "Developed strong communication and persuasion skills in B2B environment",
      "Maintained client database and follow-up schedules",
      "Exceeded monthly call targets consistently",
      "Learned commercial real estate fundamentals and client needs analysis",
    ],
    tech: ["CRM", "Communication", "Sales", "Customer Service"],
  },
];

const iconColors = {
  project: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  business: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  freelance: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  work: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
};

export function ExperiencePage() {
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
          <h1 className="text-5xl md:text-7xl mb-6">Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through impactful projects, entrepreneurship, and
            professional roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-16 pb-16 border-l-2 border-gray-300 dark:border-gray-700 last:border-l-0 last:pb-0"
            >
              {/* Timeline Icon */}
              <div className="absolute left-[-17px] md:left-[-17px] top-0">
                <div
                  className={`p-3 rounded-2xl ${
                    iconColors[exp.type as keyof typeof iconColors]
                  }`}
                >
                  <exp.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">
                      {exp.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-900 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
