"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { Fire } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <navbar className="navbar bg-base-200 shadow-sm rounded-xl">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl flex items-center gap-0.5"
        >
          WeeAnime <Fire size={30} />
        </Link>
      </div>
      <div className="navbar-end">
        <InputSearch />
      </div>
    </navbar>
  );
};

export default Navbar;
