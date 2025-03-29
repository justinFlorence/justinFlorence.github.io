'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  // Phases: 'typing' => typing fullText; 'deleting' => deleting fullText; 'welcoming' => typing "Welcome!"
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'welcoming'>('typing');
  const fullText = "Hi, I'm Justin Florence\nMath & CS Major";
  const welcomeText = "Welcome!";
  const typingSpeed = 50;
  const deleteSpeed = 30;
  const pauseDuration = 1500;

  useEffect(() => {
    let currentIndex = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      if (phase === 'typing') {
        // Type out the fullText completely
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
          timerId = setTimeout(handleTyping, typingSpeed);
        } else {
          // Full text typed; pause before deleting
          timerId = setTimeout(() => {
            setPhase('deleting');
          }, pauseDuration);
        }
      } else if (phase === 'deleting') {
        // Delete the text completely
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayText(fullText.slice(0, currentIndex));
          timerId = setTimeout(handleTyping, deleteSpeed);
        } else {
          // Text fully deleted; switch to welcoming phase
          setPhase('welcoming');
        }
      } else if (phase === 'welcoming') {
        // Type out "Welcome!" completely
        if (currentIndex <= welcomeText.length) {
          setDisplayText(welcomeText.slice(0, currentIndex));
          currentIndex++;
          timerId = setTimeout(handleTyping, typingSpeed);
        } else {
          // "Welcome!" fully typed; pause before restarting cycle
          timerId = setTimeout(() => {
            setPhase('typing'); // This will reset currentIndex via effect re-run
          }, pauseDuration);
        }
      }
    };

    handleTyping();
    return () => clearTimeout(timerId);
  }, [phase, fullText, welcomeText]);

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
            <AnimatePresence mode="wait">
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
