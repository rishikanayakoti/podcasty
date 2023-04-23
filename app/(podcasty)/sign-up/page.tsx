import React from "react";
import { SignUp } from "@clerk/nextjs/app-beta";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default Page;
