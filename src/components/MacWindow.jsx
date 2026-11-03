import { motion } from 'framer-motion'

const MacWindow = ({ title, children }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/[0.08]">
      {/* Title Bar */}
      <div className="bg-[#2a2a2a]/90 backdrop-blur-xl px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>

        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-[13px] text-white/50 font-mono tracking-wide">
            {title}
          </span>
        </div>

        {/* Spacer for centering */}
        <div className="w-[52px]" />
      </div>

      {/* Content Area */}
      <div className="bg-[#1e1e1e]/95 backdrop-blur-xl min-h-[500px] max-h-[70vh] overflow-y-auto p-6 md:p-8">
        {children}
      </div>
    </div>
  )
}

export default MacWindow
