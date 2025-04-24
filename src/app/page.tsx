'use client'

import Image from 'next/image'
import AnimatedSection from '../components/AnimatedSection'
import Navbar from '../components/Navbar'
import LiquidChrome from '../components/LiquidChrome'
import RotatingText from '../components/RotatingText'
import DecryptedText from '../components/DecryptedText'
import '../components/RotatingText.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SplashCursor from '../components/SplashCursor'
import MetaBalls from '../components/MetaBalls'

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <LiquidChrome
          baseColor={[0.15, 0.15, 0.2]}
          speed={0.5}
          amplitude={0.6}
          interactive={true}
        />
      </div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* Hero Section */}
        <section className="hero" style={{ 
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6))',
          padding: '0'
        }}>
          <div style={{ 
            position: 'absolute',
            left: '2rem',
            maxWidth: '800px',
            zIndex: 1
          }}>
            <AnimatedSection>
              <motion.h1 
                style={{ fontSize: '3.5rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2
                }}
              >
                <DecryptedText
                  text="Hello there!"
                  speed={100}
                  maxIterations={30}
                  animateOn="view"
                  revealDirection="left"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  sequential={true}
                  initialColor="rgba(255, 255, 255, 0.5)"
                />
              </motion.h1>
              <motion.h2 
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4
                }}
              >
                <DecryptedText
                  text="I am Wen Cheng."
                  speed={100}
                  maxIterations={30}
                  animateOn="view"
                  revealDirection="left"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  sequential={true}
                  initialColor="rgba(255, 255, 255, 0.5)"
                />
              </motion.h2>
              <motion.h2 
                style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6
                }}
              >
                <DecryptedText
                  text="You can call me Caleb."
                  speed={100}
                  maxIterations={30}
                  animateOn="view"
                  revealDirection="left"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  sequential={true}
                  initialColor="rgba(255, 255, 255, 0.5)"
                />
              </motion.h2>
              <motion.div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '2rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  marginBottom: '2rem'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.8
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 1
                  }}
                >
                  I'm a
                </motion.span>
                <RotatingText
                  texts={[
                    "Continuous_Learner",
                    "Software_Engineer",
                    "Full_Stack_Developer",
                    "UI/UX_Designer",
                    "AI_Enthusiast",
                    "Problem_Solver"
                  ]}
                  mainClassName="hero-subtitle"
                  staggerFrom="top"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  staggerDuration={0.1}
                  rotationInterval={3500}
                />
              </motion.div>

              <motion.div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.2
                }}
              >
                <a 
                  href="https://www.linkedin.com/in/wen-cheng-huong-37b11b1b4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.instagram.com/__wencheng/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://github.com/Evank-wc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a 
                  href="/resume" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    height: '3rem',
                    padding: '0 1.5rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  view resume &gt;
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" style={{ 
          background: 'black',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            overflow: 'hidden'
          }}>
            <SplashCursor />
          </div>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            marginLeft: '2rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              textAlign: 'left'
            }}>Skills & Expertise</h2>
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                maxWidth: '800px'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenSection(openSection === 'technical' ? null : 'technical')}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>Technical Development</span>
                  <motion.span
                    animate={{ rotate: openSection === 'technical' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openSection === 'technical' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {[
                          'React.js', 'Next.js', 'TypeScript', 'HTML', 'CSS',
                          'Swift', 'SwiftUI', 'Node.js', 'Python', 'Flask',
                          'GitHub', 'ESLint', 'Xcode', 'FFmpeg'
                        ].map((skill) => (
                          <span key={skill} style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '1rem',
                            fontSize: '0.9rem',
                            color: 'white'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenSection(openSection === 'data' ? null : 'data')}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>Data & AI</span>
                  <motion.span
                    animate={{ rotate: openSection === 'data' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openSection === 'data' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {[
                          'Artificial Intelligence (AI)', 'Whisper', 'Groq',
                          'Generative AI Tools', 'Statistical Data Analysis',
                          'Data Management', 'Data Visualization', 'Web Services'
                        ].map((skill) => (
                          <span key={skill} style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '1rem',
                            fontSize: '0.9rem',
                            color: 'white'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenSection(openSection === 'professional' ? null : 'professional')}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>Professional Skills</span>
                  <motion.span
                    animate={{ rotate: openSection === 'professional' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openSection === 'professional' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {[
                          'Software Project Management', 'Agile Methodologies',
                          'Software Documentation', 'Bilingual Communications',
                          'Interpersonal Communication', 'Team Management',
                          'Microsoft Office'
                        ].map((skill) => (
                          <span key={skill} style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '1rem',
                            fontSize: '0.9rem',
                            color: 'white'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            marginLeft: '2rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              textAlign: 'left'
            }}>Featured Projects</h2>
            <p style={{
              marginBottom: '2rem',
              opacity: 0.8,
              maxWidth: '600px',
              textAlign: 'left'
            }}>
              Personal side projects and collaborations.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              width: '100%',
              maxWidth: '800px'
            }}>
              <AnimatedSection delay={0.1}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '2rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>CLMC Website</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                    A modern, responsive website for City Light Methodist Church built with Next.js and TypeScript. 
                    The website features a bilingual interface (English/Chinese) and provides information about the church's services, ministries, and contact details.
                  </p>
                  <a href="https://github.com/Evank-wc/ProjectCLMC" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{
                       display: 'inline-flex',
                       alignItems: 'center',
                       gap: '0.5rem',
                       color: 'white',
                       textDecoration: 'none',
                       padding: '0.5rem 1rem',
                       background: 'rgba(255, 255, 255, 0.1)',
                       borderRadius: '0.25rem',
                       transition: 'all 0.3s ease'
                     }}>
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '2rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>Smart-Meeting-Assistant</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                    A web application that transcribes audio files and generates meeting minutes using AI. 
                    Built with Flask and Whisper. Developed using Cursor.
                  </p>
                  <a href="https://github.com/Evank-wc/Smart-Meeting-Assistant" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{
                       display: 'inline-flex',
                       alignItems: 'center',
                       gap: '0.5rem',
                       color: 'white',
                       textDecoration: 'none',
                       padding: '0.5rem 1rem',
                       background: 'rgba(255, 255, 255, 0.1)',
                       borderRadius: '0.25rem',
                       transition: 'all 0.3s ease'
                     }}>
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '2rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>Taskly</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                    A simple To-Do list application built on SwiftUI for learning purposes.
                  </p>
                  <a href="https://github.com/Evank-wc/Taskly" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{
                       display: 'inline-flex',
                       alignItems: 'center',
                       gap: '0.5rem',
                       color: 'white',
                       textDecoration: 'none',
                       padding: '0.5rem 1rem',
                       background: 'rgba(255, 255, 255, 0.1)',
                       borderRadius: '0.25rem',
                       transition: 'all 0.3s ease'
                     }}>
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'flex-start'
            }}>
              <a 
                href="https://github.com/Evank-wc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                More on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            marginLeft: '2rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              textAlign: 'left'
            }}>Get in Touch</h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              opacity: 0.8,
              maxWidth: '600px',
              textAlign: 'left'
            }}>
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '600px'
            }}>
              <a 
                href="mailto:wencheng31502@gmail.com" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                wencheng31502@gmail.com
              </a>
            </div>
          </div>
          <MetaBalls
            color="#ffffff"
            cursorBallColor="#ffffff"
            cursorBallSize={2}
            ballCount={25}
            animationSize={80}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={1.2}
            speed={0.3}
          />
        </section>

        {/* Footer Section */}
        <footer style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}>
              © {new Date().getFullYear()} Wen Cheng. All rights reserved.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.8rem'
            }}>
              <span>Built with React and Next.js</span>
              <span>•</span>
              <span>Styled with ReactBits</span>
              <span>•</span>
              <span>Deployed on Github Pages</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
} 