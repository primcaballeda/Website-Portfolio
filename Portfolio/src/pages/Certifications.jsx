"use client"


import React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import Java from "../assets/ITS_Java.png"
import Cisco from "../assets/Cisco.jpg"
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "ITS Java Certification",
    organization: "Certiport",
    date: "March 2023",
    image: Java,
    link: "https://www.credly.com/badges/0aab30dd-7074-4f77-bb93-37b5e9f928e1/public_url",
  },
  {
    id: 2,
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    date: "August 2024",
    image: Cisco,
    link: "https://www.credly.com/badges/ff0eff83-627a-439c-aa72-f559c418a47b/linked_in_profile",
  },
]

const Certifications = () => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCertifications = certifications.slice(startIndex, startIndex + 3)

  const nextCertifications = () => {
    if (startIndex + 3 < certifications.length) {
      setStartIndex(startIndex + 3)
    } else {
      setStartIndex(0)
    }
  }

  const prevCertifications = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3)
    } else {
      setStartIndex(Math.max(0, certifications.length - 3))
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="py-12 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl font-bold mb-12"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h1>

        <div className="relative">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {visibleCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="bg-gray-100 rounded-lg overflow-hidden group"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={cert.link}
                      className="bg-white text-black px-4 py-2 rounded-md flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-1">{cert.organization}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-end mt-8">
            <motion.button
              onClick={prevCertifications}
              className="p-2 rounded-full bg-gray-200 mr-2 hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextCertifications}
              className="p-2 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
