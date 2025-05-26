import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Learning",
  description: "online learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}  `}>
        <ClerkProvider
          options={{
            // Clerk automatically compensates for clock skew in dev mode
            developmentMode: process.env.NODE_ENV === "development",
          }}
        >
          <Provider>
            {children}
            <Toaster />
          </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
