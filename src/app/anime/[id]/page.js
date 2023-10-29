import AnimeBody from "@/components/AnimeBody";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

export async function generateMetadata({ params }) {
  let showInfo = await getAnimeResponse(`anime/${params.id}/full`);
  showInfo = showInfo.data;

  return {
    title: showInfo?.title,
    description: showInfo?.background,
    metadataBase: new URL("https://weeanime.vercel.app/"),
    openGraph: {
      title: showInfo?.title,
      description: showInfo?.background,
    },
  };
}

const Page = async ({ params }) => {
  let showInfo = await getAnimeResponse(`anime/${params.id}/full`);
  showInfo = showInfo.data;

  return (
    <div>
      <section id="searchAnime" className="space-y-3">
        <Header
          title={
            showInfo?.year
              ? `${showInfo?.title} - ${showInfo?.year}`
              : showInfo?.title
          }
        />

        <div className="border-b-2"></div>

        <AnimeBody
          title={showInfo?.title}
          image={showInfo?.images.webp.large_image_url}
          synopsis={showInfo?.synopsis}
          background={showInfo?.background}
          ytId={showInfo?.trailer.youtube_id}
          score={showInfo?.score}
          rank={showInfo?.rank}
          popularity={showInfo?.popularity}
          duration={showInfo?.duration}
          rating={showInfo?.rating}
          url={showInfo?.url}
        />
      </section>
    </div>
  );
};

export default Page;
