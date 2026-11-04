import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  Cloud,
  ChartColumn,
  Compass,
  Sprout,
  Star,
} from 'lucide-react'

const projects = [
  {
    title: 'AWS Cloud Infrastructure & Web Deployment',
    category: 'Cloud',
    role: 'Academy Lab',
    icon: Cloud,
    featured: true,
    iconBg: 'from-[#ffb340] to-[#ff7a00]',
    accent: 'from-[#ff9900]/[0.14] to-[#ff9900]/[0.03]',
    border: 'border-[#ff9900]/25',
    text: 'text-[#ffb340]',
    dot: 'bg-[#ff9900]',
    keywords: ['Cloud Computing', 'Amazon EC2', 'Nginx', 'Documentation'],
    stats: [
      { value: '8/8', label: 'tests passed' },
      { value: '9.27%', label: 'peak CPU' },
      { value: '$11.88', label: 'est. / month' },
    ],
    link: {
      label: 'Documentation',
      url: 'https://github.com/Syahdan24-Danz/syahdanf',
    },
    highlights: [
      'Deployed a React 18 + Vite portfolio website as a Proof of Concept (PoC) on Amazon EC2 (t3.micro, Amazon Linux 2023) served by Nginx, with EBS gp3 storage, a VPC public subnet, an Internet Gateway, and a Security Group (HTTP open, SSH restricted).',
      'Tested the deployment with 8 functional scenarios (8/8 passed) and analyzed resource utilization through Amazon CloudWatch and Linux checks: CPU peaked at 9.27% during build and stayed below 1% at normal load, memory used 198 MiB of 913 MiB, disk 30%.',
      'Performed cloud cost analysis (≈$11.88/month for 24/7 operation, ≈$1.87 for 80 lab hours) and compared AWS with Tencent Cloud using public pricing.',
      'Wrote technical documentation covering architecture, deployment guide, testing, monitoring, and cost analysis (7 documents with architecture diagram and screenshots).',
    ],
  },
  {
    title: 'PT Artha Kartika Putera',
    category: 'Data',
    role: 'Data Analyst',
    period: 'September 2023 - December 2023',
    icon: ChartColumn,
    iconBg: 'from-[#64d2ff] to-[#1a7bff]',
    accent: 'from-[#0a84ff]/[0.14] to-[#5ac8fa]/[0.03]',
    border: 'border-[#0a84ff]/20',
    text: 'text-[#5ac8fa]',
    dot: 'bg-[#0a84ff]',
    keywords: ['Sales Analysis', 'Demand Forecasting', 'Cash Flow'],
    stats: [
      { value: '37%', label: 'chose 60-day terms' },
      { value: '4 wks', label: 'demand forecast' },
      { value: '3.5M', label: 'peak units' },
    ],
    link: {
      label: 'Report',
      url: 'https://drive.google.com/file/d/1NoWG9RhBAMps1JEbQlaqpxFJjW68JVcn/view?usp=sharing',
    },
    highlights: [
      'Analyzed sales and demand trends to identify key performance drivers and patterns affecting business operations and revenue stability. Performed descriptive analysis showing that 37% of customers chose 60-day payment terms, highlighting potential cash flow risks.',
      'Supported demand forecasting for the next four weeks to anticipate order volume fluctuations, with peak demand projected at 3.5 million units in mid-November.',
      'Delivered insights and recommendations on cash flow projections, inventory management challenges, and payment behavior trends, supporting management in making more informed operational and financial decisions.',
    ],
  },
  {
    title: 'GOTO',
    category: 'Strategy',
    role: 'Management Strategic',
    period: 'February 2024 - July 2024',
    icon: Compass,
    iconBg: 'from-[#4cd964] to-[#1fa63a]',
    accent: 'from-[#28c840]/[0.14] to-[#28c840]/[0.03]',
    border: 'border-[#28c840]/20',
    text: 'text-[#4cd964]',
    dot: 'bg-[#28c840]',
    keywords: ['PESTEL', 'SWOT', 'Value Chain', 'Financial Ratios'],
    stats: [
      { value: '40', label: 'cross-strategies' },
      { value: '5', label: 'strategy programs' },
      { value: '3', label: 'implementation plans' },
    ],
    link: {
      label: 'Report',
      url: 'https://drive.google.com/file/d/1mT12KREv-soPSYEdUZXf9AWOhwAKVUm8/view?usp=sharing',
    },
    highlights: [
      'Analyzed GoTo’s external environment using PESTEL and industry benchmarking against Grab and Bluebird, and assessed internal conditions through value chain and financial ratio analysis (liquidity, solvency, activity, profitability, market value).',
      'Built a SWOT matrix with 40 cross-strategies (10 each for SO, WO, ST, WT) and narrowed them down to 5 strategy programs: product development, market penetration, technological development, operational efficiency, and market development.',
      'Developed three implementation plans with objectives, timelines, budgets, and KPIs: small-balance GoPay investment (Rp1.15 billion, 3.5 months), GoAmbulance (Rp1.10 billion, 4 months), and Tokopedia’s own delivery service (Rp4.65 billion, 4 months).',
      'Delivered an end-to-end strategic plan, from analysis to implementation, with measurable KPIs: 300,000 GoPay Invest users within 6 months, 500,000 investment transactions per month, ambulance response time under 10 minutes, 10% lower delivery costs, and 15% faster delivery.',
    ],
  },
  {
    title: 'FarmTrade',
    category: 'Product',
    role: 'Product Development',
    subtitle: 'Scrum framework',
    period: 'September 2024 - December 2024',
    icon: Sprout,
    iconBg: 'from-[#bf5af2] to-[#6e3bd9]',
    accent: 'from-[#bf5af2]/[0.14] to-[#ff375f]/[0.03]',
    border: 'border-[#bf5af2]/20',
    text: 'text-[#d38bff]',
    dot: 'bg-[#bf5af2]',
    keywords: ['User Stories', 'Product Backlog', 'Value Hypotheses'],
    stats: [
      { value: '14', label: 'user stories' },
      { value: '7', label: 'core features' },
      { value: '3', label: 'value hypotheses' },
    ],
    link: {
      label: 'Report',
      url: 'https://drive.google.com/file/d/1lfYzWAFGgeGDXPjlN39iN8T0Myinw0YF/view?usp=sharing',
    },
    highlights: [
      'Translated the problem into clear product requirements for two core user groups: collectors and buyers.',
      'Wrote 14 user stories (7 per user group) with Given-When-Then acceptance criteria, covering 7 core features: product upload, search and categories, price negotiation, ordering and payment, delivery management, customer support, and ratings and reviews.',
      'Built a priority matrix across scope, quality, time, cost, and resource (scope as most critical, cost as most flexible) and drafted three Value Hypotheses covering collectors, business buyers, and collectors as partners.',
      'Delivered a structured backlog ready for design and development, with measurable response targets: negotiation and collector support within 24 hours, and 24/7 support for buyers.',
    ],
  },
]

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(Boolean(project.featured))
  const Icon = project.icon

  return (
    <motion.article
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${project.accent} ${project.border}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.4 }}
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[22%] bg-gradient-to-b ${project.iconBg} shadow-lg shadow-black/30 ring-1 ring-inset ring-white/25`}
          >
            <Icon size={24} className="text-white" strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full bg-black/25 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ring-white/10 ${project.text}`}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#febc2e]/10 px-2 py-0.5 font-mono text-[10px] text-[#febc2e] ring-1 ring-[#febc2e]/20">
                  <Star size={10} fill="currentColor" /> Featured
                </span>
              )}
              {project.period && (
                <span className="font-mono text-[11px] text-white/30">
                  {project.period}
                </span>
              )}
            </div>

            <h3 className="mt-1.5 text-base font-semibold leading-snug text-white/90 md:text-lg">
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm text-white/50">
              {project.role}
              {project.subtitle && (
                <span className="text-white/30"> · {project.subtitle}</span>
              )}
            </p>
          </div>

          {project.link.url && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1 rounded-full border border-[#0a84ff]/25 bg-[#0a84ff]/10 px-3 py-1.5 font-mono text-xs text-[#5ac8fa] transition-colors hover:bg-[#0a84ff]/20 sm:inline-flex"
            >
              {project.link.label}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          )}
        </div>

        {/* Key numbers */}
        <div className="mt-5 grid grid-cols-3 gap-2 md:gap-3">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.06] bg-black/25 px-3 py-2.5 text-center"
            >
              <div className={`text-lg font-bold leading-none md:text-xl ${project.text}`}>
                {stat.value}
              </div>
              <div className="mt-1.5 text-[10px] leading-tight text-white/40 md:text-[11px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-md border border-white/[0.06] bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/50"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Details */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="space-y-2.5 border-t border-white/[0.06] pt-4 mt-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-[13px] leading-relaxed text-white/60"
                  >
                    <span
                      className={`mt-[9px] h-1 w-1 shrink-0 rounded-full ${project.dot}`}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer actions */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 rounded-lg px-1 py-1 text-xs font-medium text-white/50 transition-colors hover:text-white/80"
          >
            {open ? 'Hide details' : 'View details'}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>

          {project.link.url && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#0a84ff]/25 bg-[#0a84ff]/10 px-3 py-1.5 font-mono text-xs text-[#5ac8fa] transition-colors hover:bg-[#0a84ff]/20 sm:hidden"
            >
              {project.link.label}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="mb-6 font-mono text-sm">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> ls ~/projects/ -la</span>
        <span className="ml-3 text-[11px] text-white/20">
          {projects.length} items
        </span>
      </div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
