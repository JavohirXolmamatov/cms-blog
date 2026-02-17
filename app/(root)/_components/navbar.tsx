"use client";
import ModeToogle from "@/components/shared/mode-toogle";
import { navLinks } from "@/constants";
import Link from "next/link";
import GlobalSearch from "./global-search";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Mobile from "./mobile";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container mx-auto max-w-6xl h-[10vh] w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-creteRound">Sammi</h1>
        </Link>
        {/* navLinks */}
        <div className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.route}
              className={cn(
                "hover:bg-blue-400/20 py-2 px-3 gap-1 cursor-pointer rounded-sm transition-colors flex items-center ",
                pathname === nav.route && "text-blue-400",
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* search */}
        <div className="flex items-center gap-1">
          <GlobalSearch />
          <ModeToogle />
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
