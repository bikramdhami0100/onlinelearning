"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Brain, Sparkles, Zap, Target, Users, TrendingUp, Star, Play, Award, Globe, MessageCircle, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, ChevronRight, CheckCircle, Lightbulb, Rocket, GraduationCap } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const handleSignIn = () => {
    window.location.href = "/workspace/";
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="relative">
           
                      <Image src="/logo.svg" alt="logo" width={170} height={48}  />      
            
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            {/* <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                HourGlass
              </span>
              <div className="text-xs text-gray-500 -mt-1">Smart Learning</div>
            </div> */}
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105">How it Works</a>
            <a href="#courses" className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105">Courses</a>
            <a href="#testimonials" className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105">Reviews</a>
            <Button onClick={() => {handleSignIn()}} variant="ghost" className="hover:bg-violet-50">Sign In</Button>
            <Button onClick={() => {handleSignIn()}} className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Free
            </Button>
          </div>
          
          {/* <div className="lg:hidden">
            <Button variant="ghost" size="sm">Menu</Button>
          </div> */}
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Students learning together"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-indigo-900/20"></div>
        </div>
        
        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-indigo-100 border border-violet-200">
                <Sparkles className="w-5 h-5 mr-2 text-violet-600" />
                <span className="text-violet-800 font-semibold">AI-Powered Course Generation</span>
                <div className="ml-2 px-2 py-1 bg-violet-600 text-white text-xs rounded-full">NEW</div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Generate & Learn
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Any Course
                </span>
                <span className="block text-5xl lg:text-6xl">with AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Transform any topic into a comprehensive course in seconds. Our AI creates personalized learning paths, interactive content, and assessments tailored to your goals and learning style.
              </p>
               
               <Link href="/workspace">
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r cursor-pointer from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-violet-500/25 transform hover:scale-105 transition-all duration-300">
                  Generate Your First Course
                  <Rocket className="ml-3 w-6 h-6" />
                </Button>
                <Button variant="outline" size="lg" className="px-10 cursor-pointer py-4 rounded-2xl text-lg border-2 border-gray-300 hover:bg-violet-50 hover:border-violet-300 font-semibold group">
                  <Play className="mr-3 w-6 h-6 group-hover:text-violet-600" />
                  Watch Demo
                </Button>
              </div>
               </Link>
              
              <div className="flex items-center space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900">50k+</div>
                  <div className="text-sm text-gray-600 font-medium">Courses Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900">12k+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Main Course Card */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">AI Course Generator</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Live</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-100">
                    <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Web Development Mastery</div>
                      <div className="text-sm text-gray-600">12 modules • 45 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AI & Machine Learning</div>
                      <div className="text-sm text-gray-600">8 modules • 32 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Digital Marketing Pro</div>
                      <div className="text-sm text-gray-600">15 modules • 38 hours</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-lg">Learning Progress</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-bold">78%</span>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-white h-3 rounded-full w-3/4 shadow-sm"></div>
                  </div>
                  <div className="mt-3 text-sm opacity-90">Keep it up! You're doing great!</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-20 animate-bounce"></div>
              <div className="absolute top-1/3 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              How Our AI Creates Your Perfect Course
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From topic to mastery in three simple steps. Our AI handles the complex course creation so you can focus on learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">1</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Describe Your Topic</h3>
              <p className="text-gray-600 text-lg">
                Simply tell our AI what you want to learn. From "Python for beginners" to "Advanced quantum physics" - anything goes!
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">2</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Generates Course</h3>
              <p className="text-gray-600 text-lg">
                Our AI creates a comprehensive curriculum with modules, lessons, quizzes, and projects tailored to your learning style.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">3</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Learning</h3>
              <p className="text-gray-600 text-lg">
                Begin your personalized learning journey with interactive content, progress tracking, and community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Powerful Features for Modern Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of online education with cutting-edge AI technology and innovative learning tools.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="AI-powered learning interface"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Course Generation</h3>
                  <p className="text-gray-600 text-lg">Advanced AI analyzes millions of educational resources to create the perfect course structure for any topic.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Content Creation</h3>
                  <p className="text-gray-600 text-lg">Generate comprehensive courses with videos, quizzes, assignments, and resources in under 30 seconds.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Personalized Learning Paths</h3>
                  <p className="text-gray-600 text-lg">Adaptive algorithms adjust difficulty and content based on your progress and learning preferences.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 transition-all duration-500 hover:scale-105 border border-violet-100">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Learning</h3>
              <p className="text-gray-600">
                Connect with learners worldwide, join study groups, and collaborate on projects in our vibrant community.
              </p>
            </div>
            
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-500 hover:scale-105 border border-indigo-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificates & Badges</h3>
              <p className="text-gray-600">
                Earn verified certificates and skill badges that showcase your achievements to employers and peers.
              </p>
            </div>
            
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-all duration-500 hover:scale-105 border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Language Support</h3>
              <p className="text-gray-600">
                Access courses in 50+ languages with real-time translation and localized content for global learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Loved by Learners Worldwide
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-4">4.9/5</span>
            </div>
            <p className="text-xl text-gray-600">Based on 12,000+ reviews</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "This platform transformed how I learn. The AI-generated courses are incredibly detailed and perfectly match my learning pace."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">Alex Johnson</div>
                  <div className="text-gray-500 text-sm">Software Developer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "I've completed 8 AI-generated courses and each one was perfectly structured. The community aspect makes learning even more engaging!"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612c0f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">Sarah Chen</div>
                  <div className="text-gray-500 text-sm">Data Scientist</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "The course quality is exceptional. I learned more in 3 months here than in 2 years of traditional online courses."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">Michael Rodriguez</div>
                  <div className="text-gray-500 text-sm">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Students celebrating success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-indigo-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black text-white mb-8">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-2xl text-violet-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 50,000 learners who have already generated their perfect courses and achieved their learning goals with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300">
              Start Learning for Free
              <Rocket className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-violet-600 px-12 py-6 rounded-2xl text-xl font-bold">
              Explore Sample Courses
              <ChevronRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo.svg" alt="logo" width={170} height={48}  />
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Revolutionizing education through AI-powered course generation and personalized learning experiences.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Platform</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Course Generator</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Learning Paths</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Certificates</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Mobile App</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">API Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Success Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">Webinars</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-300">bikramdhami334@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-300">9767459643</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-300">Bajhang, Nepal</span>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  />
                  <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-6 py-3 rounded-r-xl ">
                    <Mail className=" rounded-l-none" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
                <p className="text-gray-400">© 2025 LearnAI. All rights reserved.</p>
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}