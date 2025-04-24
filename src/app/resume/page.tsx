'use client'

import { motion } from 'framer-motion'
import LiquidChrome from '../../components/LiquidChrome'
import MetaBalls from '../../components/MetaBalls'
import styles from './resume.module.css'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.liquidBackground}>
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.15]}
          speed={0.5}
          amplitude={0.6}
          interactive={true}
        />
      </div>

      <div className={styles.metaBalls}>
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
      </div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.buttonContainer}>
          <motion.button
            onClick={() => window.history.back()}
            className={styles.button}
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
            className={styles.button}
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
          className={styles.resumeContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heading}>
            Wen Cheng (Caleb) Huong
          </h1>
          
          <div className={styles.contactInfo}>
            <a 
              href="mailto:wencheng31502@gmail.com" 
              className={styles.link}
              onMouseEnter={(e) => e.currentTarget.classList.add(styles.linkHover)}
              onMouseLeave={(e) => e.currentTarget.classList.remove(styles.linkHover)}
            >
              wencheng31502@gmail.com
            </a>
            <span className={styles.separator}>•</span>
            <a 
              href="https://linkedin.com/in/wen-cheng-huong-37b11b1b4/" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onMouseEnter={(e) => e.currentTarget.classList.add(styles.linkHover)}
              onMouseLeave={(e) => e.currentTarget.classList.remove(styles.linkHover)}
            >
              LinkedIn
            </a>
            <span className={styles.separator}>•</span>
            <a 
              href="https://github.com/Evank-wc" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onMouseEnter={(e) => e.currentTarget.classList.add(styles.linkHover)}
              onMouseLeave={(e) => e.currentTarget.classList.remove(styles.linkHover)}
            >
              GitHub
            </a>
          </div>

          <section className={styles.section}>
            <h2 className={styles.subHeading}>
              Profile
            </h2>
            <p className={styles.paragraph}>
              Organized and detail-oriented professional with a growing background in software engineering, combined with proven experience in administrative support, customer service, and collaborative team environments. Skilled in time management, multi-tasking, and problem-solving, honed through both technical projects and fast-paced work settings. Currently developing expertise in full-stack development, version control (Git), and agile methodologies through academic coursework and hands-on projects. Strong foundation in event coordination, leadership, and communication, built through active involvement in local community leadership roles. Adept at managing schedules, coordinating tasks, and ensuring smooth day-to-day operations. Eager to contribute both technical and interpersonal skills in a dynamic, innovation-driven team.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subHeading}>
              Work Experience / Community Involvement
            </h2>

            <div className={styles.experience}>
              <h3 className={styles.experienceTitle}>
                Senior Crew Member
              </h3>
              <p className={styles.experiencePeriod}>
                Subway, Melbourne • 2023 - 2024
              </p>
              <ul className={styles.experienceList}>
                <li>• Customer service and communication</li>
                <li>• Food preparation according to standards</li>
                <li>• Cash handling and basic bookkeeping</li>
                <li>• Stock tracking and management</li>
                <li>• Cleanliness and food safety management</li>
                <li>• Collaborative work with team members</li>
              </ul>
            </div>

            <div className={styles.experience}>
              <h3 className={styles.experienceTitle}>
                Service Translator/Interpreter
              </h3>
              <p className={styles.experiencePeriod}>
                City Light Methodist Church, Melbourne • 2024 - Current
              </p>
              <ul className={styles.experienceList}>
                <li>• Translation for service materials</li>
                <li>• Interpretation and translation during sermons and service proceedings</li>
              </ul>
            </div>

            <div className={styles.experience}>
              <h3 className={styles.experienceTitle}>
                Worship and Music Committee
              </h3>
              <p className={styles.experiencePeriod}>
                City Light Methodist Church, Melbourne • 2024 - Current
              </p>
              <ul className={styles.experienceList}>
                <li>• Administrative work regarding worship and weekly services</li>
                <li>• Leading and coordinating teams in ensuring smooth execution of service</li>
                <li>• Music arrangement and worship planning</li>
                <li>• Event management and logistics</li>
                <li>• Communication between staff and members</li>
                <li>• Recruitment and training for service roster</li>
                <li>• Addressing technical and last-minute issues during service</li>
              </ul>
            </div>

            <div className={styles.experience}>
              <h3 className={styles.experienceTitle}>
                Youth Fellowship Committee Member
              </h3>
              <p className={styles.experiencePeriod}>
                Camberwell Methodist Church, Melbourne • 2024 - 2024
              </p>
              <ul className={styles.experienceList}>
                <li>• Collaborative work with other committee members</li>
                <li>• Event planning, management and coordination</li>
              </ul>
            </div>

            <div className={styles.experience}>
              <h3 className={styles.experienceTitle}>
                Teaching Assistant
              </h3>
              <p className={styles.experiencePeriod}>
                CFCB Christian Fellowship Centre of Brunei, Brunei Darussalam • 2021 - 2022
              </p>
              <ul className={styles.experienceList}>
                <li>• Preparation of teaching materials</li>
                <li>• Physical classroom teaching</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subHeading}>
              Education
            </h2>
            <div className={styles.education}>
              <h3 className={styles.educationTitle}>
                Bachelor in Software Engineering (Honours)
              </h3>
              <p className={styles.educationPeriod}>
                Monash University Australia • 2021 - Present
              </p>
              <div className={styles.educationDetails}>
                <span>GPA: 3.0/4.0</span>
                <span>•</span>
                <span>WAM: 74.62</span>
                <span>•</span>
                <span>Avg Grade: 84.37</span>
              </div>
            </div>

            <div className={styles.education}>
              <h3 className={styles.educationTitle}>
                Foundation Studies
              </h3>
              <p className={styles.educationPeriod}>
                Sunway University Malaysia • 2020
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subHeading}>
              Language Proficiency
            </h2>
            <div className={styles.languageProficiency}>
              <div className={styles.language}>
                <span>English</span>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={styles.star} />
                  ))}
                </div>
              </div>

              <div className={styles.language}>
                <span>Chinese</span>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={styles.star} />
                  ))}
                </div>
              </div>

              <div className={styles.language}>
                <span>Malay</span>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={styles.star} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subHeading}>
              Skills
            </h2>
            <div className={styles.skills}>
              <span className={styles.skillTag}>React.js</span>
              <span className={styles.skillTag}>Next.js</span>
              <span className={styles.skillTag}>TypeScript</span>
              <span className={styles.skillTag}>HTML</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>Swift</span>
              <span className={styles.skillTag}>SwiftUI</span>
              <span className={styles.skillTag}>Node.js</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Flask</span>
              <span className={styles.skillTag}>GitHub</span>
              <span className={styles.skillTag}>ESLint</span>
              <span className={styles.skillTag}>Xcode</span>
              <span className={styles.skillTag}>FFmpeg</span>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </main>
  )
} 