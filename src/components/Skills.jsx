import { motion } from 'framer-motion'

const technicalSkills = [
  { label: 'Cloud', value: 'Amazon Web Services (AWS)' },
  { label: 'Languages', value: 'Javascript, Python' },
  { label: 'Frontend', value: 'HTML, CSS, JS, React.JS' },
  { label: 'Backend', value: 'Express.js' },
  { label: 'Database', value: 'SQL' },
  { label: 'Tools & Platform', value: 'Git, npm, REST APIs' },
]

const dataSkills = [
  { label: 'Data Analytic', value: 'Python, Power Query' },
  { label: 'Data Visualization', value: 'Excel, Power BI, Table AU' },
]

const collaborationSkills = [
  { label: 'Office', value: 'Microsoft Office Suite (Word, Excel, PowerPoint)' },
  { label: 'Collaboration Tools', value: 'Microsoft Teams, Zoom, Google Meet' },
  { label: 'Project Management', value: 'Jira, Trello' },
  { label: 'Design Tools', value: 'Canva, Figma' },
]

// Isi `url` dengan tautan credential masing-masing sertifikasi.
const certifications = [
  { name: 'AWS Certified Cloud Practitioner', url: 'https://www.credly.com/badges/0e0094d8-bd54-401b-a80d-a4e072fcbf04/' },
  { name: 'AWS Academy Graduate - Generative AI Foundations', url: 'https://www.credly.com/badges/0e0094d8-bd54-401b-a80d-a4e072fcbf04/' },
  { name: 'The Complete 2024 Web Development Bootcamp', url: 'https://www.udemy.com/certificate/UC-a9a053ce-c12f-4e44-ac51-0596e27d35fd/' },
  { name: 'SQL', url: 'http://ngulikdata.com/certificates/XECCE8eUgmDx' },
]

const softSkills = [
  'Analytical Thinking & Problem-Solving',
  'Attention to Detail & Data Accuracy',
  'Cross-functional Team Collaboration',
  'Stakeholder Communication & Reporting',
  'Time Management & Prioritization',
  'Adaptability & Continuous Learning',
]

const languages = [
  { name: 'Indonesian', level: 'Native Proficiency' },
  { name: 'English', level: 'Intermediate - Professional Working Proficiency' },
]

const SectionTitle = ({ icon, children, delay = 0 }) => (
  <motion.h4
    className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <span className="text-[#febc2e]">{icon}</span> {children}
  </motion.h4>
)

const LabeledList = ({ items, delay = 0 }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <motion.div
        key={item.label}
        className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 bg-white/[0.03] rounded-lg border border-white/[0.06] px-4 py-2.5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + index * 0.06 }}
      >
        <span className="text-xs font-mono text-[#bf5af2] sm:w-44 shrink-0">{item.label}</span>
        <span className="text-sm text-white/70">{item.value}</span>
      </motion.div>
    ))}
  </div>
)

const Chip = ({ children, delay = 0 }) => (
  <motion.span
    className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-white/50 border border-white/[0.06] hover:bg-white/10 hover:text-white/70 transition-all cursor-default"
    whileHover={{ scale: 1.05, y: -2 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
  >
    {children}
  </motion.span>
)

const Skills = () => {
  return (
    <div className="py-4 space-y-8">
      {/* Terminal header */}
      <div className="font-mono text-sm">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> neofetch --skills</span>
      </div>

      {/* Technical Skills */}
      <section>
        <SectionTitle icon="💻">Technical Skills</SectionTitle>
        <p className="text-white/30 text-xs font-mono mb-3">Programming and Development</p>
        <LabeledList items={technicalSkills} />
      </section>

      {/* Data Analytics & Visualization */}
      <section>
        <SectionTitle icon="📊" delay={0.2}>Data Analytics & Visualization</SectionTitle>
        <LabeledList items={dataSkills} delay={0.2} />
      </section>

      {/* Collaboration & Productivity */}
      <section>
        <SectionTitle icon="🤝" delay={0.3}>Collaboration & Productivity</SectionTitle>
        <LabeledList items={collaborationSkills} delay={0.3} />
      </section>

      {/* Certification */}
      <section>
        <SectionTitle icon="🎓" delay={0.4}>Certification</SectionTitle>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="flex items-center justify-between gap-3 bg-white/[0.03] rounded-lg border border-white/[0.06] px-4 py-2.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.06 }}
            >
              <span className="text-sm text-white/70">{cert.name}</span>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#0a84ff] hover:underline whitespace-nowrap"
                >
                  Credential →
                </a>
              ) : (
                <span className="text-xs font-mono text-[#0a84ff]/60 whitespace-nowrap">
                  Credential
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section>
        <SectionTitle icon="🧠" delay={0.5}>Soft Skills</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <Chip key={skill} delay={0.5 + index * 0.05}>
              {skill}
            </Chip>
          ))}
        </div>
      </section>

      {/* Language Skills */}
      <section>
        <SectionTitle icon="🌐" delay={0.6}>Language Skills</SectionTitle>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 bg-white/[0.03] rounded-lg border border-white/[0.06] px-4 py-2.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.06 }}
            >
              <span className="text-xs font-mono text-[#bf5af2] sm:w-44 shrink-0">{lang.name}</span>
              <span className="text-sm text-white/70">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
