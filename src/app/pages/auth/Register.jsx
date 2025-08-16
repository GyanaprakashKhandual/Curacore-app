'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Code, Shield, CheckCircle, ArrowRight, Eye, EyeOff, Terminal, Bug, Layers, Cpu } from 'lucide-react';
import { useRouter} from 'next/navigation';
export default function RegisterPage() {
  const [step, setStep] = useState(1); // 1 = initial form, 2 = OTP verification
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGetOtp = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }
      
      setOtpSent(true);
      setStep(2);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!formData.otp || formData.otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          otp: formData.otp
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // Redirect or handle successful registration
      router.push('/login');
      
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-[radial-gradient(circle_at_top,_#22d3ee,_#fffafa,_#f5e8c3)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative SVG elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-1/3 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#22d3ee" d="M50,-50C64.5,-36.1,75.2,-18,74.3,-0.9C73.4,16.2,60.9,32.4,46.4,45.1C32,57.8,15.6,67,-3.4,70.4C-22.3,73.8,-44.7,71.4,-58.1,58.7C-71.6,46,-76.2,23,-74.5,1.5C-72.8,-20.1,-64.7,-40.1,-51.3,-54C-37.8,-67.9,-18.9,-75.6,0.3,-75.9C19.5,-76.2,39,-69.1,50,-50Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-1/4 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#22d3ee" d="M42.4,-56.9C55.3,-47.9,66.5,-35.8,71.1,-21.5C75.7,-7.2,73.6,9.3,66.2,23.8C58.8,38.3,46.1,50.8,31.2,60.1C16.3,69.4,-0.8,75.6,-16.3,71.8C-31.8,68,-45.6,54.3,-56.1,38.9C-66.6,23.5,-73.8,6.5,-72.1,-10.9C-70.3,-28.2,-59.5,-45.9,-44.5,-54.6C-29.5,-63.3,-10.3,-63.1,5.5,-68.9C21.3,-74.7,42.6,-86.5,42.4,-56.9Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
      </div>
      
      <div className="w-full max-w-6xl flex items-center gap-12 z-10">
        {/* Left Side - Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 hidden lg:block"
        >
          <div className="max-w-full p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-cyan-600">Caffetest</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The ultimate automated testing solution integrated seamlessly with VS Code
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">VS Code Integration</h3>
                  <p className="text-gray-600">
                    Write code and automatically generate comprehensive test cases directly within your favorite editor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Testing</h3>
                  <p className="text-gray-600">
                    Leverage OpenAI's advanced capabilities to create intelligent, context-aware test scenarios
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-96 flex-shrink-0">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8"
          >
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 1 ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {step > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
                </div>
                <div className={`w-16 h-1 mx-2 ${
                  step >= 2 ? 'bg-cyan-600' : 'bg-gray-200'
                }`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 2 ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {step >= 2 ? <Shield className="w-4 h-4" /> : '2'}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                    Create Account
                  </h2>

                  {/* Name Field */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Create a secure password"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Get OTP Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGetOtp}
                    disabled={isLoading}
                    className="w-full bg-blue-900 hover:bg-blue-900 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Get OTP
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                    Verify Your Email
                  </h2>
                  <p className="text-gray-600 text-sm text-center mb-6">
                    We've sent a 6-digit code to {formData.email}
                  </p>

                  {/* OTP Field */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      value={formData.otp}
                      onChange={(e) => handleInputChange('otp', e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full text-center text-2xl font-mono tracking-widest py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Register Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRegister}
                    disabled={isLoading}
                    className="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Complete Registration
                        <CheckCircle className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Back Button */}
                  <button
                    onClick={() => setStep(1)}
                    disabled={isLoading}
                    className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Back to form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>  
        </div>
      </div>
    </div>
  );
}