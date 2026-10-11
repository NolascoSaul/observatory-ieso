import { Globe, Users, Cpu, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Globe,
    title: "Democratization of Energy",
    description:
      "Making renewable energy accessible and affordable for underserved indigenous communities through open-source tools and shared knowledge.",
  },
  {
    icon: Users,
    title: "Community-Centered Design",
    description:
      "Every solution is co-designed with the community, integrating indigenous knowledge systems with modern engineering practices.",
  },
  {
    icon: Lightbulb,
    title: "Hybrid Renewable Systems",
    description:
      "Combining solar, wind, micro-hydro, and biomass technologies into hybrid systems optimized for each community's unique context.",
  },
  {
    icon: Cpu,
    title: "AI Digital Twin Simulation",
    description:
      "Using AI-powered digital twins to model, simulate, and optimize energy systems before deployment, reducing cost and risk.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            About the Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] text-balance">
            Bridging Indigenous Knowledge and Modern Technology
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            IESO is an open-source research initiative that combines community participation, renewable energy engineering, and artificial intelligence to build sustainable energy solutions for indigenous communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-border/60 bg-card hover:border-teal/30 transition-colors group"
            >
              <CardContent className="pt-6">
                <div className="h-11 w-11 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <pillar.icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
