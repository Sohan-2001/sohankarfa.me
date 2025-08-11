const experienceData = [
  {
    date: "2021 - Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    description: "Led development of scalable web applications, mentored junior developers, and implemented new features to improve user experience and system performance.",
  },
  {
    date: "2018 - 2021",
    title: "Software Engineer",
    company: "Innovate Co.",
    description: "Developed and maintained full-stack applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.",
  },
];

const educationData = [
  {
    date: "2014 - 2018",
    title: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    description: "Graduated with honors. Focused on software development, algorithms, and data structures.",
  },
];

const TimelineItem = ({ data }: { data: { date: string; title: string; company?: string; institution?: string; description: string } }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="flex items-center mb-1">
      <div className="absolute left-0 sm:left-4 z-10 w-4 h-4 bg-primary rounded-full group-hover:bg-secondary transition-colors duration-300"></div>
      <h3 className="text-lg font-semibold">{data.title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{data.date} - {data.company || data.institution}</p>
    <p className="mt-2 text-foreground/80">{data.description}</p>
  </div>
);

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-secondary/50">
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
