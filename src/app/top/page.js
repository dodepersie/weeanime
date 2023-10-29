"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}&limit=10`
    );
    const data = await response.json();

    // const data = await getAnimeResponse("top/anime", `?page=${page}&limit=10`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="space-y-5">
      <Header title={`All Top Anime #${page}`} />

      <AnimeList api={topAnime} />

      <div className="flex justify-center items-center gap-3">
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
          pageLimit={5}
        />
      </div>
    </div>
  );
};

export default Page;
