import Link from "next/link";
import React from "react";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div
        className="mb-2 sm:mb-0 flex flex-row
  "
      >
        <div className="h-10 w-10 self-center mr-2">
          <img className="h-10 w-10 self-center" src="./logo.svg" />
        </div>
        <div>
          <Link href="/">
            <a
              href="/"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
            >
              Smallen
            </a>
          </Link>
          <br />
        </div>
      </div>

      <div className="sm:mb-0 self-center">
        <a
          href="https://smallen.gitbook.io/smallen/"
          className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Developer Guide
        </a>
        <Link href="/pricing">
          <a className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">
            Pricing
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
