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
      <div className="grid md:grid-cols-12 items-center gap-3">
        <div className="md:col-span-6">
          <Image
            src={image}
            width="500"
            height="500"
            alt={title}
            className="brightness-75 rounded-lg border-2 border-secondary transition-all hover:brightness-100"
          />
        </div>

        <div className="items-center md:col-span-6 space-y-3">
          <InfoBox title="Score:" data={score} />
          <InfoBox title="Rank:" data={`#${rank}`} />
          <InfoBox title="Popularity:" data={`#${popularity}`} />
          <InfoBox title="Duration:" data={duration} />
          <InfoBox data={rating} />
        </div>
      </div>

      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${ytId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg border-2 border-secondary shadow-md shadow-secondary/80"
      ></iframe>

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
            href={`${url}`}
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
