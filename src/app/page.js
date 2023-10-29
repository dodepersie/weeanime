import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=4");

  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  function getRandomItems(arr, numItems) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  }

  let randomAnime = getRandomItems(recommendationAnime, 4);
  randomAnime = { data: randomAnime };

  return (
    <>
      <section id="topAnime" className="space-y-3">
        <Header title="Top Anime" linkHref="/top" linkTitle="See all" />
        <AnimeList api={topAnime} />
      </section>

      <section id="recommendationAnime" className="space-y-3">
        <Header title="Recommendation Anime" />
        <AnimeList api={randomAnime} />
      </section>
    </>
  );
};

export default Page;
