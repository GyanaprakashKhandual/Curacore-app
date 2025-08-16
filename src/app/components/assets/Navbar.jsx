'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Bug, 
  BarChart3, 
  Table, 
  LayoutGrid, 
  Import, 
  Download, 
  Filter, 
  MessageCircle, 
  User, 
  MoreVertical,
  X
} from 'lucide-react'
import ArrowDown from '@/app/utils/Arrowdown'
import ProjectSidebar from '../modules/Project'   // ✅ you already have this

export default function Navbar() {
  const [isViewDropdownOpen, setIsViewDropdownOpen] = useState(false)
  const [selectedView, setSelectedView] = useState('Chart View')
  const [showProjectSidebar, setShowProjectSidebar] = useState(false)

  const viewOptions = [
    { id: 'chart', label: 'Chart View', icon: BarChart3 },
    { id: 'table', label: 'Table View', icon: Table },
    { id: 'card', label: 'Card View', icon: LayoutGrid }
  ]

  const handleViewSelect = (view) => {
    setSelectedView(view.label)
    setIsViewDropdownOpen(false)
  }

  const toggleProjectSidebar = () => {
    setShowProjectSidebar((prev) => !prev)
  }

  return (
    <>
      {/* ✅ Import your sidebar and pass state */}
      <ProjectSidebar isOpen={showProjectSidebar} onClose={toggleProjectSidebar} />

      <nav className="bg-gray-50 border-b border-gray-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 flex-wrap gap-2">
            
            {/* Left Section */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              {/* Hamburger Menu */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleProjectSidebar}  // ✅ toggles sidebar
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              >
                {showProjectSidebar ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
              <h6 className="font-semibold text-gray-800">Resolution Pro</h6>
            </div>

            {/* Search Bar (Hidden on mobile) */}
            <div className="relative hidden md:block flex-1 max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              <motion.button className="flex items-center px-3 py-2 text-sm font-medium bg-gray-200 rounded-md">
                <Bug className="h-4 w-4 mr-2" /> Add Bug
              </motion.button>

              {/* View Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsViewDropdownOpen(!isViewDropdownOpen)}
                  className="flex items-center px-3 py-[6px] text-sm font-medium bg-gray-200 rounded-md"
                >
                  {React.createElement(viewOptions.find(v => v.label === selectedView)?.icon || BarChart3, { className: "h-4 w-4 mr-2" })}
                  {selectedView}
                  <motion.div
                    animate={{ rotate: isViewDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowDown className="h-4 w-4 ml-2" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isViewDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-300 py-1 z-50"
                    >
                      {viewOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleViewSelect(option)}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                          <option.icon className="h-4 w-4 mr-3" />
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Import / Export / Icons */}
              <motion.button className="flex items-center px-3 py-2 text-sm font-medium bg-gray-200 rounded-md">
                <Import className="h-4 w-4 mr-2" /> Import
              </motion.button>
              <motion.button className="flex items-center px-3 py-2 text-sm font-medium bg-gray-200 rounded-md">
                <Download className="h-4 w-4 mr-2" /> Export
              </motion.button>
              <motion.button className="p-2 bg-gray-200 rounded-md">
                <Filter className="h-5 w-5" />
              </motion.button>
              <motion.button className="p-2 bg-gray-200 rounded-md">
                <MessageCircle className="h-5 w-5" />
              </motion.button>
              <motion.button className="p-2 bg-gray-200 rounded-md">
                <User className="h-5 w-5" />
              </motion.button>
              <motion.button className="p-2 bg-gray-200 rounded-md">
                <MoreVertical className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
