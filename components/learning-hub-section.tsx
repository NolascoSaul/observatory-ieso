import { BookOpen, FileText, Video, FlaskConical, Database, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const resources = [
  {
    icon: BookOpen,
    title: "Tutorials",
    description: "Step-by-step guides for setting up renewable energy systems, from basic solar installations to complex hybrid configurations.",
    count: "12 tutorials",
  },
  {
    icon: FileText,
    title: "Manuals",
    description: "Comprehensive technical manuals covering system design, maintenance protocols, and community management frameworks.",
    count: "8 manuals",
  },
  {
    icon: Video,
    title: "Video Lectures",
    description: "Recorded lectures from researchers and practitioners on renewable energy, digital twins, and community engagement.",
    count: "24 videos",
  },
  {
    icon: FlaskConical,
    title: "Case Studies",
    description: "In-depth analyses of real-world implementations, documenting challenges, solutions, and measurable outcomes.",
    count: "6 studies",
  },
  {
    icon: Database,
    title: "Datasets",
    description: "Open-access datasets from energy audits, weather monitoring, and system performance measurements across implementation sites.",
    count: "15 datasets",
  },
]

export function LearningHubSection() {
  return (
    <section id="learning-hub" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            Resources
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] text-balance">
            Learning Hub
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Open-access educational resources for communities, researchers, and practitioners working on renewable energy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="border-border/60 bg-card hover:border-teal/30 transition-all group cursor-pointer hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-11 w-11 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <resource.icon className="h-5 w-5 text-teal" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-teal transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center text-xs font-medium text-teal bg-teal/10 px-2.5 py-1 rounded-full">
                  {resource.count}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
