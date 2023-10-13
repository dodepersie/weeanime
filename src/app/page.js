import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4`
  );
  const topAnimePopularity = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4&filter=favorite`
  );
  const topAnimeFavorite = await response2.json();

  return (
    <>
      <section id="topAnime" className="space-y-3">
        <Header
          title="Top Anime 🔥"
          linkHref="/top"
          linkTitle="See all"
        />
        <AnimeList api={topAnimePopularity} />
      </section>

      <section id="favoriteAnime" className="space-y-3">
        <Header title="Favorite Anime 🔥" />
        <AnimeList api={topAnimeFavorite} />
      </section>
    </>
  );
};

export default Page;
