'use client'

import { motion } from 'framer-motion'
import LiquidChrome from '../../components/LiquidChrome'

export default function Resume() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          
          .resume-content {
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
            padding: 2rem !important;
          }

          .resume-content h1,
          .resume-content h2,
          .resume-content h3,
          .resume-content p,
          .resume-content li,
          .resume-content span {
            color: black !important;
            opacity: 1 !important;
          }

          .resume-content a {
            color: #0066cc !important;
            text-decoration: underline !important;
          }

          .skill-tag {
            background: #f0f0f0 !important;
            color: black !important;
            border: 1px solid #ddd !important;
          }

          .language-dot {
            background: black !important;
            border: 1px solid black !important;
          }

          .button-container {
            display: none !important;
          }

          .liquid-background {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 0
      }}>
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.15]}
          speed={0.5}
          amplitude={0.6}
          interactive={true}
        />
      </div>

      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        padding: '4rem 2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          display: 'flex',
          gap: '1rem'
        }}>
          <motion.button
            onClick={() => window.history.back()}
            style={{
              padding: '0.5rem 1rem',
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
            whileHover={{ 
              background: 'rgba(0, 0, 0, 0.8)',
              scale: 1.05,
              borderColor: 'rgba(255, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </motion.button>

          <motion.button
            onClick={() => window.print()}
            style={{
              padding: '0.5rem 1rem',
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
            whileHover={{ 
              background: 'rgba(0, 0, 0, 0.8)',
              scale: 1.05,
              borderColor: 'rgba(255, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
              <path d="M8 7h8"/>
              <path d="M8 12h8"/>
              <path d="M8 17h8"/>
            </svg>
            Export
          </motion.button>
        </div>

        <motion.div
          style={{
            maxWidth: '800px',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.85)',
            borderRadius: '1rem',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.5px',
            color: 'white'
          }}>
            Wen Cheng (Caleb) Huong
          </h1>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <a 
              href="mailto:wencheng31502@gmail.com" 
              style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              wencheng31502@gmail.com
            </a>
            <span style={{ opacity: 0.5 }}>•</span>
            <a 
              href="https://linkedin.com/in/wen-cheng-huong-37b11b1b4/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              LinkedIn
            </a>
            <span style={{ opacity: 0.5 }}>•</span>
            <a 
              href="https://github.com/Evank-wc" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              GitHub
            </a>
          </div>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Profile
            </h2>
            <p style={{ 
              lineHeight: '1.6',
              opacity: 0.8,
              color: 'white',
              textAlign: 'justify'
            }}>
              Organized and detail-oriented professional with a growing background in software engineering, combined with proven experience in administrative support, customer service, and collaborative team environments. Skilled in time management, multi-tasking, and problem-solving, honed through both technical projects and fast-paced work settings. Currently developing expertise in full-stack development, version control (Git), and agile methodologies through academic coursework and hands-on projects. Strong foundation in event coordination, leadership, and communication, built through active involvement in local community leadership roles. Adept at managing schedules, coordinating tasks, and ensuring smooth day-to-day operations. Eager to contribute both technical and interpersonal skills in a dynamic, innovation-driven team.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Work Experience / Community Involvement
            </h2>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Senior Crew Member
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Subway, Melbourne • 2023 - 2024
              </p>
              <ul style={{ 
                listStyle: 'none',
                paddingLeft: '1rem',
                opacity: 0.8
              }}>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Customer service and communication</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Food preparation according to standards</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Cash handling and basic bookkeeping</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Stock tracking and management</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Cleanliness and food safety management</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Collaborative work with team members</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Service Translator/Interpreter
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                City Light Methodist Church, Melbourne • 2024 - Current
              </p>
              <ul style={{ 
                listStyle: 'none',
                paddingLeft: '1rem',
                opacity: 0.8
              }}>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Translation for service materials</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Interpretation and translation during sermons and service proceedings</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Worship and Music Committee
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                City Light Methodist Church, Melbourne • 2024 - Current
              </p>
              <ul style={{ 
                listStyle: 'none',
                paddingLeft: '1rem',
                opacity: 0.8
              }}>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Administrative work regarding worship and weekly services</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Leading and coordinating teams in ensuring smooth execution of service</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Music arrangement and worship planning</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Event management and logistics</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Communication between staff and members</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Recruitment and training for service roster</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Addressing technical and last-minute issues during service</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Youth Fellowship Committee Member
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Camberwell Methodist Church, Melbourne • 2024 - 2024
              </p>
              <ul style={{ 
                listStyle: 'none',
                paddingLeft: '1rem',
                opacity: 0.8
              }}>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Collaborative work with other committee members</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Event planning, management and coordination</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Teaching Assistant
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                CFCB Christian Fellowship Centre of Brunei, Brunei Darussalam • 2021 - 2022
              </p>
              <ul style={{ 
                listStyle: 'none',
                paddingLeft: '1rem',
                opacity: 0.8
              }}>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Preparation of teaching materials</li>
                <li style={{ marginBottom: '0.5rem', color: 'white' }}>• Physical classroom teaching</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Education
            </h2>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Bachelor in Software Engineering (Honours)
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Monash University Australia • 2021 - Present
              </p>
              <div style={{ 
                display: 'flex',
                gap: '1rem',
                marginBottom: '0.5rem',
                opacity: 0.8,
                color: 'white'
              }}>
                <span>GPA: 3.0/4.0</span>
                <span>•</span>
                <span>WAM: 74.62</span>
                <span>•</span>
                <span>Avg Grade: 84.37</span>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: 'white'
              }}>
                Foundation Studies
              </h3>
              <p style={{ 
                opacity: 0.8,
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Sunway University Malaysia • 2020
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Language Proficiency
            </h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '300px'
              }}>
                <span style={{ color: 'white' }}>English</span>
                <div style={{ 
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'white',
                      opacity: 1
                    }} />
                  ))}
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '300px'
              }}>
                <span style={{ color: 'white' }}>Chinese</span>
                <div style={{ 
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'white',
                      opacity: 1
                    }} />
                  ))}
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '300px'
              }}>
                <span style={{ color: 'white' }}>Malay</span>
                <div style={{ 
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'white',
                      opacity: i < 2 ? 1 : 0.3
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Skills
            </h2>
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {[
                'Node.js',
                'HTML',
                'React.js',
                'TypeScript',
                'Next.js',
                'CSS',
                'GitHub',
                'ESLint',
                'Swift',
                'SwiftUI',
                'Xcode',
                'Front-End Development',
                'Web Services',
                'Artificial Intelligence (AI)',
                'Python',
                'Flask',
                'Whisper',
                'Groq',
                'FFmpeg',
                'Statistical Data Analysis',
                'UI/UX',
                'Software Project Management',
                'Software Documentation',
                'Data Management',
                'Data Visualization',
                'Generative AI Tools',
                'Agile Methodologies',
                'Bilingual Communications',
                'Microsoft Office',
                'Software Development',
                'Interpersonal Communication',
                'Team Management'
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
          </section>
        </motion.div>
      </div>
    </main>
  )
} 