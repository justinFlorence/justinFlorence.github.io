import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Justin Florence
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            Resume
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
