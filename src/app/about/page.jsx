import { resumeData } from '@/data/resume'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-playfair mb-8"
      >
        Professional Background
      </motion.h1>

      <section className="mb-12">
        <h2 className="text-2xl font-poppins mb-4">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">{resumeData.education.degree}</h3>
          <p className="text-gray-600">{resumeData.education.university}</p>
          <p className="text-sm text-gray-500 mt-2">{resumeData.education.dates}</p>
          <div className="mt-4">
            <h4 className="font-poppins font-medium">Relevant Courses:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {resumeData.education.courses.map((course) => (
                <span key={course} className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-poppins mb-4">Experience</h2>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.dates}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
