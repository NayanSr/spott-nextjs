import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* logo   */}
          <Link href={"/"} className="flex items-center ">
            <Image
              alt="Logo"
              src="/spott.png"
              width={500}
              height={500}
              className="w-full h-11"
              priority
            ></Image>
          </Link>
          {/* search and location - Desktop only */}
          {/* right side action */}
          <div className="flex items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {/* Mobile search and location - Bellow Header */}
      </nav>
      {/* Modals */}
    </>
  );
};

export default Header;
