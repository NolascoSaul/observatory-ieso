import Image from "next/image"
import { MapPin, Zap, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    image: "/images/case-study-1.jpg",
    title: "Solar Microgrid for Amazonian Community",
    location: "Paran\u00e1, Brazil",
    technology: "Solar PV + Battery Storage",
    impact: "45 households powered with 100% renewable energy, reducing diesel dependency by 95%.",
  },
  {
    image: "/images/case-study-2.jpg",
    title: "Wind-Solar Hybrid for Highland Village",
    location: "Cusco Region, Peru",
    technology: "Wind Turbine + Solar PV",
    impact: "Community center and school electrified, enabling evening education programs for 120 students.",
  },
  {
    image: "/images/case-study-3.jpg",
    title: "Micro-Hydro Power Station",
    location: "Choc\u00f3, Colombia",
    technology: "Micro-Hydro + Biomass",
    impact: "Continuous power supply for 30 families and a community health post serving 200+ people.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-neutral-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            Real-World Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] text-balance">
            Solutions & Case Studies
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Documented implementations of renewable energy systems in indigenous communities across Latin America.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="overflow-hidden border-border/60 bg-card hover:shadow-lg transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
              <CardContent className="pt-5">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                  {study.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-terracotta shrink-0" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="h-3.5 w-3.5 text-teal shrink-0" />
                    {study.technology}
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-3 border-t border-border/60">
                  <TrendingUp className="h-3.5 w-3.5 text-teal mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
