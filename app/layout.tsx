import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { GoPersonFill } from "react-icons/go";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swayam's Site",
  description: "A website to showcase my projects and me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <BiSolidHomeAlt2 />,
              textClass: "text-xl",
            },
            {
              name: "About",
              link: "/#about",
              icon: <GoPersonFill />,
              textClass: "text-xl",
            },
            {
              name: "Projects",
              link: "/projects",
              icon: <BiSolidHomeAlt2 />,
              textClass: "text-xl",
            },
          ]}
          className="text-xl"
        />

        {children}
      </body>
    </html>
  );
}
