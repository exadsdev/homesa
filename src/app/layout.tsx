import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

export const metadata: Metadata = {
  title: "pg Home - ออกแบบบ้าน สร้างบ้าน",
  description:
    "บริษัทออกแบบและสร้างบ้านที่มีประสบการณ์กว่า 15 ปี เรามุ่งมั่นให้บริการออกแบบบ้านที่สวยงาม ปลอดภัย และคุ้มค่าแก่การลงทุน",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
