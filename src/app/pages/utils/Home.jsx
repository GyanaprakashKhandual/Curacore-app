'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bug, 
  Folder, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Github, 
  Calendar, 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  FileSpreadsheet,
  Eye,
  Grid3X3,
  List,
  PieChart,
  Play,
  Star,
  ArrowRight,
  ChevronRight,
  Moon,
  Sun,
  LogIn,
  UserPlus,
  FileText,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const CuracoreLanding = () => {
  const [activeView, setActiveView] = useState('chart');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const features = [
    {
      icon: Folder,
      title: "Multi-Project Management",
      description: "Organize and track bugs across unlimited projects with unique identifiers"
    },
    {
      icon: Bug,
      title: "Advanced Bug Tracking",
      description: "Track up to 100+ bugs per project with detailed categorization and status updates"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share bug reports with team members and stakeholders for seamless collaboration"
    },
    {
      icon: FileSpreadsheet,
      title: "Google Sheets Integration",
      description: "Import and export bug data directly from Google Sheets for easy data management"
    },
    {
      icon: BarChart3,
      title: "Multiple View Options",
      description: "Visualize data in charts, sheets, cards, and customizable dashboard views"
    },
    {
      icon: Shield,
      title: "Manual Testing Support",
      description: "Comprehensive tools for manual testing workflows and bug documentation"
    }
  ];

  const viewOptions = [
    { id: 'chart', label: 'Chart View', icon: PieChart },
    { id: 'sheet', label: 'Sheet View', icon: Grid3X3 },
    { id: 'card', label: 'Card View', icon: List }
  ];

  const stats = [
    { number: '100+', label: 'Bugs per Project', icon: Bug },
    { number: '∞', label: 'Projects', icon: Folder },
    { number: '24/7', label: 'Team Access', icon: Users },
    { number: '3', label: 'View Modes', icon: Eye }
  ];

  const themeClasses = isDarkMode ? 'dark bg-gray-900' : 'bg-white';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const bgCard = isDarkMode ? 'bg-gray-800/60' : 'bg-white/60';
  const bgHeader = isDarkMode ? 'bg-gray-900/80' : 'bg-white/80';

  return (
    <div className={`min-h-screen overflow-hidden ${themeClasses}`} style={{
      background: isDarkMode 
        ? `linear-gradient(135deg, #1a1a2e, #16213e, #0f172a)`
        : `
          radial-gradient(circle at 20% 80%, rgba(248, 250, 252, .8) 0, transparent 50%), 
          radial-gradient(circle at 80% 20%, rgba(253, 242, 248, .8) 0, transparent 50%), 
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, .6) 0, transparent 50%), 
          linear-gradient(135deg, #ffffff, #f8fafc)
        `
    }}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 ${bgHeader} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${textPrimary}`}>Curacore</span>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button className={`px-4 py-2 ${textSecondary} hover:${textPrimary} transition-colors duration-300 flex items-center gap-2`}>
                <FileText className="w-4 h-4" />
                Documentation
              </button>
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${bgCard} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              <button className={`px-4 py-2 ${textSecondary} hover:${textPrimary} transition-colors duration-300 flex items-center gap-2`}>
                <LogIn className="w-4 h-4" />
                Login
              </button>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className={`relative ${bgCard} backdrop-blur-sm rounded-full p-6 shadow-2xl`}>
                  <Bug className="w-16 h-16 text-blue-600" />
                </div>
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6`}>
              CURACORE
            </h1>
            
            <p className={`text-xl md:text-2xl ${textSecondary} mb-8 max-w-3xl mx-auto`}>
              The ultimate bug tracking and project management solution. Track hundreds of bugs across multiple projects with powerful visualization and team collaboration tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  Start Tracking
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className={`group border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'} px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300`}>
                <span className="flex items-center justify-center gap-2">
                  View Demo
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`${bgCard} backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${textPrimary} mb-2`}>{stat.number}</div>
                  <div className={textSecondary}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-6`}>
              Powerful Features
            </h2>
            <p className={`text-xl ${textSecondary} max-w-3xl mx-auto`}>
              Everything you need to track bugs, manage projects, and collaborate with your team effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className={`${bgCard} backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3 mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${textPrimary}`}>{feature.title}</h3>
                  </div>
                  <p className={`${textSecondary} leading-relaxed`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View Options Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold ${textPrimary} mb-6`}>Multiple View Options</h2>
            <p className={`text-xl ${textSecondary}`}>Choose how you want to visualize your bug data</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className={`${bgCard} backdrop-blur-sm rounded-full p-2 shadow-lg`}>
              {viewOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveView(option.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeView === option.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : `${textSecondary} hover:${textPrimary}`
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className={`${bgCard} backdrop-blur-sm rounded-2xl p-8 shadow-xl`}>
            <div className="h-64 flex items-center justify-center">
              {activeView === 'chart' && (
                <div className="text-center">
                  <PieChart className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold ${textPrimary} mb-2`}>Chart View</h3>
                  <p className={textSecondary}>Visualize bug distribution with interactive charts and graphs</p>
                </div>
              )}
              
              {activeView === 'sheet' && (
                <div className="text-center">
                  <Grid3X3 className="w-24 h-24 text-green-600 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold ${textPrimary} mb-2`}>Sheet View</h3>
                  <p className={textSecondary}>Traditional spreadsheet layout for detailed bug analysis</p>
                </div>
              )}
              
              {activeView === 'card' && (
                <div className="text-center">
                  <List className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold ${textPrimary} mb-2`}>Card View</h3>
                  <p className={textSecondary}>Organized card layout for quick bug overview and management</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <FileSpreadsheet className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Google Sheets Integration</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Seamlessly import your existing bug data from Google Sheets or export your tracked bugs for external analysis. 
              Keep your workflow flexible and data accessible.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn About Integration
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-6`}>
            Ready to Start Tracking?
          </h2>
          <p className={`text-xl ${textSecondary} mb-8`}>
            Join thousands of teams already using Curacore to manage their projects and eliminate bugs efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className={`group border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'} px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300`}>
              <span className="flex items-center justify-center gap-2">
                Schedule Demo
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 sm:px-6 lg:px-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200/50'} ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                  <Bug className="w-6 h-6 text-white" />
                </div>
                <span className={`text-2xl font-bold ${textPrimary}`}>Curacore</span>
              </div>
              <p className={`${textSecondary} mb-4`}>
                The ultimate solution for bug tracking and project management
              </p>
            </div>
            
            {/* Product */}
            <div>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Features</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Pricing</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Documentation</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>API</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>About</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Blog</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Careers</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Contact</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Help Center</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Community</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Status</a></li>
                <li><a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors`}>Security</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200/50'} flex flex-col md:flex-row justify-between items-center`}>
            <p className={`${textSecondary} text-sm`}>
              © 2025 Curacore. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors text-sm`}>Privacy Policy</a>
              <a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors text-sm`}>Terms of Service</a>
              <a href="#" className={`${textSecondary} hover:${textPrimary} transition-colors text-sm`}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CuracoreLanding;