import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/navbar";
import BotonWhatsapp from "@/components/boton-whatsapp";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Taller Soldadura Rodriguez",
  description: "Taller de soldadura industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} ${merriweather.variable} bg-light-background bg-gradient-to-tr dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <BotonWhatsapp />
        </ThemeProvider>
      </body>
    </html>
  );
}
