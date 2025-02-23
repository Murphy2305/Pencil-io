import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider"
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "sonner";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >     
          <ConvexClientProvider>
        {children}
         <Toaster />
        </ConvexClientProvider>
        </ThemeProvider>   
      </body>
    </html>
  );
}
