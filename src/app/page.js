import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=4");

  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  function getRandomAnime(arr, numItems) {
    const randomAnime = [];
    while (randomAnime.length < numItems) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      randomAnime.push(arr[randomIndex]);
    }
    return { data: randomAnime };
  }

  return (
    <>
      <section id="topAnime" className="space-y-3">
        <Header title="Top Anime" linkHref="/top" linkTitle="See all" />
        <AnimeList api={topAnime} />
      </section>

      <section id="recommendationAnime" className="space-y-3">
        <Header title="Recommendation Anime" />
        <AnimeList api={getRandomAnime(recommendationAnime, 4)} />
      </section>
    </>
  );
};

export default Page;
