"use client"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Profile from "../assets/picture.png"
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          <p className="text-gray-800 leading-relaxed text-justify mb-4">
           I am a Full-Stack Developer who specializes in building Web Applications and Mobile Applications. 
           I am passionate about creating user-friendly, efficient, and scalable solutions using technologies. Through academic training and practical experience, I have developed a deep understanding of developing applications,
          I aim to contribute to the development teams where I can apply my skills and grow professionally. 

          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black p-1">
              <img src={Profile} alt="Princess Caballeda" className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-black text-white py-2 px-4 rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="font-medium">Full-Stack Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto mt-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React", "JavaScript", "Java","Tailwind CSS","Supabase", "Firebase", "MySQL","Dart","React Native", "HTML and CSS", "Node.js", "TypeScript", "PHP", "Python", "Git", "Figma"].map((skill) => (
            <motion.div
              key={skill}
              className="bg-gray-100 p-4 rounded-lg text-center"
              whileHover={{ y: -5, backgroundColor: "#000", color: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto mt-20 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center text-gray-600 cursor-pointer"
          whileHover={{ y: -2 }}
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
        >
          <span className="mr-2">Scroll to see my work</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Home
