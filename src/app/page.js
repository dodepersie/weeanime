import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  // Top Anime
  const topAnime = await getAnimeResponse("top/anime", "limit=4");

  // Randomize Recommendation Anime
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendationAnime = reproduce(recommendationAnime, 4);

  return (
    <>
      <section id="topAnime" className="space-y-3">
        <Header title="Top Anime" linkHref="/top" linkTitle="See all" />
        <AnimeList api={topAnime} />
      </section>

      <section id="recommendationAnime" className="space-y-3">
        <Header title="Recommendation Anime" />
        <AnimeList api={recommendationAnime} />
      </section>
    </>
  );
};

export default Page;
