"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const Pagination = () => {
  return (
    <div class="join grid grid-cols-2">
      <button class="join-item btn" onClick={() => alert("Under construction")}>
        <ArrowLeft size={30} />
      </button>
      <button class="join-item btn" onClick={() => alert("Under construction")}>
        <ArrowRight size={30} />
      </button>
    </div>
  );
};

export default Pagination;
