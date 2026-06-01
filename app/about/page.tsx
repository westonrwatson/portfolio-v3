import Image from "next/image";
import type { Metadata } from "next";
import { SiteContainer } from "@/components/SiteContainer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const { about } = site;
  const { contact } = about;

  return (
    <SiteContainer className="pb-8 text-sm md:pb-10 md:text-base">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
          <Image
            src={about.image}
            alt=""
            fill
            className="object-cover"
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
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                Address
              </p>
              {contact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

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

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                Phone
              </p>
              <p>{contact.phone}</p>
            </div>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                GitHub
              </p>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {contact.github.replace(/^https?:\/\//, "")}
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                Instagram
              </p>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {contact.instagram.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}
