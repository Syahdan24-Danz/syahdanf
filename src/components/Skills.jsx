import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Brain,
  ChartColumn,
  CodeXml,
  Languages,
  Users,
} from 'lucide-react'

const technicalSkills = [
  { label: 'Cloud', items: ['Amazon Web Services (AWS)'] },
  { label: 'Languages', items: ['Javascript', 'Python'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'JS', 'React.JS'] },
  { label: 'Backend', items: ['Express.js'] },
  { label: 'Database', items: ['SQL'] },
  { label: 'Tools & Platform', items: ['Git', 'npm', 'REST APIs'] },
]

const dataSkills = [
  { label: 'Data Analytic', items: ['Python', 'Power Query'] },
  { label: 'Data Visualization', items: ['Excel', 'Power BI', 'Table AU'] },
]

const collaborationSkills = [
  { label: 'Microsoft Office Suite', items: ['Word', 'Excel', 'PowerPoint'] },
  { label: 'Collaboration Tools', items: ['Microsoft Teams', 'Zoom', 'Google Meet'] },
  { label: 'Project Management', items: ['Jira', 'Trello'] },
  { label: 'Design Tools', items: ['Canva', 'Figma'] },
]

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/0e0094d8-bd54-401b-a80d-a4e072fcbf04/',
  },
  {
    name: 'AWS Academy Graduate - Generative AI Foundations',
    url: 'https://www.credly.com/badges/0e0094d8-bd54-401b-a80d-a4e072fcbf04/',
  },
  {
    name: 'The Complete 2024 Web Development Bootcamp',
    url: 'https://www.udemy.com/certificate/UC-a9a053ce-c12f-4e44-ac51-0596e27d35fd/',
  },
  {
    name: 'SQL',
    url: 'http://ngulikdata.com/certificates/XECCE8eUgmDx',
  },
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
  { code: 'ID', name: 'Indonesian', level: 'Native Proficiency' },
  {
    code: 'EN',
    name: 'English',
    level: 'Intermediate - Professional Working Proficiency',
  },
]

const getHost = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4 },
})

const Card = ({
  icon: Icon,
  iconBg,
  title,
  subtitle,
  delay = 0,
  className = '',
  children,
}) => (
  <motion.section
    {...fadeUp(delay)}
    className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 md:p-6 ${className}`}
  >
    <div className="mb-4 flex items-center gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[22%] bg-gradient-to-b ${iconBg} shadow-lg shadow-black/30 ring-1 ring-inset ring-white/25`}
      >
        <Icon size={20} className="text-white" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold leading-tight text-white/90">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 font-mono text-[11px] text-white/35">{subtitle}</p>
        )}
      </div>
    </div>
    {children}
  </motion.section>
)

const SkillGroups = ({ groups, chipClass }) => (
  <div className="space-y-3.5">
    {groups.map((group) => (
      <div key={group.label}>
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-white/35">
          {group.label}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {group.items.map((item) => (
            <motion.span
              key={item}
              whileHover={{ y: -2, scale: 1.04 }}
              className={`cursor-default rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${chipClass}`}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    ))}
  </div>
)

const Skills = () => {
  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="mb-6 font-mono text-sm">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> neofetch --skills</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Technical Skills */}
        <Card
          icon={CodeXml}
          iconBg="from-[#bf5af2] to-[#6e3bd9]"
          title="Technical Skills"
          subtitle="Programming and Development"
          delay={0}
          className="md:col-span-2"
        >
          <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {technicalSkills.map((group) => (
              <div key={group.label}>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-white/35">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className={`cursor-default rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                        group.label === 'Cloud'
                          ? 'border-[#ff9900]/30 bg-[#ff9900]/10 text-[#ffb340]'
                          : 'border-[#bf5af2]/25 bg-[#bf5af2]/10 text-[#d9a6ff]'
                      }`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Data Analytics & Visualization */}
        <Card
          icon={ChartColumn}
          iconBg="from-[#64d2ff] to-[#1a7bff]"
          title="Data Analytics & Visualization"
          delay={0.1}
        >
          <SkillGroups
            groups={dataSkills}
            chipClass="border-[#0a84ff]/25 bg-[#0a84ff]/10 text-[#8fd8ff]"
          />
        </Card>

        {/* Collaboration & Productivity */}
        <Card
          icon={Users}
          iconBg="from-[#4cd964] to-[#1fa63a]"
          title="Collaboration & Productivity"
          delay={0.15}
        >
          <SkillGroups
            groups={collaborationSkills}
            chipClass="border-[#28c840]/25 bg-[#28c840]/10 text-[#8be99b]"
          />
        </Card>

        {/* Certification */}
        <Card
          icon={Award}
          iconBg="from-[#ffb340] to-[#ff7a00]"
          title="Certification"
          delay={0.2}
          className="md:col-span-2"
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            {certifications.map((cert, index) => {
              const host = getHost(cert.url)
              return (
                <motion.a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/25 p-3.5 transition-colors hover:border-[#febc2e]/30 hover:bg-black/35"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.06 }}
                  whileHover={{ y: -2 }}
                >
                  <BadgeIcon />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-medium leading-snug text-white/80 group-hover:text-white">
                      {cert.name}
                    </div>
                    <div className="mt-1 flex items-center gap-1 font-mono text-[11px] text-[#5ac8fa]">
                      Credential
                      {host && <span className="text-white/25"> · {host}</span>}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-0.5 shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#febc2e]"
                  />
                </motion.a>
              )
            })}
          </div>
        </Card>

        {/* Soft Skills */}
        <Card
          icon={Brain}
          iconBg="from-[#ff6b9d] to-[#e0245e]"
          title="Soft Skills"
          delay={0.3}
        >
          <div className="flex flex-wrap gap-1.5">
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -2, scale: 1.03 }}
                className="cursor-default rounded-lg border border-[#ff375f]/20 bg-[#ff375f]/10 px-2.5 py-1 text-xs font-medium text-[#ffa3b8] transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Card>

        {/* Language Skills */}
        <Card
          icon={Languages}
          iconBg="from-[#5e5ce6] to-[#3634a3]"
          title="Language Skills"
          delay={0.35}
        >
          <div className="space-y-2.5">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/25 p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#5e5ce6]/15 font-mono text-xs font-bold text-[#a9a7ff] ring-1 ring-[#5e5ce6]/25">
                  {lang.code}
                </span>
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-white/85">
                    {lang.name}
                  </div>
                  <div className="text-xs leading-snug text-white/45">
                    {lang.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

const BadgeIcon = () => (
  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#febc2e]/10 text-[#febc2e] ring-1 ring-[#febc2e]/20">
    <BadgeCheck size={17} />
  </span>
)

export default Skills
