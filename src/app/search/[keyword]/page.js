import NotFound from "@/components/AnimeBody/not-found";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  );
  const searchAnime = await response.json();

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
