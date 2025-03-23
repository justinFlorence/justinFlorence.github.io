'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-24 text-white min-h-[calc(100vh-4rem)]">
        <div className="fixed -z-10 inset-0">
          <Image
            src="/images/space-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Technical Blog</h1>
          
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-2">Coming Soon: Building Scalable Cloud Systems</h2>
              <p className="text-gray-300">An in-depth look at distributed systems architecture...</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-2">Mathematics in Machine Learning</h2>
              <p className="text-gray-300">Exploring linear algebra foundations for AI...</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
