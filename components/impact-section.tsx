"use client"

import { MapPin, Users, TrendingUp, BarChart3 } from "lucide-react"

const stats = [
  {
    icon: MapPin,
    value: "8",
    label: "Implementation Sites",
    description: "Active renewable energy installations across indigenous communities",
    color: "text-teal" as const,
    bgColor: "bg-teal/10" as const,
  },
  {
    icon: Users,
    value: "60+",
    label: "People Impacted (Short Term)",
    description: "Direct beneficiaries in communities with active energy systems",
    color: "text-terracotta" as const,
    bgColor: "bg-terracotta/10" as const,
  },
  {
    icon: TrendingUp,
    value: "300+",
    label: "People Impacted (Long Term)",
    description: "Projected beneficiaries as systems scale and knowledge is shared",
    color: "text-teal" as const,
    bgColor: "bg-teal/10" as const,
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            Measuring Progress
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] text-balance">
            Our Impact in Numbers
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Tracking meaningful outcomes across energy access, community empowerment, and knowledge dissemination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${stat.bgColor} mb-5`}>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <div className="text-5xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-white/80 mb-2 font-[family-name:var(--font-heading)]">
                {stat.label}
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual infographic bar */}
        <div className="mt-16 bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="h-5 w-5 text-teal" />
            <h3 className="text-base font-semibold text-white font-[family-name:var(--font-heading)]">
              Projected Growth Over 5 Years
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-white/60">Implementation Sites</span>
                <span className="text-teal font-semibold">8 / 25 target</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-teal rounded-full transition-all duration-1000" style={{ width: "32%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-white/60">Community Members Trained</span>
                <span className="text-terracotta font-semibold">60 / 500 target</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-terracotta rounded-full transition-all duration-1000" style={{ width: "12%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-white/60">Open-Source Tools Released</span>
                <span className="text-teal-light font-semibold">3 / 10 target</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-teal-light rounded-full transition-all duration-1000" style={{ width: "30%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
