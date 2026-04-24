import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, X, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AutoXpert",
    featured: true,
    tagline: "AI-Powered Vehicle Diagnostics Platform",
    description:
      "A comprehensive AI-powered system for vehicle diagnostics and maintenance prediction. Built over 9 months as a capstone project, AutoXpert combines machine learning models with a user-friendly interface to provide real-time vehicle health analysis and predictive maintenance recommendations.",
    fullDescription:
      "AutoXpert represents the culmination of advanced AI and software engineering principles. The system uses AI to analyze vehicle sensor data, predict potential failures, and recommend maintenance actions. The backend is built with FastAPI for high-performance API endpoints, while the mobile interface uses Flutter for a seamless cross-platform experience.",
    tech: ["Flutter", "FastAPI", "REST APIs", "AI Integration"],
    duration: "9 months",
    role: "Lead Developer & AI Engineer",
    details: [
      "Developed a full-stack mobile application that connects to vehicle OBD-II systems to retrieve real-time diagnostic data",
      "Built backend APIs to process Diagnostic Trouble Codes (DTCs) and generate AI-based explanations",
      "Designed an intelligent fault analysis system translating complex automotive errors into user-friendly insights",
      "Implemented multiple Flutter UI modules including dashboard, live diagnostics, fault details, and vehicle profiles",
      "Integrated garage discovery and service marketplace features for real-world usability",
      "Engineered scalable architecture with mobile client, backend services, and data management layers",
    ],
  },
  {
    id: 2,
    title: "SmartStock AI",
    tagline: "Demand Forecasting & Inventory Optimization",
    description:
      "Advanced demand forecasting system using LSTM neural networks to predict product demand and optimize inventory management for Carrefour retail stores.",
    fullDescription:
      "SmartStock AI leverages time-series analysis and LSTM (Long Short-Term Memory) networks to forecast product demand with high accuracy. The system analyzes historical sales data, seasonal trends, promotional events, and external factors to generate precise demand predictions.",
    tech: ["Python", "TensorFlow", "Keras", "FastAPI", "Pandas", "NumPy"],
    duration: "4 months",
    role: "ML Engineer",
    details: [
      "Built an AI-driven demand forecasting system using LSTM neural networks for retail inventory prediction",
      "Performed advanced feature engineering including lag variables, time-based features, and rolling averages",
      "Evaluated models using RMSE, MAE, and MAPE for performance optimization",
      "Developed REST API endpoints for real-time forecasting and analytics using FastAPI",
      "Designed visualization dashboards to track trends, predictions, and performance metrics",
      "Enabled data-driven decision-making to reduce stockouts and overstocking",
    ],
  },
  {
    id: 3,
    title: "Computer Vision System",
    tagline: "Landmark & Scene Analysis",
    description:
      "Deep learning-powered computer vision system for landmark recognition and scene understanding using advanced computer vision techniques.",
    fullDescription:
      "This computer vision system employs state-of-the-art techniques for accurate landmark detection and scene classification. The system achieves 90%+ accuracy on face detection tasks using deep learning approaches.",
    tech: ["Python", "OpenCV", "Computer Vision", "SIFT", "ORB", "DNN"],
    duration: "3 months",
    role: "Computer Vision Engineer",
    details: [
      "Developed a computer vision application for landmark recognition, face detection, and scene analysis",
      "Implemented feature-matching algorithms (SIFT, ORB) for identifying landmarks such as Museum of the Future",
      "Built face detection system using Haar Cascade, LBP, and DNN-based SSD (ResNet) models",
      "Achieved highest accuracy (~90%+) using deep learning-based detection approach",
      "Designed time-of-day classification system using brightness and HSV-based analysis",
      "Implemented image quality assessment pipeline evaluating blur, noise, brightness, and saturation",
      "Developed similarity retrieval system using ORB feature matching for visual search",
      "Built dataset tagging and annotation tools for structured image metadata generation",
    ],
  },
  {
    id: 4,
    title: "Big Data RTA Project",
    tagline: "Data Lake Architecture for RTA",
    description:
      "Scalable big data infrastructure and data lake architecture for Dubai's Roads and Transport Authority (RTA) handling millions of transport records.",
    fullDescription:
      "Designed and implemented a comprehensive data lake solution for RTA to manage and analyze massive volumes of transport data. The architecture handles data ingestion from multiple sources and implements a Bronze-Silver-Gold data lake architecture for processing large-scale transport data.",
    tech: ["Hadoop", "HDFS", "Hive", "YARN", "Tez", "Big Data Architecture"],
    duration: "5 months",
    role: "Data Engineer",
    details: [
      "Designed and implemented a scalable big data pipeline inspired by Dubai RTA's real-world data ecosystem",
      "Built a Bronze–Silver–Gold data lake architecture for processing large-scale transport data",
      "Generated and ingested synthetic datasets simulating metro and bus ridership over a 3-month period",
      "Performed data cleaning, validation, and enrichment using Hive queries in the Silver layer",
      "Developed analytical data warehouse (Gold layer) producing KPIs such as ridership trends, peak loads, and route performance",
      "Utilized HDFS for distributed storage and Hive for schema-on-read data processing",
      "Designed system architecture replicating enterprise-level data engineering workflows",
    ],
  },
  {
    id: 5,
    title: "Marine Life Image Classification",
    tagline: "Deep Learning for Marine Species Recognition",
    description:
      "Convolutional neural network for classifying marine species from underwater images, supporting marine biology research and conservation efforts.",
    fullDescription:
      "Developed a deep learning model to identify and classify various marine species from underwater imagery using transfer learning with InceptionV3 architecture. The system handles challenging underwater conditions with advanced preprocessing techniques.",
    tech: ["TensorFlow", "Keras", "InceptionV3", "Transfer Learning"],
    duration: "2 months",
    role: "ML Engineer",
    details: [
      "Developed an image classification system using transfer learning with InceptionV3 architecture",
      "Applied data augmentation, normalization, and fine-tuning to improve model performance",
      "Trained model on multi-class dataset achieving ~60% accuracy under limited data conditions",
      "Addressed overfitting using dropout, regularization, and early stopping techniques",
      "Built complete training pipeline for image preprocessing and model optimization",
    ],
  },
  {
    id: 6,
    title: "Zumar Perfume Store",
    tagline: "E-Commerce Mobile Application",
    description:
      "Full-featured e-commerce mobile application for a perfume retail business with product catalog, cart, payment integration, and order management.",
    fullDescription:
      "Developed a complete e-commerce solution for Zumar Perfume Store using modern Android development practices. Features include beautiful product galleries, advanced filtering and search, shopping cart with real-time updates, secure authentication, order tracking, and customer account management.",
    tech: ["Kotlin", "Android", "Firebase", "MVVM Architecture"],
    duration: "3 months",
    role: "Full-Stack Mobile Developer",
    details: [
      "Developed a full-featured Android e-commerce application for a perfume store using MVVM architecture",
      "Implemented user authentication system using Firebase Authentication with secure login/signup flows",
      "Designed product catalogue with search, filtering, and detailed product views",
      "Built complete cart and checkout system with coupon handling and payment options",
      "Integrated Firebase Firestore for real-time data management (users, products, orders)",
      "Developed order tracking system with status updates and detailed order history",
      "Implemented multi-currency support and user personalization features",
      "Designed responsive UI with efficient RecyclerView and navigation components",
    ],
  },
  {
    id: 7,
    title: "Web Application Penetration Testing",
    tagline: "Cybersecurity Project",
    description:
      "Comprehensive security assessment and penetration testing of web applications to identify vulnerabilities and security weaknesses.",
    fullDescription:
      "Conducted thorough penetration testing on OWASP Juice Shop in a controlled environment using industry-standard tools and methodologies. Identified critical vulnerabilities including XSS and insecure HTTP communication. Provided detailed security reports with risk assessments and remediation recommendations aligned with OWASP Top 10.",
    tech: ["Kali Linux", "Nmap", "Wireshark", "Security Testing"],
    duration: "2 months",
    role: "Security Analyst",
    details: [
      "Conducted structured penetration testing on OWASP Juice Shop in a controlled virtual lab environment",
      "Performed reconnaissance, scanning, traffic analysis, and vulnerability exploitation",
      "Identified critical vulnerabilities including Cross-Site Scripting (XSS) and insecure HTTP communication",
      "Used Wireshark to analyze network packets and detect unencrypted data transmission",
      "Provided mitigation strategies aligned with OWASP Top 10 security practices",
    ],
  },
  {
    id: 8,
    title: "Aircraft Management System",
    tagline: "Database Design Project",
    description:
      "Comprehensive database system for managing aircraft fleet operations, maintenance schedules, crew assignments, and flight records.",
    fullDescription:
      "Designed and implemented a robust relational database system for aircraft fleet management. The system manages complex relationships between aircraft, crew members, maintenance records, and operational data using normalized database design principles.",
    tech: ["SQL", "Database Design", "ER Modeling"],
    duration: "2 months",
    role: "Database Developer",
    details: [
      "Designed a relational database system for managing aircraft, technicians, tests, and maintenance events",
      "Created Entity-Relationship (ER) model with normalized schema and clearly defined relationships",
      "Implemented multiple entities including airplanes, models, technicians, tests, and expertise mapping",
      "Established foreign key constraints and relationships to maintain data integrity",
      "Modeled real-world aviation workflows including testing events and technician assignments",
    ],
  },
  {
    id: 9,
    title: "Football Player Market Value Prediction",
    tagline: "Machine Learning",
    description:
      "Predictive model for estimating football player market values based on performance statistics, age, position, and market trends.",
    fullDescription:
      "Built a machine learning regression model to predict football player transfer market values. The model analyzes player statistics using Decision Tree Regressor with Bagging ensemble to improve prediction accuracy and identify undervalued players through data-driven insights.",
    tech: ["PySpark", "Scikit-learn", "Decision Trees", "Machine Learning"],
    duration: "1.5 months",
    role: "ML Engineer",
    details: [
      "Built a machine learning model to estimate football player market values using structured datasets",
      "Performed extensive data cleaning and preprocessing including currency normalization and feature extraction",
      "Implemented Decision Tree Regressor with Bagging ensemble to improve prediction accuracy",
      "Conducted cross-validation and evaluated performance using RMSE and R² metrics",
      "Identified undervalued players through data-driven insights",
    ],
  },
  {
    id: 10,
    title: "IT Project Audit & Risk Analysis",
    tagline: "NEST Thermostat Case Study",
    description:
      "Comprehensive audit and risk assessment of the NEST Thermostat IoT project covering technical, operational, and security dimensions.",
    fullDescription:
      "Conducted a detailed project audit analyzing the NEST Thermostat's development lifecycle, security architecture, data privacy practices, and operational risks. Evaluated system vulnerabilities, assessed compliance with industry standards, and provided recommendations for improving project management practices.",
    tech: ["Project Management", "Risk Analysis", "ISO Standards"],
    duration: "1 month",
    role: "IT Auditor",
    details: [
      "Conducted comprehensive project audit and failure analysis of NEST Thermostat project",
      "Evaluated project performance using industry standards (PMBOK, ISO 9001, ISO 31000)",
      "Designed structured audit checklist covering quality, risk, and communication management",
      "Identified key failure points including poor risk planning, weak quality control, and communication gaps",
      "Applied scoring model to assess project health and risk levels",
      "Proposed improvements aligned with best practices in project management frameworks",
    ],
  },
];

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selected = projects.find((p) => p.id === selectedProject);

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
          <h1 className="text-5xl md:text-7xl mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of AI-powered systems, machine learning models, and
            full-stack applications solving real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
              className={`p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black border rounded-3xl cursor-pointer group relative overflow-hidden ${
                project.featured
                  ? "md:col-span-2 lg:col-span-3 border-blue-500"
                  : "border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500"
              }`}
            >
              {project.featured && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    Featured Project
                  </span>
                </div>
              )}

              <div
                className={
                  project.featured
                    ? "md:grid md:grid-cols-2 gap-8 items-start"
                    : ""
                }
              >
                <div>
                  <h3
                    className={`mb-3 group-hover:text-blue-500 transition-colors ${
                      project.featured ? "text-4xl" : "text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-600 dark:text-gray-400 mb-4 ${
                      project.featured ? "text-lg" : ""
                    }`}
                  >
                    {project.tagline}
                  </p>
                  <p
                    className={`text-gray-700 dark:text-gray-300 mb-6 ${
                      project.featured ? "text-base" : "text-sm"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to view details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-950 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative border border-gray-200 dark:border-gray-800"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {selected.featured && (
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  Featured Project
                </span>
              </div>
            )}

            <h2 className="text-4xl md:text-5xl mb-4">{selected.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {selected.tagline}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Duration
                </p>
                <p className="text-lg">{selected.duration}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Role
                </p>
                <p className="text-lg">{selected.role}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl mb-4">Overview</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selected.fullDescription}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {selected.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selected.details && (
              <div>
                <h3 className="text-2xl mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {selected.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
