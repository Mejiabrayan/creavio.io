import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TriangleObject from "@/components/TriangleObject";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Creavio.io | Home",
  description: "Creavio.io Home Page",
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="container pt-25 max-w-7xl w-full mx-auto">
        <div className="h-full flex flex-col justify-center items-center">
          <LargeHeading
            size="lg"
            className="text-center leading-tight pb-4 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800/80 to-gray-900/60"
          >
            Unlock the Power of AI for Creative Content Generation{" "}
          </LargeHeading>

          <Paragraph className="max-w-lg lg:max-w-xl lg:text-left text-center text-gray-500 mt-6">
            Launch your online brand with Creavio.io. An all-in-one platform for
            content creators, influencers, and entrepreneurs.{" "}
            <Link
              href="/tools"
              className={buttonVariants({ variant: "outline" })}
            >
              Try it for free
            </Link>
            .
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
