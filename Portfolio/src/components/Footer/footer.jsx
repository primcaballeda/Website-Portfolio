"use client"

import React from "react"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Github, Phone, Mail } from "lucide-react"

const Footer = ({ onSectionChange }) => {
  const navItems = [
    { id: "home", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
  ]

  const socialLinks = [
    { id: "linkedin", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/princesscaballeda/" },
    { id: "github", icon: <Github size={18} />, url: "https://github.com/primcaballeda" },
    { id: "facebook", icon: <Facebook size={18} />, url: "https://www.facebook.com/prim.caballeda/" },
  ]

  return (
    <footer className="bg-white py-12 px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-bold mb-4">Princess Caballeda</h2>
            <div className="contact-info mb-6">
              <div className="contact-item flex items-center gap-2">
                <Phone size={16} />
                <span>09518177861</span>
              </div>
              <div className="contact-item flex items-center gap-2">
                <Mail size={16} />
                <span>p.ocumanc@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  className="bg-black text-white p-2 rounded-full"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="text-gray-800 hover:text-black hover:underline transition-colors"
                  onClick={() => onSectionChange(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mt-4 md:mt-0">
          
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
