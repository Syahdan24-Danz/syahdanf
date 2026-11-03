import { motion } from "framer-motion";
import imgMe from "../assets/me.jpg";

const Hero = () => {
  const nameText = "Syahdan Firmansyah";

  return (
    <div className="flex flex-col items-center text-center py-8 md:py-12">
      {/* Profile Photo */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-xl shadow-blue-500/10 relative">
          {/* Placeholder avatar - replace with your photo */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
            <span className="text-5xl md:text-6xl">
              <img src={imgMe} alt="" />
            </span>
          </div>
        </div>
        {/* Online indicator */}
        <motion.div
          className="absolute bottom-2 right-2 w-4 h-4 bg-[#28c840] rounded-full border-2 border-[#1e1e1e]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Terminal-style greeting */}
      <motion.div
        className="mb-4 font-mono text-sm text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-[#28c840]">$</span> whoami
      </motion.div>

      {/* Name with typing effect */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {nameText}
      </motion.h1>

      {/* Terminal command output style */}
      <motion.div
        className="mt-8 bg-black/30 rounded-lg p-4 md:p-6 max-w-lg w-full text-left font-mono text-sm border border-white/[0.06]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center gap-2 text-white/30 mb-3">
          <span className="text-[#28c840]">~</span>
          <span>cat about.txt</span>
        </div>
        <p className="text-white/70 leading-relaxed text-[13px]">
          Fresh graduate with a Bachelor's degree in           <span className="text-[#0a84ff]">Digital Business</span>{" "}from
          <span className="text-[#bf5af2]">{" "}Universitas Padjadjaran</span>, focused on applying technology to support business needs and data-driven decision-making. He has experience in digital transformation, data analysis, and website development and deployment. At PT Hidup Gaya Loka Cipta, he was involved in business process mapping to identify opportunities for AI adoption. Holding an AWS Certified Cloud Practitioner certification and equipped with structured problem-solving skills, he aims to contribute to developing cloud solutions that fit business needs and support operational efficiency.
        </p>
        <div className="mt-3 flex items-center gap-2 text-white/30">
          <span className="text-[#28c840]">~</span>
          <span className="animate-cursor-blink">▊</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
