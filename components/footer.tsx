import Link from "next/link"
import { Sun, Mail, Github, ExternalLink } from "lucide-react"

const footerLinks = {
  project: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Solutions", href: "#solutions" },
    { label: "Impact", href: "#impact" },
  ],
  resources: [
    { label: "Learning Hub", href: "#learning-hub" },
    { label: "Tutorials", href: "#" },
    { label: "Datasets", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  community: [
    { label: "Team", href: "#team" },
    { label: "Events", href: "#events" },
    { label: "Partner With Us", href: "#" },
    { label: "Contribute", href: "#" },
  ],
}

const partners = [
  "Universidad Nacional de Colombia",
  "Universidade Federal do Paran\u00e1",
  "Pontificia Universidad Cat\u00f3lica del Per\u00fa",
  "Universidad de los Andes",
]

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
                IESO
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Indigenous Energy Solutions Observatory. An open-source research platform democratizing renewable energy through technology and community participation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@ieso-research.org"
                className="flex items-center gap-2 text-sm text-teal hover:text-teal-light transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@ieso-research.org
              </a>
            </div>
            <div className="mt-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                Open-Source Repository
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">Project</h4>
            <ul className="space-y-2.5">
              {footerLinks.project.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">Community</h4>
            <ul className="space-y-2.5">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners bar */}
        <div className="py-8 border-t border-white/10">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-[family-name:var(--font-heading)]">
            Partner Institutions
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {partners.map((partner) => (
              <span key={partner} className="text-sm text-white/40">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            {'2026 Indigenous Energy Solutions Observatory. Open-source under MIT License.'}
          </p>
          <p className="text-xs text-white/30">
            Built for communities, by communities.
          </p>
        </div>
      </div>
    </footer>
  )
}
