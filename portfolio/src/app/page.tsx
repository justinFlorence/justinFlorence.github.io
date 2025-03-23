'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-6">
          Justin Florence
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Math & CS Major | Amazon SDE
        </p>
        <div className="space-x-4">
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Resume
          </a>
          <a
            href="/projects"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            See Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
}
