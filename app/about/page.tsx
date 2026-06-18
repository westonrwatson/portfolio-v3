import Image from "next/image";
import type { Metadata } from "next";
import { SiteContainer } from "@/components/SiteContainer";
import { previewOutlineClass } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

const socialIconSizeClass = "h-[22px] w-[22px]";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex ${socialIconSizeClass} items-center justify-center text-ink transition-colors hover:text-[#ffc857]`}
    >
      {children}
    </a>
  );
}

const socialIconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: `${socialIconSizeClass} shrink-0`,
  "aria-hidden": true,
};

function GitHubIcon() {
  return (
    <svg {...socialIconProps}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a2.65 2.65 0 0 0-1.5 0C13 1 12 1 12 1s-1 0-3 1.5a2.65 2.65 0 0 0-1.5 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.45 5.45 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...socialIconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...socialIconProps}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function AboutPage() {
  const { about, name } = site;
  const { contact } = about;

  return (
    <SiteContainer className="pb-8 text-sm md:pb-10 md:text-base lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:overflow-hidden lg:pb-6">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-8">
        <div
          className={`relative aspect-[3/4] min-h-0 w-full overflow-hidden bg-surface lg:aspect-auto lg:h-full ${previewOutlineClass}`}
        >
          <Image
            src={about.image}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="self-start space-y-3 text-ink lg:space-y-3">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed lg:leading-snug">
              {paragraph}
            </p>
          ))}

          <div className="space-y-2 pt-1 lg:space-y-2">
            {contact.address.length > 0 ? (
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                  Location
                </p>
                {contact.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}

            {contact.email ? (
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            ) : null}

            {contact.phone ? (
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                  Phone
                </p>
                <p>{contact.phone}</p>
              </div>
            ) : null}

            {contact.github || contact.linkedin || contact.instagram ? (
              <div className="flex items-center gap-4 pt-4">
                {contact.instagram ? (
                  <SocialIcon href={contact.instagram} label="Instagram">
                    <InstagramIcon />
                  </SocialIcon>
                ) : null}
                {contact.linkedin ? (
                  <SocialIcon href={contact.linkedin} label="LinkedIn">
                    <LinkedInIcon />
                  </SocialIcon>
                ) : null}
                {contact.github ? (
                  <SocialIcon href={contact.github} label="GitHub">
                    <GitHubIcon />
                  </SocialIcon>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}
