import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Kamran Rahman Shaik</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI Engineer & Full-Stack Developer building intelligent systems
              that solve real-world problems.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
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
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kamran Rahman Shaik. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
