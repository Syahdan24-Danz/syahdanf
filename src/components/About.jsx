import { motion } from 'framer-motion'

const About = () => {
  const details = [
    { key: 'name', value: 'Syahdan Firmansyah', icon: '👤' },
    { key: 'university', value: 'Universitas Padjadjaran', icon: '🏫' },
    { key: 'program', value: 'Digital Business', icon: '💼' },
    { key: 'gpa', value: '3.72 / 4.00', icon: '📊' },
    { key: 'location', value: 'Indonesia', icon: '📍' },
    { key: 'interests', value: 'Tech, Business, Innovation', icon: '💡' },
  ]

  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="font-mono text-sm mb-6">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> cat ~/about/profile.json</span>
      </div>

      {/* JSON-style profile card */}
      

      {/* About paragraph */}
      <motion.div
        className="mt-6 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
          <span className="text-[#0a84ff]">#</span> About Me
        </h3>
        <p className="text-white/60 leading-relaxed text-[14px]">
          I am a driven and ambitious student currently pursuing a degree in Digital Business 
          at Universitas Padjadjaran. With a GPA of 3.72, I have demonstrated my commitment 
          to academic excellence while actively engaging in various extracurricular activities 
          and projects that bridge the gap between technology and business.
        </p>
        <p className="text-white/60 leading-relaxed text-[14px]">
          My passion lies in understanding how digital technologies can transform traditional 
          business models and create innovative solutions for real-world problems. I am 
          constantly learning and exploring new technologies to stay at the forefront of 
          digital innovation.
        </p>
      </motion.div>
    </div>
  )
}

export default About
