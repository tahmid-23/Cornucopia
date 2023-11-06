import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Cornucopia",
  description:
    "A web application with a plethora of occasionally useful tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <NavBar />
          <main className="px-20 py-12 grow">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
