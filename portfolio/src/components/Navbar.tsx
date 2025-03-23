import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Justin Florence
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            Resume
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <div className="flex gap-4">
            <a
              href="https://github.com/justinflorence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/justin-florence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
