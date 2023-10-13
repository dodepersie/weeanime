import AnimeBody from "@/components/AnimeBody";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${params.id}/full`
  );
  const animeInfo = await response.json();
  const showInfo = animeInfo.data;

  return (
    <div>
      <section id="searchAnime" className="space-y-3">
        <Header
          title={
            showInfo.year
              ? `${showInfo.title} - ${showInfo.year}`
              : showInfo.title
          }
        />
        <AnimeBody
          title={showInfo.title}
          image={showInfo.images.webp.large_image_url}
          synopsis={showInfo.synopsis}
          background={showInfo.background}
          ytId={showInfo.trailer.youtube_id}
          score={showInfo.score}
          rank={showInfo.rank}
          popularity={showInfo.popularity}
          duration={showInfo.duration}
          rating={showInfo.rating}
          url={showInfo.url}
        />
      </section>
    </div>
  );
};

export default Page;
