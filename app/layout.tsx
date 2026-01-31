import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Intro from "./components/Intro";
import { ReactLenis } from "./utils/lenis"

const spaceG = Space_Grotesk({
  weight: ["300", "400", "500", "600"], display: 'swap', adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Swayam Sachdeva",
  description: "Swayam Sachdeva's website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceG.className}  antialiased  relative overflow-x-hidden `}
      >
        <ReactLenis root>
          <Intro />
          {/* <Cursor /> */}
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
