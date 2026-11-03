import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Efek magnifikasi ala macOS: item yang di-hover paling besar,
// tetangganya ikut membesar sesuai jarak.
const getScale = (index, hoveredIndex) => {
  if (hoveredIndex === null) return 1
  const distance = Math.abs(index - hoveredIndex)
  if (distance === 0) return 1.55
  if (distance === 1) return 1.25
  if (distance === 2) return 1.08
  return 1
}

const Dock = ({ sections, activeSection, setActiveSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const entries = Object.entries(sections)

  return (
    <motion.div
      className="mt-6 z-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div
        className="bg-white/[0.12] backdrop-blur-2xl rounded-[22px] px-2.5 pt-2 pb-1.5 flex items-end gap-1.5 border border-white/20 shadow-2xl shadow-black/40 ring-1 ring-black/20"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {entries.map(([key, section], index) => {
          const isActive = activeSection === key
          const isHovered = hoveredIndex === index
          const Icon = section.icon

          return (
            <motion.button
              key={key}
              type="button"
              aria-label={section.label}
              className="relative flex flex-col items-center outline-none"
              onClick={() => setActiveSection(key)}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              whileTap={{ scale: 0.88 }}
            >
              {/* Tooltip ala macOS */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute -top-[4.25rem] whitespace-nowrap rounded-lg border border-white/15 bg-[#2a2a2a]/90 px-3 py-1 text-xs font-medium text-white/90 shadow-lg shadow-black/30 backdrop-blur-xl pointer-events-none"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                  >
                    {section.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* App icon (squircle) */}
              <motion.div
                className={`relative flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-[22%] bg-gradient-to-b ${section.gradient} shadow-lg shadow-black/30 ring-1 ring-inset ring-white/25 origin-bottom`}
                animate={{ scale: getScale(index, hoveredIndex) }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                {/* Glossy highlight */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[22%] bg-gradient-to-b from-white/30 to-transparent" />
                <Icon
                  className="relative text-white drop-shadow-sm"
                  size={24}
                  strokeWidth={2}
                />
              </motion.div>

              {/* Indikator app yang sedang aktif */}
              <div className="mt-1.5 h-1 w-1">
                {isActive && (
                  <motion.div
                    className="h-1 w-1 rounded-full bg-white/80"
                    layoutId="dockIndicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Dock
