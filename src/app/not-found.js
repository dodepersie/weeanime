"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="text-center space-y-4 pt-20">
          <h1 className="text-7xl">🔎</h1>
          <h3 className="text-2xl">404 Halaman Tidak Ditemukan</h3>
          <p>Hey wibu! Halaman yang kalian cari tidak ditemukan disini!</p>
        </div>

        <button className="btn" onClick={() => router.back()}>
          Kembali
        </button>
      </div>
    </div>
  );
};

export default NotFound;
