import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <navbar className="flex flex-wrap gap-3 justify-between items-center bg-base-200 shadow-sm rounded-xl px-4 py-3">
      <h1 className="text-base-content text-xl tracking-wide font-bold">
        <Link href="/">~ WeeAnime</Link>
      </h1>

      <InputSearch />
    </navbar>
  );
};

export default Navbar;
