import { Calendar, MapPin, Clock, Users, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Community Solar Installation Workshop",
    type: "Workshop",
    date: "March 15-17, 2026",
    time: "09:00 - 17:00",
    location: "Paran\u00e1, Brazil",
    description: "Hands-on training for community members on solar panel installation, maintenance, and system monitoring.",
    capacity: "25 participants",
    status: "upcoming" as const,
  },
  {
    title: "AI Digital Twin for Energy Systems",
    type: "Training Session",
    date: "April 5, 2026",
    time: "14:00 - 18:00",
    location: "Online (Virtual)",
    description: "Technical training on using the IESO digital twin platform for modeling hybrid renewable energy systems.",
    capacity: "50 participants",
    status: "upcoming" as const,
  },
  {
    title: "IESO Annual Research Meeting",
    type: "Research Meeting",
    date: "May 20-22, 2026",
    time: "All day",
    location: "Bogot\u00e1, Colombia",
    description: "Annual gathering of researchers, community leaders, and stakeholders to share findings and plan future implementations.",
    capacity: "100 participants",
    status: "upcoming" as const,
  },
  {
    title: "Indigenous Energy Knowledge Exchange",
    type: "Community Training",
    date: "June 10-12, 2026",
    time: "09:00 - 16:00",
    location: "Cusco, Peru",
    description: "Inter-community exchange program where experienced community operators train members from new implementation sites.",
    capacity: "30 participants",
    status: "upcoming" as const,
  },
]

function getTypeBadgeStyles(type: string) {
  switch (type) {
    case "Workshop":
      return "bg-teal/10 text-teal hover:bg-teal/20"
    case "Training Session":
      return "bg-terracotta/10 text-terracotta hover:bg-terracotta/20"
    case "Research Meeting":
      return "bg-navy/10 text-navy hover:bg-navy/20"
    default:
      return "bg-teal-light/20 text-teal hover:bg-teal-light/30"
  }
}

export function EventsSection() {
  return (
    <section id="events" className="py-20 lg:py-28 bg-neutral-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            Calendar
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] text-balance">
            Upcoming Events
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Workshops, training sessions, and research meetings connecting communities with renewable energy expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card
              key={event.title}
              className="border-border/60 bg-card hover:border-teal/30 transition-all group hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className={`text-xs ${getTypeBadgeStyles(event.type)}`}
                  >
                    {event.type}
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-teal transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-teal shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-teal shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-terracotta shrink-0" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5 text-teal shrink-0" />
                    {event.capacity}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
