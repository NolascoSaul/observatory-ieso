import { GraduationCap, FlaskConical, Handshake } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  { name: "Dr. Maria Fernandez", role: "Principal Investigator", affiliation: "Universidad Nacional", type: "researcher" },
  { name: "Prof. Carlos Ramirez", role: "Energy Systems Lead", affiliation: "Federal University", type: "researcher" },
  { name: "Dr. Ana Gutierrez", role: "AI & Digital Twins", affiliation: "Technical Institute", type: "researcher" },
  { name: "Dr. Luis Morales", role: "Community Engagement", affiliation: "Social Research Center", type: "researcher" },
  { name: "Sofia Paredes", role: "PhD Candidate, Solar Systems", affiliation: "Universidad Nacional", type: "student" },
  { name: "Diego Torres", role: "MSc Student, Wind Energy", affiliation: "Federal University", type: "student" },
  { name: "Isabella Cruz", role: "PhD Candidate, AI Modeling", affiliation: "Technical Institute", type: "student" },
  { name: "Gabriel Silva", role: "Research Assistant", affiliation: "Universidad Nacional", type: "student" },
]

const partnerUniversities = [
  "Universidad Nacional de Colombia",
  "Universidade Federal do Paran\u00e1",
  "Pontificia Universidad Cat\u00f3lica del Per\u00fa",
  "Universidad de los Andes",
]

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((n) => n[0])
    .join("")
}

function getAvatarColor(type: string) {
  return type === "researcher" ? "bg-teal/15 text-teal" : "bg-terracotta/15 text-terracotta"
}

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal mb-3 font-[family-name:var(--font-heading)]">
            Our People
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] text-balance">
            Research Team & Partners
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A multidisciplinary team of researchers, students, and partner institutions driving innovation in community-centered renewable energy.
          </p>
        </div>

        {/* Researchers & Students */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="border-border/60 bg-card hover:border-teal/20 transition-colors"
            >
              <CardContent className="pt-6 text-center">
                <Avatar className={`h-16 w-16 mx-auto mb-4 ${getAvatarColor(member.type)}`}>
                  <AvatarFallback className={`text-lg font-semibold ${getAvatarColor(member.type)} font-[family-name:var(--font-heading)]`}>
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-sm font-semibold text-foreground font-[family-name:var(--font-heading)]">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">{member.affiliation}</p>
                <Badge
                  variant="secondary"
                  className={`mt-3 text-[10px] ${
                    member.type === "researcher"
                      ? "bg-teal/10 text-teal hover:bg-teal/20"
                      : "bg-terracotta/10 text-terracotta hover:bg-terracotta/20"
                  }`}
                >
                  {member.type === "researcher" ? (
                    <FlaskConical className="h-2.5 w-2.5 mr-1" />
                  ) : (
                    <GraduationCap className="h-2.5 w-2.5 mr-1" />
                  )}
                  {member.type === "researcher" ? "Researcher" : "Student"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Universities */}
        <div className="bg-card rounded-2xl border border-border/60 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-lg bg-teal/10 flex items-center justify-center">
              <Handshake className="h-5 w-5 text-teal" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground font-[family-name:var(--font-heading)]">
                Partner Universities
              </h3>
              <p className="text-sm text-muted-foreground">Collaborating institutions across Latin America</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerUniversities.map((uni) => (
              <div
                key={uni}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/40"
              >
                <GraduationCap className="h-4 w-4 text-teal shrink-0" />
                <span className="text-sm text-foreground font-medium">{uni}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
