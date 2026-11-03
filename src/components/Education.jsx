import { motion } from "framer-motion";

// Isi `url` dengan tautan Google Drive masing-masing dokumen.
const details = [
  {
    key: "university",
    value: "Universitas Padjadjaran – Indonesia",
  },
  {
    key: "degree",
    value: "Bachelor of Economics, Majoring in Digital Business",
  },
  {
    key: "faculty",
    value: "Faculty of Economics and Business",
  },
  {
    key: "GPA",
    value: "3.72/4.00",
    link: { label: "Academic transcript", url: "https://drive.google.com/file/d/1HQPSFBZtRljtBmxGnhbewETk-2938Zp0/view?usp=sharing" },
  },
  {
    key: "duration",
    value: "2022 - 2026",
  },
  {
    key: "relevant coursework",
    value:
      "Big Data and Business Analytics, Database System, Business Intelligence, Business Process Analysis, Statistics Analysis, Strategic Management, Start-up Management, Financial Technology Innovation, Finance Management, Introduction to Economics, Design Thinking, Consumer Behavior Analysis, Product Development, Digital Marketing",
  },
  {
    key: "activities",
    value: "Competition Unpadpreneur",
    link: { label: "Report", url: "https://drive.google.com/file/d/1pWIPvd0imJaHL9gQwRmag1sTTn2kltBz/view?usp=sharing" },
  },
];

const DocLink = ({ link }) =>
  link.url ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-3 whitespace-nowrap text-[#0a84ff] hover:underline"
    >
      {link.label} ↗
    </a>
  ) : (
    <span className="ml-3 whitespace-nowrap text-[#0a84ff]/60">
      {link.label} ↗
    </span>
  );

const Education = () => {
  return (
    <div className="py-4">
      {/* Terminal header */}
      <div className="font-mono text-sm mb-6">
        <span className="text-[#28c840]">$</span>
        <span className="text-white/40"> cat ~/education/university.md</span>
      </div>

      {/* Main Education Card */}
      <motion.div
        className="bg-black/20 rounded-lg border border-white/[0.06] p-5 md:p-6 font-mono text-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-white/30 mb-2">{"{"}</div>
        {details.map((item, index) => (
          <motion.div
            key={item.key}
            className="flex flex-wrap items-start pl-6 py-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <span className="text-[#bf5af2] mr-1">"{item.key}"</span>
            <span className="text-white/30 mr-2">:</span>
            <span className="text-[#28c840]">"{item.value}"</span>
            {index < details.length - 1 && (
              <span className="text-white/30">,</span>
            )}
            {item.link && <DocLink link={item.link} />}
          </motion.div>
        ))}
        <div className="text-white/30 mt-2">{"}"}</div>
      </motion.div>
    </div>
  );
};

export default Education;
