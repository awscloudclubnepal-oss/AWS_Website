import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Public_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-providers";

export const metadata: Metadata = {
  title: "AWS Cloud Club Nepal",
  description: "AWS Cloud Club Nepal - Building the Cloud Community",
  viewport: "width=device-width, initial-scale=1",
};

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--display-family",
});

const public_sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--text-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${open_sans.variable} ${public_sans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
