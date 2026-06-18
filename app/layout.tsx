import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: "Weston Watson — portfolio and selected work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <div className="site-shell flex min-h-screen flex-col">
          <Header />
          <main className="flex min-h-0 flex-1 flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
