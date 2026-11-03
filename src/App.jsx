import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  House,
  GraduationCap,
  BriefcaseBusiness,
  Zap,
  FolderOpen,
  Mail,
} from "lucide-react";
import MacWindow from "./components/MacWindow";
import Dock from "./components/Dock";
import Hero from "./components/Hero";
import Achievement from "./components/Achievement";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import Background from "./assets/bg.webp";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: {
      label: "Home",
      icon: House,
      gradient: "from-[#5ac8fa] to-[#0a84ff]",
      component: <Hero />,
    },
    education: {
      label: "Education",
      icon: GraduationCap,
      gradient: "from-[#ffb340] to-[#ff7a00]",
      component: <Education />,
    },
    work_experience: {
      label: "Work Experience",
      icon: BriefcaseBusiness,
      gradient: "from-[#a2845e] to-[#6d5236]",
      component: <WorkExperience />,
    },
    skills: {
      label: "Skills",
      icon: Zap,
      gradient: "from-[#bf5af2] to-[#6e3bd9]",
      component: <Skills />,
    },
    projects: {
      label: "Projects",
      icon: FolderOpen,
      gradient: "from-[#64d2ff] to-[#1a7bff]",
      component: <Projects />,
    },
    contact: {
      label: "Contact",
      icon: Mail,
      gradient: "from-[#4cd964] to-[#1fa63a]",
      component: <Contact />,
    },
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Background animated blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #0a84ff, transparent 70%)",
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          initial={{ top: "10%", left: "20%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #bf5af2, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          initial={{ top: "50%", right: "10%" }}
        />
      </div>

      {/* Main Mac Window */}
      <motion.div
        className="w-full max-w-5xl z-10"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <MacWindow title={`syahdan@portfolio: ~/${activeSection}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {sections[activeSection].component}
            </motion.div>
          </AnimatePresence>
        </MacWindow>
      </motion.div>

      {/* Dock */}
      <Dock
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;
