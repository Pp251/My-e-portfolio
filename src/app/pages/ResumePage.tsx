import { motion } from "motion/react";
import { Download, Github } from "lucide-react";
import portraitImg from "../../imports/Gemini_Generated_Image_qb1mmyqb1mmyqb1m.png";
import cvPdf from "../../imports/CV__Kamran.pdf";

export function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "Kamran_Rahman_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          <a
            href="https://github.com/Pp251"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View GitHub
          </a>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl mb-2 tracking-tight">
                  KAMRAN
                  <br />
                  RAHMAN
                </h1>
              </div>
              <div className="text-sm space-y-1 text-gray-300">
                <p>Dubai, United Arab Emirates</p>
                <p>+971 52 142 5888</p>
                <a
                  href="mailto:kamranrahman009@gmail.com"
                  className="hover:text-white transition-colors block"
                >
                  kamranrahman009@gmail.com
                </a>
                <a
                  href="https://github.com/Pp251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  https://github.com/Pp251
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-0">
            {/* Left Column */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 space-y-8">
              {/* Photo */}
              <div>
                <img
                  src={portraitImg}
                  alt="Kamran Rahman"
                  className="w-full rounded-2xl"
                />
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                  EDUCATION
                </h2>
                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="mb-1">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      Artificial Intelligence and Big Data
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      University of Wollongong, Dubai
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      2023 - 2026
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      GPA: 3.2/4.0
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-1">High School Degree</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      International Indian School, Ajman
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">2022</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xl mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                  EXPERIENCE
                </h2>
                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="mb-1">Telesales Executive</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      TradeView Commercial Brokers
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      July 2022 – September 2022
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-1">Owner and Founder</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      CtrlMedia - Digital Marketing Agency
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      2025- Present.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-1">Editor/Content Creator</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      Freelance
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      2019-2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-8 space-y-8">
              {/* About Me */}
              <div>
                <h2 className="text-2xl mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                  ABOUT ME
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    AI-focused Computer Science graduate with hands-on
                    experience building full-stack intelligent systems, machine
                    learning models, and real-world applications.
                  </p>
                  <p>
                    Skilled in developing scalable backend APIs, mobile
                    applications, and data-driven solutions, including
                    AI-powered vehicle diagnostics, demand forecasting systems,
                    and computer vision models.
                  </p>
                  <p>
                    Strong foundation in Python, FastAPI, Flutter, and deep
                    learning, with a focus on building production-ready
                    solutions that solve real-world problems.
                  </p>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-2xl mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <h3 className="mb-1">Languages:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Python, Dart, JavaScript, SQL, C++, HTML
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">AI / Machine Learning:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      TensorFlow, Keras, Scikit-learn, LSTM, Transfer Learning,
                      Data Preprocessing
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">Backend:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      FastAPI, REST APIs, API Development, Authentication
                      Systems
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">Frontend / Mobile:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Flutter, UI/UX Design
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">Data & Analytics:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Pandas, NumPy, Data Cleaning, Feature Engineering,
                      Visualization
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">Databases:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      MySQL, PostgreSQL
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">Tools & Platforms:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Git, GitHub, VS Code, Docker/Podman, Firebase
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1">Other:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cybersecurity Fundamentals, Ethical Hacking, Network
                      Analysis
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-2xl mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                  PROJECTS
                </h2>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    • AutoXpert – AI-Powered Vehicle Diagnostics System
                  </li>
                  <li>
                    • SmartStock AI – Demand Forecasting & Inventory
                    Optimization
                  </li>
                  <li>
                    • Football Player Market Value Prediction (Machine Learning)
                  </li>
                  <li>
                    • Marine Life Image Classification (Deep Learning)
                  </li>
                  <li>
                    • Web Application Penetration Testing (Cybersecurity)
                  </li>
                  <li>
                    • Aircraft Management System (Database Design Project)
                  </li>
                  <li>
                    • Big Data Engineering Project – Data Lake Architecture for
                    RTA
                  </li>
                  <li>
                    • Computer Vision System – Landmark & Scene Analysis
                  </li>
                  <li>
                    • E-Commerce Mobile Application – Zumar Perfume Store
                  </li>
                  <li>
                    • IT Project Audit & Risk Analysis – NEST Thermostat Case
                    Study
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
