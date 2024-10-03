import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "./utils";
import { Header } from "app/_components/ui/Header";
import type { Viewport } from "next";
import { PHProvider } from "./providers/providers";
import dynamic from "next/dynamic";
import { Footer } from "app/_components/ui/Footer";
const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const sans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Studently",
  description:
    "Studently is a platform that helps international students in the Netherlands to access government benefits.",
  openGraph: {
    images: "https://student-ly.com/Favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/Favicon.ico" sizes="any" />

      <PHProvider>
        <body
          className={cn(
            sans.className,
            "bg-gradient-to-b from-backgroundGradient-start to-backgroundGradient-end"
          )}
        >
          <PostHogPageView />
          <div className="2xl:hidden">
            <Header />
          </div>
          {children}
          <Footer />
        </body>
      </PHProvider>
    </html>
  );
}
