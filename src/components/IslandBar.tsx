'use client';

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

import { usePathname } from "next/navigation";
import { Book, Github, Home } from "lucide-react";

export default function IslandBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  let pathname = usePathname() || "/";

  if (pathname.includes("/Blog/")) {
    pathname = "/Blog";
  }

  // run useEffect, to make sure that correct theme is rendered
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const size = 18;
  const home = {
    url: "/",
    title: "Home",
    logo: {
      element: <Home  width={size} height={size} />,
    },
  };
  const blog = {
    url: "/Tools",
    title: "Tools",
    logo: {
      element: <Book  width={size} height={size} />,
    },
  };
  const github = {
    url: "https://github.com/ogdakke",
    title: "",
    logo: {
      element: <Github  width={size} height={size} />,
    },
  };

  const menuItems = [home, blog, github];

  return (
    <div className="items-center z-50 flex justify-center">
    <nav
      className={`
      sticky 
        flex w-full max-w-3xl flex-row justify-between
        rounded-2xl
        p-1
        bg-slate-50
        border 
        border-accent-5/5
        bg-accent-4/30
        shadow-2xl 
        backdrop-blur-xl
        mx-auto
      `}
    >
        <div className="flex flex-row gap-6">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.title}
                className={`
                  flex items-center rounded-lg py-1 px-3 text-lg transition-all hover:bg-bgLight/75 dark:hover:bg-bgPrimary/75
                `}
                href={item.url}
              >
                {pathname === item.url && (
                  <span
                    className={`
                      absolute inset-0 bg-bgLight/25 dark:bg-bgPrimary/50 rounded-xl block
                    `}
                  ></span>
                )}
                {item.logo.element}
                <span
                  className={`
                    ${pathname === item.url ? "text-base" : "text-base"}
                    overflow-hidden
                    transition-all
                    ${item.title ? "pl-1" : ""}
                  `}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      
      </nav>
    </div>
  );
}
