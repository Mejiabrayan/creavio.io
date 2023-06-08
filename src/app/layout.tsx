import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toast";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import Loading from "./loading";
import Footer from "@/components/Footer";
import IslandBar from "@/components/IslandBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="relative min-h-screen antialiased">
        <Providers>
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            {/* <IslandBar /> */}
            <Toaster position="bottom-right" />
            {/* <img src="/beams.jpeg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1508" /> */}
            <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <main>{children}</main>
          </Suspense>
          <Footer />
        </Providers>
        {/* Allow more height for mobile menu on mobile */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
