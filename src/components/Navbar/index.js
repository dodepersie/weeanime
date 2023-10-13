import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-between items-center bg-base-200 shadow-lg rounded-xl px-4 py-3">
        <h1 className="text-base-content text-xl tracking-wide font-bold">
          <Link href="/">~ WeeAnime</Link>
        </h1>

        <InputSearch />
      </div>
    </div>
  );
};

export default Navbar;
