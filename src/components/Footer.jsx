import { ArrowUpRight, Mail, MapPin, Phone, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/projects.js";
import logo from "../assets/logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// const SOCIALS = [
//   { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
//   { label: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
//   { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedinIcon },
// ];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="border-t-2 border-gold bg-navy pb-4 pt-10 text-white md:pt-14"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          {/* Brand / About */}
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Shree Balaji - Home">
              <img
                src={logo}
                alt="Shree Balaji"
                className="h-18 w-auto object-contain md:h-20"
              />
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {BRAND.name} helps families find the perfect home — residential
              projects with verified approvals and honest guidance at every
              step, from first visit to key handover.
            </p>

            {/* <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/40 text-[#0B2A4A] transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Navigate
            </h4>
            <div className="mt-3 h-px w-12 bg-gold/60" />

            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors duration-300 hover:text-gold-light"
                  >
                    {n.label}

                    <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Contact
            </h4>
            <div className="mt-3 h-px w-12 bg-gold/60" />

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all transition-colors duration-300 hover:text-gold-light"
                >
                  {BRAND.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="space-y-1">
                  {(BRAND.contactPersons || []).map((person) => (
                    <span key={person.phone} className="block">
                      <a
                        href={`tel:${person.phone}`}
                        className="transition-colors duration-300 hover:text-gold-light"
                      >
                        {person.phone}
                      </a>
                      <span className="block text-xs text-white/60">
                        {person.name}
                      </span>
                    </span>
                  ))}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-white/70 transition-colors duration-300 hover:text-gold-light"
                >
                  {BRAND.address}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="leading-relaxed text-white/70">
                  RERA No.: {BRAND.rera}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold/30 py-6 text-center text-xs text-white/60 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {BRAND.name} — {BRAND.legalName}.
            RERA No.: {BRAND.rera}.
          </p>
        </div>
      </div>
    </footer>
  );
}
