import Link from "next/link";
import React from "react";

const LoginButton = () => {
  return (
    <Link href="/sign-up">
      <div className="py-1 px-2 bg-black text-white text-base rounded-md">
        Login
      </div>
    </Link>
  );
};

export default LoginButton;
