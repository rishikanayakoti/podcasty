import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header className="bg-[#f4f4f1] sticky top-0 flex border-b border-b-black justify justify-between items-center shadow-md h-[58px] p-3 text-xl">
      <div className="flex items-center justify-between">
        <FiMenu className="text-black cursor-pointer" />
        <h1 className="ml-4 cursor-pointer font-bold">Podcasty</h1>
      </div>

      <div className="flex border-black border items-center rounded-full w-[50%] p-1 text-base bg-white">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Search your liking.."
        />
        <BiSearch className="mx-2 cursor-pointer text-2xl" />
      </div>

      <div className="flex justify-end items-center">
        <BsFillMoonFill className="mr-4 h-6 cursor-pointer" />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <LoginButton />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
