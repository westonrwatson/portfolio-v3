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
    <SiteContainer className="pb-8 text-sm md:pb-10 md:text-base lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:overflow-hidden lg:pb-6">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-8">
        <div
          className={`relative aspect-[3/4] min-h-0 w-full overflow-hidden bg-stone-200 lg:aspect-auto lg:h-full ${previewOutlineClass}`}
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
