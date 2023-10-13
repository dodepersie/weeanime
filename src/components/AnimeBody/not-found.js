"use client";

import { useRouter } from "next/navigation";

const NotFound = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10">
      <div className="text-center space-y-4">
        <h1 className="text-7xl">🔎</h1>
        <h3 className="text-2xl">
          404 <span className="capitalize">{title}</span> Not Found
        </h3>
        <p>
          Hey weebs! <span className="font-bold capitalize">{title}</span> is
          not found in the database!
        </p>
      </div>

      <button className="btn" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
