import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'Dean\'s List',
    description: 'Achieved Dean\'s List recognition for outstanding academic performance with a GPA of 3.72.',
    year: '2024',
    icon: '🎖️',
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/15',
  },
  {
    title: 'Academic Excellence',
    description: 'Maintained a GPA of 3.72/4.00 throughout the Digital Business program at Universitas Padjadjaran.',
    year: '2023-Present',
    icon: '📚',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/15',
  },
  {
    title: 'Digital Innovation Project',
    description: 'Led a team project focused on digital transformation strategy for local businesses.',
    year: '2024',
    icon: '🚀',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/15',
  },
  {
    title: 'Community Contributor',
    description: 'Active participant in university tech community and digital business workshops.',
    year: '2023-Present',
    icon: '🤝',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/15',
  },
]

const Achievement = () => {
  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="font-mono text-sm mb-6">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> ls ~/achievements/</span>
      </div>

      <div className="grid gap-4">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            className={`bg-gradient-to-r ${item.color} rounded-lg border ${item.border} p-4 md:p-5 cursor-default`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white/90 text-[15px]">{item.title}</h3>
                  <span className="text-xs font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div
        className="mt-4 font-mono text-xs text-white/20 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-[#febc2e]">ℹ</span>
        <span>More achievements to be updated...</span>
      </motion.div>
    </div>
  )
}

export default Achievement
