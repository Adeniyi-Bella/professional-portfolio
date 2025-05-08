import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Adeniyi Bella</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="https://github.com/Adeniyi-Bella?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            {/* <a href="https://github.com/Adeniyi-Bella?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a> */}
            <a href="/Bella_Adeniyi_CV.pdf" download>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero/About Section */}
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Adeniyi Bella</h1>
                <h2 className="text-xl font-medium text-gray-500 dark:text-gray-400">
                  Software Developer with Civil Engineering background
                </h2>
                <p >
                  I'm a software developer with a background in civil engineering, inspired by my dad, a retired engineer.
                  <br /><br />
                  I switched to tech to solve real construction problems using digital tools, based on challenges I saw firsthand.
                  <br /><br />
                  My journey into software development began in 2019 at TU Munich, where I worked on automating 3D building scans with a research team.
                  <br /><br />
                  At Wolff & Müller, I helped digitize BIM processes, improving team efficiency by 30%.
                  <br /><br />
                  Later, at ISL-Kocher, I contributed to a web app for managing construction projects—mainly on the frontend and cloud side.
                  <br /><br />
                  I've also worked in customer support and operations at Booking.com, Amazon, and VIU Eyewear, building strong communication and problem-solving skills.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#projects">
                  <Button size="lg" className="px-8">
                    {/* <Link href="#projects"> */}
                    View Projects
                    {/* </Link> */}
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="px-8">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/profile-image.webp"
                alt="Alex Morgan - Software Developer"
                className=" object-cover shadow-lg"
                width={600}
                height={600}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My expertise spans across various technologies and domains
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="p-6 border rounded-lg mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <SkillCard title="React.js" level="Intermediate" years="4+ years" />
                  <SkillCard title="Next.js" level="Beginner" years="2+ years" />
                  <SkillCard title="TypeScript" level="Intermediate" years="3+ years" />
                  <SkillCard title="Tailwind CSS" level="Intermediate" years="3+ years" />
                  <SkillCard title="Vue.js" level="Beginner" years="1+ years" />
                  <SkillCard title="Angular" level="Beginner" years="1+ years" />
                  <SkillCard title="CSS/HTML/JS" level="Advanced" years="6+ years" />
                </div>
              </TabsContent>
              <TabsContent value="backend" className="p-6 border rounded-lg mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <SkillCard title="Node.js" level="Intermediate" years="3+ years" />
                  <SkillCard title="Express.js" level="Intermediate" years="3+ years" />
                  <SkillCard title="SpringBoot" level="Beginner" years="2+ years" />
                  <SkillCard title=".Net" level="Beginner" years="2+ years" />
                  <SkillCard title="PostgreSQL" level="Beginner" years="2+ years" />
                  <SkillCard title="MongoDB" level="Intermediate" years="4+ years" />
                  <SkillCard title="REST API Design" level="Intermediate" years="4+ years" />
                </div>
              </TabsContent>

              <TabsContent value="other" className="p-6 border rounded-lg mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <SkillCard title="AWS/Azure" level="Intermediate" years="3+ years" />
                  <SkillCard title="Docker" level="Advanced" years="4+ years" />
                  <SkillCard title="Dev-Ops" level="Beginner" years="2+ years" />
                  <SkillCard title="Git" level="Expert" years="6+ years" />
                  <SkillCard title="Agile/Scrum" level="Beginner" years="2+ years" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A selection of my most impactful work across various domains
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <ProjectCard
              title="Blood Pressure Monitoring App"
              description="For individuals managing high blood pressure, consistent and reliable monitoring is essential—and potentially life-saving. This app pairs with a wearable blood pressure device to provide a seamless way to track and understand your readings over time. After each measurement session, data is manually transferred, stored and visualized through the web app, giving users meaningful insights into their blood pressure trends and helping them take control of their health."
              tags={["Memory card", "USB Plug", "Battery", "AWS Blob Storage", "Sensor", "Band", "Python"]}
              image="/blood-pressure.png?height=200&width=300"
              ready={false}
              github=""
              view=""
            />
            <ProjectCard
              title="Meal Planning App"
              description="Chef-Lecker is an app designed for families to learn how to cook together, making meal preparation an enjoyable and educational experience. I developed this app with a personal motivation: to prepare my wife's favorite foods for her during her pregnancy, ensuring she had the best meals while also creating a bonding experience in the kitchen."
              tags={["next js", "Supabase", "Tailwind"]}
              image="/chef-lecker.png?height=300&width=300"
              ready={true}
              github="https://github.com/Adeniyi-Bella/Chef-Lecker"
              view="https://chef-lecker.vercel.app/"
            />
            <ProjectCard
              title="Construction Project Management App"
              description="As someone with construction background, the importance of having a solution to manage projects, users, rights and roles of what users can do, visualizing the project cannot be underestimated. This app would ensure users have all these listed features and also extended features related to BIM use cases such as project tracking, clash detection, 3D model checking and so on."
              tags={["Three js", "next js", "AWS Blob Storage", "Supabase"]}
              image="/construction.jpg?height=200&width=300"
              ready={false}
              github=""
              view=""
            />
            <ProjectCard
              title="VFR Wiesbaden Fottball Training App"
              description="I play professional amateur football at VFR Wiesbaden and since our Football Coach does not have an application to manage Trainings, I built an Application for the Team."
              tags={["next js", "Supabase", "Tailwind"]}
              image="/vfr.jpg?height=200&width=300"
              ready={true}
              github="https://github.com/Adeniyi-Bella/VFR-Wiesbaden-Training-App"
              view="https://vfr-wiesbaden-training-app.vercel.app/"

            />
            <ProjectCard
              title="Locate Assist AI"
              description="Web-based platform that aims to assist emergency services operators (e.g Red Cross) in locating patients by listening in to live patient calls, extracting keywords from the conversation (places, landmarks, streets), displaying keywords for the operator to select. Operators can choose which keywords are relevant and these are sent to an AI model. Using the selected keywords, a similarity function computes scores on where the patient is most likely located. The scores are sent back to the operator along with their respective grid information. These scores and grids are displayed for the operator to see."
              tags={["Python", "Websocket", "Mapbox", "Twillio", "React"]}
              image="/location-assist.png?height=200&width=300"
              ready={true}
              github="https://github.com/Adeniyi-Bella/geohilfe-product"
            // view={false}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My professional journey and academic background
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <div className="space-y-8">
              <ExperienceCard
                title="IT Specialist"
                company="ISL-Kocher GmbH, Siegen, Germany"
                period="Nov 2023 - Present"
                description="Developing a web application for managing construction projects, focusing on frontend development and cloud integration. Collaborating with cross-functional teams to ensure seamless user experiences and efficient project management."
              />
              <ExperienceCard
                title="Junior Software Developer"
                company="Wolff & Mueller GMbh , Stuttgart, Germany"
                period="Jan 2022 - Oct 2023"
                description="Developed and maintained various web and mobile applications for clients across different industries. Implemented CI/CD pipelines and improved development workflows, reducing deployment time by 40%."
              />
              <ExperienceCard
                title="Research Assistant"
                company="Technical university Munich, TUM, Germany"
                period="Oct 2020 - Oct 2021"
                description="Created responsive and interactive user interfaces for web applications. Collaborated with designers and backend developers to implement features and ensure seamless user experiences."
              />
              <ExperienceCard
                title="MSc in Civil Engineering"
                company="Technical university Munich"
                period="April 2019 - Oct 2022"
                description="Specialized in Software Engineering and Artificial Intelligence. Thesis on 'Optimizing Performance in Large-Scale Web Applications'. GPA: 3.9/4.0"
                isEducation={true}
              />
              {/* <ExperienceCard
                title="BSc in Computer Science"
                company="University of California, Berkeley"
                period="2009 - 2013"
                description="Focused on Programming Languages and Web Development. Participated in multiple hackathons and coding competitions. GPA: 3.8/4.0"
                isEducation={true}
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recommendations</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What past colleagues say about my work
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <TestimonialCard
              quote="Adeniyi is a good team player. I worked with him on a daily basis and I learnt a lot from him on how to apply best practices in software development."
              author="Valentin Zwerger"
              position="BIM Manager/ Product owner at Wolff and Mueller"
            />
            <TestimonialCard
              quote="Adeniyi was very important for our team. His ability to solve complex problems with his coding skills really improved the teams productivity."
              author="Christian Hänsele"
              position="Teamleader Digitilization at Wolff and Mueller"
            />
            <TestimonialCard
              quote="Adeniyi is a very honest and down to earth person. His software skills combined with his background in construction helped us to improve the quality of our AI."
              author="Dr Krishna Sridhar"
              position="Ex CTO at Conxai GmBh"
            />
            {/* <TestimonialCard
              quote="I've worked with many developers, but Alex stands out for their technical expertise and communication skills. They can explain complex concepts clearly and work effectively with non-technical stakeholders."
              author="Dr. Emily Wilson"
              position="Product Owner, HealthTech Innovations"
            />
            <TestimonialCard
              quote="Alex consistently exceeded our expectations. Their ability to understand business requirements and translate them into technical solutions is remarkable."
              author="James Thompson"
              position="CEO, FinTech Solutions"
            />
            <TestimonialCard
              quote="As a mentor, Alex has been instrumental in my growth as a developer. Their patience, knowledge, and willingness to share expertise have helped me advance my career significantly."
              author="Lisa Rodriguez"
              position="Junior Developer, TechInnovate Solutions"
            /> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>
              </div>
              <div className="space-y-4 max-w-md">
                <div className="grid grid-cols-1 gap-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Email Address"
                    type="email"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                    type="text"
                  />
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">adeniyibella@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-3">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">linkedin.com/in/adeniyi-bella</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-3">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">github.com/Adeniyi-Bella</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="font-medium mb-2">Current Status</h3>
                  <div className="space-y-2">
                    {/* <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Available for freelance work</span>
                    </div> */}
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span>Open to part-time opportunities from February 2026</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                      <span>Interested in speaking engagements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Adeniyi Bella. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, level, years }: { title: string; level: string; years: string }) {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{years}</p>
      </div>
      <Badge variant={level === "Expert" ? "default" : level === "Advanced" ? "secondary" : "outline"}>{level}</Badge>
    </div>
  )
}

