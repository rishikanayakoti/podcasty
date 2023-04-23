// TODO: Place your components in the respective order

import {
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  auth,
  currentUser,
} from "@clerk/nextjs/app-beta";

export default function Home() {
  const { userId } = auth();
  console.log(userId);
  return (
    <div className="">
      {/* Header */}
      {/* Treding */}
      {/* Card Components */}
      {/* Footer */}
    </div>
  );
}
