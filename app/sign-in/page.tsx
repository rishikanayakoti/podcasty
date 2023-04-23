import React from "react";
import { SignIn } from "@clerk/nextjs/app-beta";

const Page = () => {
  return <SignIn afterSignInUrl="/" />;
};

export default Page;
