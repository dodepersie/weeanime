import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
);
const topAnime = await response.json();

const Page = () => {
  return (
    <div className="space-y-3">
      <Header title="All Top Anime 🔥" />

      <p>Pagination coming soon..</p>

      <AnimeList api={topAnime} />
    </div>
  );
};

export default Page;
