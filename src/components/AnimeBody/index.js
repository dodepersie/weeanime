import Image from "next/image";
import Link from "next/link";

const AnimeBody = ({
  title,
  image,
  synopsis,
  background,
  ytId,
  score,
  rank,
  popularity,
  duration,
  rating,
  url,
}) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center font-bold">
        <div className="bg-base-200 rounded-lg p-2">
          <p>Score: {score}</p>
        </div>
        <div className="bg-base-200 rounded-lg p-2">
          <p>Rank: #{rank}</p>
        </div>
        <div className="bg-base-200 rounded-lg p-2">
          <p>Popularity: #{popularity}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-center font-bold">
        <div className="bg-base-200 rounded-lg p-2">
          <p>{duration}</p>
        </div>
        <div className="bg-base-200 rounded-lg p-2">
          <p>{rating}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          loading="lazy"
          className="w-full max-h-full object-cover"
        />
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${ytId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <article className="space-y-4">
        <div className="space-y-3">
          <h1 className="text-xl border-b-2 py-2">Synopsis:</h1>
          <p className="leading-relaxed">{synopsis}</p>
        </div>

        <div className="space-y-3">
          <h1 className="text-xl border-b-2 py-2">Background:</h1>
          <p className="leading-relaxed">{background}</p>
        </div>

        <div>
          <Link href={url} target="_blank" className="underline hover:text-indigo-400">
            More info from MyAnimeList..
          </Link>
        </div>
      </article>
    </div>
  );
};

export default AnimeBody;
