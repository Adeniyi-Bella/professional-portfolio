import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {

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
                        <Link href="#about" className="transition-colors hover:text-foreground/80">Über mich</Link>
                        <Link href="#skills" className="transition-colors hover:text-foreground/80">Fähigkeiten</Link>
                        <Link href="#projects" className="transition-colors hover:text-foreground/80">Projekte</Link>
                        <Link href="#experience" className="transition-colors hover:text-foreground/80">Erfahrung</Link>
                        <Link href="#contact" className="transition-colors hover:text-foreground/80">Kontakt</Link>
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
                        <a href="/Bella_Adeniyi_Lebenslauf.pdf" download>
                            <Button>
                                <Download className="h-4 w-4 mr-2" />
                                Lebenslauf herunterladen
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
                                    Softwareentwickler mit Bauingenieurwesen-Hintergrund</h2>
                                <p >
                                    Ich bin Softwareentwickler mit einem Hintergrund im Bauingenieurwesen, inspiriert von meinem Vater, einem pensionierten Ingenieur.
                                    <br /><br />
                                    Ich habe in die Tech-Branche gewechselt, um reale Bauprobleme mit digitalen Werkzeugen zu lösen – basierend auf Herausforderungen, die ich aus erster Hand erlebt habe.
                                    <br /><br />
                                    Mein Weg in die Softwareentwicklung begann 2019 an der TU München, wo ich mit einem Forschungsteam an der Automatisierung von 3D-Gebäudescans arbeitete.
                                    <br /><br />
                                    Bei Wolff & Müller habe ich geholfen, BIM-Prozesse zu digitalisieren und die Effizienz des Teams um 30 % zu steigern.
                                    <br /><br />
                                    Später bei ISL-Kocher habe ich an einer Web-App zur Verwaltung von Bauprojekten mitgearbeitet – hauptsächlich im Frontend und in der Cloud.
                                    <br /><br />
                                    Außerdem habe ich im Kundensupport und in der Betriebsabteilung bei Booking.com, Amazon und VIU Eyewear gearbeitet, was meine Kommunikations- und Problemlösungsfähigkeiten geschärft hat.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <a href="#projects">
                                    <Button size="lg" className="px-8">
                                        {/* <Link href="#projects"> */}
                                        Projekte ansehen
                                        {/* </Link> */}
                                    </Button>
                                </a>
                                <a href="#contact">
                                    <Button size="lg" variant="outline" className="px-8">
                                        Kontakt aufnehmen
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technische Fähigkeiten</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Meine Expertise erstreckt sich über verschiedene Technologien und Bereiche
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ausgewählte Projekte</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Eine Auswahl meiner wirkungsvollsten Arbeiten aus verschiedenen Bereichen
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        <ProjectCard
                            title="Blutdrucküberwachungs-App"
                            description="Für Menschen mit Bluthochdruck ist eine konsistente und zuverlässige Überwachung entscheidend – und potenziell lebensrettend. Diese App arbeitet mit einem tragbaren Blutdruckgerät zusammen und bietet eine nahtlose Möglichkeit, Messwerte zu verfolgen. Die Daten werden manuell übertragen und visuell aufbereitet."
                            tags={["Memory card", "USB Plug", "Battery", "AWS Blob Storage", "Sensor", "Band", "Python"]}
                            image="/blood-pressure.png?height=200&width=300"
                            ready={false}
                            github=""
                            view=""
                        />
                        <ProjectCard
                            title="Meal Planning App"
                            description="Chef-Lecker ist eine App für Familien, um gemeinsam Kochen zu lernen. Ich habe diese App entwickelt, um meiner Frau während der Schwangerschaft ihre Lieblingsgerichte zuzubereiten und gleichzeitig gemeinsame Zeit in der Küche zu genießen."
                            tags={["next js", "Supabase", "Tailwind"]}
                            image="/chef-lecker.png?height=300&width=300"
                            ready={true}
                            github="https://github.com/Adeniyi-Bella/Chef-Lecker"
                            view="https://chef-lecker.vercel.app/"
                        />
                        <ProjectCard
                            title="Bauprojektmanagement-App"
                            description="Diese App bietet Funktionen wie Projektverwaltung, Benutzerrechte, Visualisierung und BIM-Funktionen wie Kollisionsprüfung, 3D-Modelle, etc."
                            tags={["Three js", "next js", "AWS Blob Storage", "Supabase"]}
                            image="/construction.jpg?height=200&width=300"
                            ready={false}
                            github=""
                            view=""
                        />
                        <ProjectCard
                            title="VFR Wiesbaden Fottball Training App"
                            description="Ich spiele Amateurfußball bei VFR Wiesbaden. Da unser Trainer keine App zur Verwaltung der Trainings hatte, habe ich eine dafür gebaut."
                            tags={["next js", "Supabase", "Tailwind"]}
                            image="/vfr.jpg?height=200&width=300"
                            ready={true}
                            github="https://github.com/Adeniyi-Bella/VFR-Wiesbaden-Training-App"
                            view="https://vfr-wiesbaden-training-app.vercel.app/"

                        />
                        <ProjectCard
                            title="Locate Assist AI"
                            description="Web-Plattform zur Unterstützung von Rettungsdiensten bei der Lokalisierung von Patienten durch Auswertung von Schlüsselwörtern in Telefongesprächen."
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Erfahrung & Ausbildung</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Mein beruflicher Werdegang und akademischer Hintergrund
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-3xl mt-12">
                        <div className="space-y-8">
                            <ExperienceCard
                                title="IT Spezialist"
                                company="ISL-Kocher GmbH, Siegen, Deutschland"
                                period="Nov 2023 - Aktuelle"
                                description="Entwicklung einer Web-App zur Projektverwaltung mit Fokus auf Frontend und Cloud-Integration."
                            />
                            <ExperienceCard
                                title="Junior Softwareentwickler"
                                company="Wolff & Mueller GMbh , Stuttgart, Deutschland"
                                period="Jan 2022 - Okt 2023"
                                description="Entwicklung von Web- und Mobile-Anwendungen. Einführung von CI/CD-Pipelines zur Verbesserung der Deployments."
                            />
                            <ExperienceCard
                                title="Wissenschaftlicher Mitarbeiter"
                                company="Technische Universität München (TUM), Deutschland"
                                period="Okt 2020 - Okt 2021"
                                description="Erstellung responsiver Benutzeroberflächen in Zusammenarbeit mit Designern und Backend-Entwicklern."
                            />
                            <ExperienceCard
                                title="M.Sc. Bauingenieurwesen"
                                company="Technische Universität München"
                                period="April 2019 - Okt 2022"
                                description="Spezialisierung auf Software Engineering und KI. Abschlussarbeit: 'Optimierung der Leistung von Webanwendungen'. Note: 1.1"
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Empfehlungen</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Was frühere Kollegen über meine Arbeit sagen
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        <TestimonialCard
                            quote="Adeniyi ist ein guter Teamplayer. Ich habe täglich mit ihm gearbeitet und viel über Best Practices in der Softwareentwicklung gelernt."
                            author="Valentin Zwerger"
                            position="BIM-Manager / Product Owner bei Wolff & Müller"
                        />

                        <TestimonialCard
                            quote="Adeniyi war sehr wichtig für unser Team. Seine Fähigkeit, komplexe Probleme zu lösen, hat unsere Produktivität deutlich gesteigert."
                            author="Christian Hänsele"
                            position="Teamleiter Digitalisierung bei Wolff & Müller"
                        />

                        <TestimonialCard
                            quote="Adeniyi ist ehrlich und bodenständig. Seine Softwarekenntnisse gepaart mit seinem Bau-Hintergrund haben unsere KI-Qualität verbessert."
                            author="Dr. Krishna Sridhar"
                            position="Ehemaliger CTO bei Conxai GmbH"
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kontakt aufnehmen</h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Sind Sie an einer Zusammenarbeit interessiert? Kontaktieren Sie mich für eine Zusammenarbeit oder einfach nur für ein freundliches „Hallo“.
                                </p>
                            </div>
                            <div className="space-y-4 max-w-md">
                                <div className="grid grid-cols-1 gap-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Name"
                                        type="text"
                                    />
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Email Address"
                                        type="email"
                                    />
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Betreff"
                                        type="text"
                                    />
                                    <textarea
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Ihre Nachricht"
                                    ></textarea>
                                </div>
                                <Button size="lg" className="w-full">
                                    Nachricht senden
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
                                    <h3 className="font-medium mb-2">Aktuelle Status</h3>
                                    <div className="space-y-2">
                                        {/* <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Available for freelance work</span>
                    </div> */}
                                        <div className="flex items-center">
                                            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                                            <span>Offen für Teilzeitstellen ab Februar 2026</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                                            <span>Intereiert an Sprechengagements</span>
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
