import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import Sidebar from "@/layout/sidebar";
import ThemeProvider from "@/provider/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "Next managed dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />

          <Sidebar />

          <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
            <div
              id="main-content"
              className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-screen"
            >
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
