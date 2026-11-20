import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Emad · Software Engineer",
  description:
    "Software Engineer in Minya, Egypt. I build products end to end: database, REST API, admin dashboard and Flutter app. Co-founder at DigiWay.",
  openGraph: {
    title: "Mohamed Emad · Software Engineer",
    description: "Full-stack web, mobile and multi-tenant SaaS. Shipped to Google Play.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F1F5F7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
