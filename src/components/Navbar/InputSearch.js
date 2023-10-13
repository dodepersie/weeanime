"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault;
    if (searchRef.current.value) {
      if (e.key === "Enter" || e.type === "click") {
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="join w-full md:w-60">
      <input
        placeholder="Search anime.."
        className="input input-bordered join-item rounded-lg w-full max-w-xs focus:outline-none"
        value={inputValue}
        ref={searchRef}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
      />
      <button className="btn btn-secondary join-item" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
