'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Resume() {
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
          className="space-y-8"
        >
          <div className="bg-black bg-opacity-75 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-4">Justin Florence</h1>
            <p className="mb-2">jrfloren@ncsu.edu | 919-698-4459 | Raleigh, NC</p>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/in/justin-florence-4b25ba231/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="https://justinFlorence.github.io" className="hover:text-blue-400 transition-colors">Portfolio</a>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
              <div className="pl-4">
                <h3 className="text-xl font-medium">North Carolina State University</h3>
                <p className="mb-2">B.S. Applied Mathematics & Physics</p>
                <p className="text-gray-300">Aug 2021 - May 2026</p>
                <p className="mt-2 text-gray-300">Relevant Courses: Numerical Methods, Mathematical Modelling, Fluid Dynamics</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4 pl-4">
                <div>
                  <h3 className="font-medium mb-2">Languages</h3>
                  <p className="text-gray-300">Java, Python, C/C++, SQL, JavaScript, HTML/CSS, R, Fortran, Matlab, Julia</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frameworks</h3>
                  <p className="text-gray-300">React, Node.js, Flask, JUnit, WordPress</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tools</h3>
                  <p className="text-gray-300">Git, Docker, LLMs, VS Code, AWS, Ansys, COMSOL</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Libraries</h3>
                  <p className="text-gray-300">pandas, NumPy, Matplotlib, PyTorch, MPI, CUDA</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Experience</h2>
              <div className="space-y-6 pl-4">
                <div>
                  <h3 className="text-xl font-medium">Scientific Software Engineer Associate</h3>
                  <p className="text-gray-300">North Carolina Institute for Climate Studies | May 2024 - Present</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li className="text-gray-300">Configured AWS EC2 instances and managed security groups for large-scale weather model validation</li>
                    <li className="text-gray-300">Developed Docker environments using Conda to accelerate data analysis workflows</li>
                    <li className="text-gray-300">Automated data retrieval from national research centers handling netCDF datasets</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium">Computational Physics Research Assistant</h3>
                  <p className="text-gray-300">Laboratory for Laser Energetics | Jun 2022 - Aug 2024</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li className="text-gray-300">Optimized CYGNUS hydrodynamic simulations using advanced numerical methods</li>
                    <li className="text-gray-300">Created 3D/2D visualizations of pressure gradients using Paraview</li>
                    <li className="text-gray-300">Developed iterative methods for pellet surface area approximation in fusion simulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
              <div className="pl-4">
                <div className="mb-6">
                  <h3 className="text-xl font-medium">NFL Statistics Automation</h3>
                  <p className="text-gray-300 mb-2">Python, Selenium, NFL API, Pandas, NumPy</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-300">Developed web scraping program with dynamic content handling</li>
                    <li className="text-gray-300">Implemented player ranking system using position-specific metrics</li>
                    <li className="text-gray-300">Created regression model for player performance prediction</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