function ProjectCard({ title, description, tags, image, ready, view, github }: { title: string; description: string; tags: string[]; image: string; ready: boolean; view?: string; github?: string }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full object-cover h-50"
          width={300}
          height={200}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base mb-4 text-justify">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {ready ? (
        <CardFooter className="border-t pt-4 pb-4 flex gap-4">
          {view &&
            <a className="w-full" href={view} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Project
              </Button>
            </a>
          }
          {github &&
            <a className="w-full" href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Github
              </Button>
            </a>
          }
        </CardFooter>
      ) : (
        <CardFooter className="border-t pt-4 pb-4">
          <Button variant="outline" className="w-full" disabled>
            {/* <ExternalLink className="h-4 w-4 mr-2" /> */}
            Coming Soon
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

function ExperienceCard({ title, company, period, description, isEducation = false }: { title: string; company: string; period: string; description: string; isEducation?: boolean }) {
  return (
    <div className="flex gap-4 p-4 border rounded-lg">
      <div className="hidden sm:flex flex-col items-center">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          {isEducation ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          )}
        </div>
        <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-700 my-2"></div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <Badge variant="outline" className="mt-1 sm:mt-0 self-start sm:self-auto">
            {period}
          </Badge>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{company}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, position }: { quote: string; author: string; position: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">"{quote}"</p>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
