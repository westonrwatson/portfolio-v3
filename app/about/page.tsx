import Image from "next/image";
import type { Metadata } from "next";
import { SiteContainer } from "@/components/SiteContainer";
import { previewOutlineClass } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

function ContactLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide">{label}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:underline"
      >
        {children}
      </a>
    </div>
  );
}

export default function AboutPage() {
  const { about, name } = site;
  const { contact } = about;

  return (
    <SiteContainer className="pb-8 text-sm md:pb-10 md:text-base">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
        <div
          className={`relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden bg-stone-200 sm:max-w-[280px] ${previewOutlineClass}`}
        >
          <Image
            src={about.image}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 400px"
            priority
          />
        </div>

        <div className="space-y-4 text-ink">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="space-y-3 pt-2">
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

            {contact.github ? (
              <ContactLink label="GitHub" href={contact.github}>
                {contact.github.replace(/^https?:\/\//, "")}
              </ContactLink>
            ) : null}

            {contact.linkedin ? (
              <ContactLink label="LinkedIn" href={contact.linkedin}>
                {contact.linkedin.replace(/^https?:\/\//, "")}
              </ContactLink>
            ) : null}

            {contact.instagram ? (
              <ContactLink label="Instagram" href={contact.instagram}>
                {contact.instagram.replace(/^https?:\/\//, "")}
              </ContactLink>
            ) : null}
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}
