'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'welcoming'>('typing');
  const fullText = "Hi, I'm Justin Florence\nMath & CS Major";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 50;
    const deleteSpeed = 30;
    const pauseDuration = 1500;

    const handleTyping = () => {
      if (phase === 'typing') {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
          setTimeout(handleTyping, typingSpeed);
        } else {
          setTimeout(() => setPhase('deleting'), pauseDuration);
        }
      } else if (phase === 'deleting') {
        if (currentIndex >= 0) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex--;
          setTimeout(handleTyping, deleteSpeed);
        } else {
          setPhase('welcoming');
        }
      } else if (phase === 'welcoming') {
        if (currentIndex <= "Welcome!".length) {
          setDisplayText("Welcome!".slice(0, currentIndex));
          currentIndex++;
          setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    handleTyping();

    return () => clearTimeout(handleTyping);
  }, [phase]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-4rem)]">
        <div className="fixed -z-10 inset-0">
          <Image
            src="/images/space-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 mx-auto mb-8"
          >
            <Image
              src="/images/justin.jpg"
              alt="Justin Florence"
              fill
              className="object-cover rounded-full border-4 border-white/20"
            />
          </motion.div>

          <div className="content-card inline-block bg-black/80 p-4 rounded-md">
            <AnimatePresence mode='wait'>
              <motion.div
                key={displayText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl font-mono whitespace-pre-line"
              >
                {displayText}
                <span className="ml-1 border-l-2 border-white blink-cursor"></span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
