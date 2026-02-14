import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";

const creteRound = Crete_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creteRound",
});

const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  title: "Sammi dasturlashga oid maqolalar",
  description:
    "Dasturlash haqida yangiliklar, maqolalar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rnagish va rivojlantirish uchun qo'llanma topishingiz mumkin.",
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
