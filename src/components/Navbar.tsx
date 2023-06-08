import { getServerSession } from "next-auth";
import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { authOptions } from "@/lib/auth";
import { Button } from "./ui/Button";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed z-10 top-0 left-0 right-0 h-16 ">
      <div className="container max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-gray-900 dark:text-white">
            Creavio
          </Link>
          {/* <div className="hidden md:block ml-4">
            <ThemeToggle />
          </div> */}
        </div>
        <div className="hidden md:flex items-center justify-center gap-4">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About
          </Link>

          <Link href="/dashboard" className="text-gray-700">
            Dashboard
          </Link>
          <Button className="pointer-events-none md:pointer-events-auto" disabled
          >
            Coming Soon
          </Button>
          
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
