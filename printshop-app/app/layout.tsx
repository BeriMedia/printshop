import type { Metadata } from "next";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Fotoprints Shop",
  description:
    "Gestalte deine Räumlichkeiten mit Prints, die dich berühren. Ohne Stock Images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="">{children}</body>
    </html>
  );
}
