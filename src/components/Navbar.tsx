// "use client";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
//
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Moon, Sun } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useTheme } from "next-themes"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
//
// const Navbar = () => {
//   const router = useRouter();
//   const { setTheme } = useTheme();
//
//   const handleSearchClick = () => {
//     console.log('search clicked');
//   };
//
//   const handleHeartClick = () => {
//     console.log('heart clicked');
//   };
//
//   const handleUserClick = () => {
//     console.log('user clicked');
//   };
//
//   return (
//     <header className="w-full">
//       <nav className="nav">
//         <Link href="/" className="flex items-center gap-1">
//           <Image
//             src="/assets/icons/logo.svg"
//             width={27}
//             height={27}
//             alt="logo"
//             className="invert"
//           />
//           <p className="nav-logo">
//             Price<span className='text-blue-400 text-size-2 text-7x'>Pal</span>
//           </p>
//         </Link>
//
//         <div className="flex items-center gap-5">
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>
//                   <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} onClick={handleSearchClick} />
//                 </NavigationMenuTrigger>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>
//                   <Image src="/assets/icons/black-heart.svg" alt="heart" width={24} height={24} onClick={handleHeartClick} />
//                 </NavigationMenuTrigger>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>
//                   <Image src="/assets/icons/user.svg" alt="user" width={24} height={24} onClick={handleUserClick} />
//                 </NavigationMenuTrigger>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">Toggle theme</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
//               <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
//               <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </nav>
//     </header>
//   );
// };
// second iter
// "use client";
//
// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { Moon, Sun, Search, User, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
//
// const Navbar = () => {
//   const { theme, setTheme } = useTheme();
//
//   // Toggle theme between light and dark
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };
//
//   return (
//     <header className="w-full bg-white dark:bg-gray-900 shadow-md">
//       {/* Full-width nav */}
//       <nav className="flex justify-between items-center px-6 py-3 w-full">
//
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <span className="text-2xl font-bold">
//             Price<span className="text-blue-500">Pal</span>
//           </span>
//         </Link>
//
//         {/* Right side icons */}
//         <div className="flex items-center gap-4">
//           {/* Search Icon */}
//           <Search className="h-5 w-5 cursor-pointer text-gray-700 dark:text-white" />
//
//           {/* Heart (Favorite) Icon */}
//           <Heart className="h-5 w-5 cursor-pointer text-gray-700 dark:text-white" />
//
//           {/* User Icon */}
//           <User className="h-5 w-5 cursor-pointer text-gray-700 dark:text-white" />
//
//           {/* Dark/Light Mode Toggle Button */}
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={toggleTheme}
//             className="p-2 rounded-full transition"
//           >
//             {theme === "dark" ? (
//               <Sun className="h-4 w-4 text-yellow-400" />
//             ) : (
//               <Moon className="h-4 w-4 text-gray-800 dark:text-white" />
//             )}
//           </Button>
//         </div>
//       </nav>
//     </header>
//   );
// };
//
// export default Navbar;
//
'use client'; // Ensure this component is treated as a client-side component

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
