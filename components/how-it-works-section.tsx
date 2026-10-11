import { Search, PenTool, BrainCircuit, Rocket, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Community Energy Diagnosis",
    description:
      "Conduct participatory energy audits with community members to understand current energy use, resources available, and specific needs.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Renewable System Design",
    description:
      "Engineer hybrid renewable energy systems tailored to local conditions, integrating solar, wind, micro-hydro, and biomass sources.",
  },
  {
    step: "03",
    icon: BrainCircuit,
    title: "AI Digital Twin Simulation",
    description:
      "Create digital replicas of the proposed systems to simulate performance, optimize configurations, and validate reliability before deployment.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Implementation & Knowledge Sharing",
    description:
      "Deploy the energy system with full community training, and share open-source documentation for replication in other communities.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] text-balance">
            How the System Works
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            A four-stage participatory process that ensures community ownership from diagnosis to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <Card className="bg-navy-light border-white/10 h-full hover:border-teal/30 transition-colors group">
                <CardContent className="pt-6">
                  <span className="text-xs font-bold tracking-widest text-teal/60 mb-4 block font-[family-name:var(--font-heading)]">
                    STEP {s.step}
                  </span>
                  <div className="h-12 w-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                    <s.icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                  <ArrowRight className="h-5 w-5 text-teal/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
