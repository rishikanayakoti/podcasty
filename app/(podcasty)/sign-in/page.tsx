import React from "react";
import { SignIn } from "@clerk/nextjs/app-beta";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignIn afterSignInUrl="/" />
    </div>
  );
};

export default Page;
