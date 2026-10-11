import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { LearningHubSection } from "@/components/learning-hub-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ImpactSection } from "@/components/impact-section"
import { TeamSection } from "@/components/team-section"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <LearningHubSection />
        <SolutionsSection />
        <ImpactSection />
        <TeamSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}
