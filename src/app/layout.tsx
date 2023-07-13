import NavBar from "@/MainComponents/views/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import Wrapper from "@/MainComponents/shared/Wrapper";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Maven_Pro({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Wrapper>
            <NavBar />
            {children}
          </Wrapper>
        </ClerkProvider>
      </body>
    </html>
  );
}
