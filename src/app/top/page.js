import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Pagination";

const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
);
const topAnime = await response.json();

const Page = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center gap-3">
        <Header title="All Top Anime" />
        <Pagination />
      </div>

      <AnimeList api={topAnime} />
    </div>
  );
};

export default Page;
