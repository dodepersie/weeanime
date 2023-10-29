import NotFound from "@/components/AnimeBody/not-found";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <div>
      <section id="searchAnime" className="space-y-3">
        {searchAnime.pagination.items.total > 0 ? (
          <>
            <Header title={`Result for "${decodeKeyword}"...`} />
            <AnimeList api={searchAnime} />
          </>
        ) : (
          <NotFound title={`${keyword}`} />
        )}
      </section>
    </div>
  );
};

export default Page;
