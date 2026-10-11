import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-navy/80" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          <span className="text-sm text-teal-light font-medium">Open-Source Research Platform</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-[family-name:var(--font-heading)] text-balance">
          Indigenous Energy Solutions Observatory
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed text-pretty">
          Democratizing renewable energy through open-source technology, community participation, and indigenous knowledge.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-teal text-white hover:bg-teal/90 px-8 h-12 text-base"
          >
            Explore Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent px-8 h-12 text-base"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Learn About the Project
          </Button>
        </div>
      </div>
    </section>
  )
}
