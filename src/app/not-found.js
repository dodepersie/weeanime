"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10">
      <div className="flex flex-col justify-center items-center text-center space-y-4">
        <MagnifyingGlass size={64} />
        <h3 className="text-2xl">404 Page Not Found</h3>
        <p>Hey weebs! The page you looking for is not found here!</p>
      </div>

      <button className="btn" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
