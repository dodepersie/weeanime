import Image from "next/image";
import Link from "next/link";
import InfoBox from "./InfoBox";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <InfoBox title="Score" data={score} />
        <InfoBox title="Rank" data={`#${rank}`} />
        <InfoBox title="Popularity" data={`#${popularity}`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="col-span-5">
          <InfoBox title="Duration" data={duration} />
        </div>
        <div className="col-span-7">
          <InfoBox title="Rating" data={rating} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          priority
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
          <h1 className="text-xl border-b-2 py-2">Synopsis</h1>
          {synopsis ? (
            <p className="leading-relaxed">{synopsis}</p>
          ) : (
            <p className="leading-relaxed">
              No synopsis information has been added to this title.
            </p>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-xl border-b-2 py-2">Background</h1>
          {background ? (
            <p className="leading-relaxed">{background}</p>
          ) : (
            <p className="leading-relaxed">
              No background information has been added to this title.
            </p>
          )}
        </div>

        <div>
          <Link
            href={url}
            target="_blank"
            className="underline hover:text-indigo-400"
          >
            More information from MyAnimeList..
          </Link>
        </div>
      </article>
    </div>
  );
};

export default AnimeBody;
