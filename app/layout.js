import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets:['latin']});

export const metadata = {
  title: "SENSAI",
  description: "AI Career Coach is your smart, 24/7 career mentor. Get tailored job advice, resume feedback, interview prep, and personalized growth plans — all powered by AI.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-aut text-center text-gray-200">
                <p>Made with ❤️ by Karunesh</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
