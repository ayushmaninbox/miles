import React from "react";

import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          width={64}
          height={64}
          alt="Miles Logo"
          className="max-sm:size-10"
        />
        <p className="text-[32px] font-extrabold text-white max-sm:hidden">
          Miles
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default navbar;