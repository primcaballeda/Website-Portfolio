"use client"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState("home")

  const navItems = [
    { id: "home", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
  ]

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId)
    setActiveNavItem(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="bg-black text-white py-6 px-8 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavClick("home")}
        >
          Princess Caballeda
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`text-white hover:text-gray-300 transition-colors relative pb-1 ${
                activeNavItem === item.id ? "font-bold border-b-2 border-white" : ""
              }`}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden mt-4 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`block w-full text-left py-2 text-white hover:text-gray-300 transition-colors ${
                activeNavItem === item.id ? "font-bold" : ""
              }`}
              onClick={() => handleNavClick(item.id)}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Navbar
