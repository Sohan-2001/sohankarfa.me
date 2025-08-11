
const experienceData = [
  {
    date: "February 2025 – Present",
    title: "Software Engineer — Accenture",
    company: "Position: SAP ABAP Developer",
    description: "Develop and enhance SAP ABAP programs, reports, and interfaces. Collaborate with functional teams to deliver business process improvements and ensure seamless integration with other systems.",
  },
  {
    date: "June 2025 – Present",
    title: "Part-Time Full-Stack Web Developer — Truelancer.com",
    company: "Freelance",
    description: "Freelance development of scalable web applications using modern frameworks. Handle both frontend and backend tasks, ensuring high performance and user-friendly experiences for various client projects.",
  },
  {
    date: "July 2025 – Present",
    title: "LLM Evaluator — SOUL Company",
    company: "AI Model Quality",
    description: "Evaluate and test large language model outputs for quality, relevance, and accuracy. Provide structured feedback to improve AI model performance.",
  },
];

const educationData = [
  {
    date: "2021 - 2025",
    title: "Bachelor of Technology in Computer Science Engineering",
    institution: "Lovely Professional University",
    description: "Graduated with honors. Focused on software development, algorithms, and data structures.",
  },
];

const TimelineItem = ({ data }: { data: { date: string; title: string; company?: string; institution?: string; description: string } }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="flex items-center mb-1">
      <div className="absolute left-0 sm:left-4 z-10 w-4 h-4 bg-primary rounded-full group-hover:bg-primary/80 transition-colors duration-300"></div>
      <h3 className="text-lg font-semibold">{data.title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{data.date} - {data.company || data.institution}</p>
    <p className="mt-2 text-foreground/80">{data.description}</p>
  </div>
);

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Experience &amp; Education</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Work Experience</h3>
            <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-6">
              {experienceData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Education</h3>
            <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-6">
              {educationData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
