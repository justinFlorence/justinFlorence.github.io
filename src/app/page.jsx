import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Math & CS Major<br/>
            <span className="text-blue-600">Amazon SDE</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Building scalable solutions with scientific precision
          </p>
        </motion.div>
      </main>
    </div>
  );
}
