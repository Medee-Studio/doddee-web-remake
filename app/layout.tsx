import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { UrlStatusHandler } from "@/components/common/url-status-handler";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_METADATA_TITLE,
  description: process.env.NEXT_PUBLIC_APP_METADATA_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <main>
          <ThemeProvider
            attribute="class"
            themes={["light", "dark"]}
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
          >
            {/* Listen for ?title=&description=&type= to trigger toasts */}
            <Suspense fallback={null}>
              <UrlStatusHandler />
            </Suspense>
            {children}
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
