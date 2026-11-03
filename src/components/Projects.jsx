import { motion } from 'framer-motion'

// Isi `report.url` dengan tautan Report masing-masing project.
const projects = [
  {
    title: 'PT Artha Kartika Putera',
    role: 'Data Analyst',
    period: 'September 2023 - December 2023',
    icon: '📈',
    accent: 'from-[#0a84ff]/20 to-[#5ac8fa]/10',
    border: 'border-[#0a84ff]/20',
    dot: 'bg-[#0a84ff]',
    keywords: ['Sales Analysis', 'Demand Forecasting', 'Cash Flow'],
    report: { label: 'Report', url: 'https://drive.google.com/file/d/1NoWG9RhBAMps1JEbQlaqpxFJjW68JVcn/view?usp=sharing' },
    highlights: [
      'Analyzed sales and demand trends to identify key performance drivers and patterns affecting business operations and revenue stability. Performed descriptive analysis showing that 37% of customers chose 60-day payment terms, highlighting potential cash flow risks.',
      'Supported demand forecasting for the next four weeks to anticipate order volume fluctuations, with peak demand projected at 3.5 million units in mid-November.',
      'Delivered insights and recommendations on cash flow projections, inventory management challenges, and payment behavior trends, supporting management in making more informed operational and financial decisions.',
    ],
  },
  {
    title: 'GOTO',
    role: 'Management Strategic',
    period: 'February 2024 - July 2024',
    icon: '🧭',
    accent: 'from-[#28c840]/20 to-[#28c840]/5',
    border: 'border-[#28c840]/20',
    dot: 'bg-[#28c840]',
    keywords: ['PESTEL', 'SWOT', 'Value Chain', 'Financial Ratios'],
    report: { label: 'Report', url: 'https://drive.google.com/file/d/1mT12KREv-soPSYEdUZXf9AWOhwAKVUm8/view?usp=sharing' },
    highlights: [
      'Analyzed GoTo’s external environment using PESTEL and industry benchmarking against Grab and Bluebird, and assessed internal conditions through value chain and financial ratio analysis (liquidity, solvency, activity, profitability, market value).',
      'Built a SWOT matrix with 40 cross-strategies (10 each for SO, WO, ST, WT) and narrowed them down to 5 strategy programs: product development, market penetration, technological development, operational efficiency, and market development.',
      'Developed three implementation plans with objectives, timelines, budgets, and KPIs: small-balance GoPay investment (Rp1.15 billion, 3.5 months), GoAmbulance (Rp1.10 billion, 4 months), and Tokopedia’s own delivery service (Rp4.65 billion, 4 months).',
      'Delivered an end-to-end strategic plan, from analysis to implementation, with measurable KPIs: 300,000 GoPay Invest users within 6 months, 500,000 investment transactions per month, ambulance response time under 10 minutes, 10% lower delivery costs, and 15% faster delivery.',
    ],
  },
  {
    title: 'FarmTrade',
    role: 'Product Development',
    subtitle: 'Scrum framework',
    period: 'September 2024 - December 2024',
    icon: '🌾',
    accent: 'from-[#bf5af2]/20 to-[#ff375f]/10',
    border: 'border-[#bf5af2]/20',
    dot: 'bg-[#bf5af2]',
    keywords: ['User Stories', 'Product Backlog', 'Value Hypotheses'],
    report: { label: 'Report', url: 'https://drive.google.com/file/d/1lfYzWAFGgeGDXPjlN39iN8T0Myinw0YF/view?usp=sharing' },
    highlights: [
      'Translated the problem into clear product requirements for two core user groups: collectors and buyers.',
      'Wrote 14 user stories (7 per user group) with Given-When-Then acceptance criteria, covering 7 core features: product upload, search and categories, price negotiation, ordering and payment, delivery management, customer support, and ratings and reviews.',
      'Built a priority matrix across scope, quality, time, cost, and resource (scope as most critical, cost as most flexible) and drafted three Value Hypotheses covering collectors, business buyers, and collectors as partners.',
      'Delivered a structured backlog ready for design and development, with measurable response targets: negotiation and collector support within 24 hours, and 24/7 support for buyers.',
    ],
  },
]

const Projects = () => {
  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="font-mono text-sm mb-6">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> ls ~/projects/ -la</span>
      </div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`bg-gradient-to-br ${project.accent} rounded-2xl border ${project.border} p-5 md:p-6 group`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              <span className="text-3xl leading-none mt-0.5">{project.icon}</span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white/90">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 mt-0.5">
                      {project.role}
                      {project.subtitle && (
                        <span className="text-white/30"> · {project.subtitle}</span>
                      )}
                    </p>
                  </div>

                  {project.report.url ? (
                    <a
                      href={project.report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#0a84ff] bg-[#0a84ff]/10 border border-[#0a84ff]/20 px-2.5 py-1 rounded-full hover:bg-[#0a84ff]/20 transition-colors"
                    >
                      {project.report.label} ↗
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#0a84ff]/60 bg-[#0a84ff]/5 border border-[#0a84ff]/10 px-2.5 py-1 rounded-full">
                      {project.report.label} ↗
                    </span>
                  )}
                </div>

                <p className="text-[11px] font-mono text-white/30 mt-2">
                  {project.period}
                </p>
              </div>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/50 font-mono border border-white/[0.06]"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-4 space-y-2.5">
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
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Projects
