'use client';

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, SignOutButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // state to track if the component has mounted

  // Ensure the theme only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null; // Don't render anything during SSR
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      {/* Full-width nav */}
      <nav className="flex justify-between items-center px-6 py-3 w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            Price<span className="text-blue-500">Pal</span>
          </span>
        </Link>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <Search className="h-5 w-5 cursor-pointer text-gray-700 dark:text-white" />

          {/* Heart (Favorite) Icon */}
          <Heart className="h-5 w-5 cursor-pointer text-gray-700 dark:text-white" />

          {/* User Icon */}
          <User className="h-5 w-5 cursor-pointer text-gray-700 dark:text-white" />

          {/* Dark/Light Mode Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="p-2 rounded-full transition"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-gray-800 dark:text-white" />
            )}
          </Button>
          {/* if user is signedout then show sign in button  */}
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>


          {/* if user signin then show signout button only */}
          <SignedIn>
            {/* <UserButton /> */}
            <Link href="user-profile">Profile</Link>
            <SignOutButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

