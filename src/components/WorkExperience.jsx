
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Isi `url` dengan tautan Credential / Report masing-masing pengalaman.
const experiences = [
  {
    id: 1,
    position: "IT and Digital Transformation",
    company: "PT. Hidup Gaya Lokacipta",
    type: "Full-time",
    highlights: [
      "To evaluate why website transactions weren’t converting, I analyzed 921 customer accounts and 721 Q3 transactions, finding 408 abandoned (57%) versus 313 completed orders (43%), which gave the team a data-based starting point for improving the checkout process.",
      "To help the company identify where AI could be adopted, I am conducting cross-departmental interviews to map operational challenges and repetitive tasks, laying the groundwork for prioritizing AI use cases.",
    ],
  },
  {
    id: 2,
    position: "IT and Data Intern",
    company: "PT. Hidup Gaya Lokacipta",
    type: "Intern",
    link: { label: "Credential", url: "https://drive.google.com/file/d/1us329t6kPT1Ucj9171qlpJ8AK4rEdDfi/view?usp=sharing" },
    highlights: [
      "Analyzed and improved the customer membership data flow across two retail outlets to ensure better data structure, integration, and consistency, addressing gaps in key customer information (phone number, email, and date of birth).",
      "Conducted data cleaning and validation to identify incomplete customer records, producing actionable insights on data quality issues, including 191 members without phone numbers, 1,034 without emails, and 1,569 without birth dates, as a basis for customer engagement improvement.",
      "Developed data-driven reports summarizing total registered members (6,259 customers) and membership card distribution (5,919 cards) to support internal decision-making related to customer data management.",
      "Supported the enhancement of the order management and tracking system, enabling customers to clearly view order status (e.g., unpaid, paid, shipped, completed) and track deliveries, improving transparency and customer trust in the company’s digital platform.",
      "Contributed to customer engagement strategy development by recommending targeted follow-up initiatives for members with incomplete data and for retail locations with lower membership penetration.",
    ],
  },
  {
    id: 3,
    position: "Project Manager – Social Mapping",
    company: "PT Star Energy Geothermal WW",
    link: { label: "Report", url: "https://drive.google.com/file/d/1qxyS5jAlHJ64NZqIXg878HxZRg_OZWtI/view?usp=sharing" },
    highlights: [
      "Led a cross-functional team to conduct social and stakeholder mapping in Pangalengan, collecting qualitative and quantitative data on social, economic, and cultural conditions to support community-based program planning.",
      "Engaged with local leaders, community representatives, and key stakeholders through interviews and Focus Group Discussions (FGDs) to identify core challenges, needs, and development opportunities.",
      "Developed a stakeholder relationship flow and analytical report outlining community dynamics, potential risks, and priority areas, providing a structured foundation for designing targeted and impactful CSR initiatives aligned with local needs.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative w-full"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-[#28c840]" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative pl-10"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 z-10 h-[15px] w-[15px] rounded-full border-[3px] border-[#bf5af2] bg-neutral-900 ring-1 ring-neutral-900 transition-all duration-300" />

                {/* Experience Content */}
                <div className="rounded-2xl bg-[#171718] p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">

                  {/* Top Information */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold tracking-tight text-[#bf5af2] md:text-xl">
                          {experience.position}
                        </h3>

                        {experience.type && (
                          <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/60 ring-1 ring-white/10">
                            {experience.type}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="font-medium text-white/30">
                          {experience.company}
                        </span>
                      </div>
                    </div>

                    {/* Credential / Report */}
                    {experience.link &&
                      (experience.link.url ? (
                        <a
                          href={experience.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-mono text-[#0a84ff] hover:underline md:text-sm"
                        >
                          {experience.link.label}
                          <ArrowUpRight size={15} strokeWidth={1.5} />
                        </a>
                      ) : (
                        <span className="whitespace-nowrap text-xs font-mono text-[#0a84ff]/60 md:text-sm">
                          {experience.link.label}
                        </span>
                      ))}
                  </div>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-7 text-[#28c840]"
                      >
                        <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#28c840]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
