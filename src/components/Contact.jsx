import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const contactLinks = [
  {
    label: 'Email',
    value: 'syahdanfirmansyah79@gmail.com',
    icon: FaEnvelope,
    iconColor: 'text-[#5ac8fa]',
    href: 'mailto:syahdanfirmansyah79@gmail.com',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    label: 'LinkedIn',
    value: '/in/syahdanfirmansyah',
    icon: FaLinkedinIn,
    iconColor: 'text-[#0a66c2]',
    href: 'https://linkedin.com/in/syahdan-firmansyah-651236250/',
    color: 'from-blue-600/20 to-blue-400/20',
  },
  {
    label: 'GitHub',
    value: '@Syahdan24-Danz',
    icon: FaGithub,
    iconColor: 'text-white',
    href: 'https://github.com/Syahdan24-Danz',
    color: 'from-gray-500/20 to-gray-400/20',
  },
  {
    label: 'Instagram',
    value: '@syadnfr',
    icon: FaInstagram,
    iconColor: 'text-[#ff5aa5]',
    href: 'https://instagram.com/syadnfr',
    color: 'from-pink-500/20 to-purple-500/20',
  },
]

const Contact = () => {
  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="font-mono text-sm mb-6">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> open ~/contact/links.md</span>
      </div>

      {/* Message */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
          <span className="text-[#0a84ff]">#</span> Let's Connect
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          I'm always open to new opportunities, collaborations, and conversations. 
          Feel free to reach out through any of the channels below!
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid gap-3 md:grid-cols-2">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith('mailto:')
              ? {}
              : { target: '_blank', rel: 'noopener noreferrer' })}
            className={`bg-gradient-to-r ${link.color} rounded-xl border border-white/[0.06] p-4 flex items-center gap-4 hover:border-white/[0.12] transition-all group cursor-pointer`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/30 border border-white/[0.08] ${link.iconColor}`}
            >
              <link.icon size={22} />
            </span>
            <div>
              <div className="text-white/80 text-sm font-medium group-hover:text-white/95 transition-colors">
                {link.label}
              </div>
              <div className="text-white/35 text-xs font-mono mt-0.5">
                {link.value}
              </div>
            </div>
            <span className="ml-auto text-white/20 group-hover:text-white/40 transition-colors text-sm">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Terminal footer */}
      <motion.div
        className="mt-8 bg-black/20 rounded-lg border border-white/[0.04] p-4 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="text-white/20 mb-2">
          <span className="text-[#28c840]">~</span> echo "Thanks for visiting! 🙏"
        </div>
        <div className="text-white/50">Thanks for visiting! 🙏</div>
        <div className="text-white/15 mt-2 text-[10px]">
          © 2026 Syahdan Firmansyah
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
