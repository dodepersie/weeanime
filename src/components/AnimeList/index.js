"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {api.data?.map((anime) => {
        return (
          <div key={anime.mal_id}>
            <Link href={`/anime/${anime.mal_id}`}>
              <div className="card bg-base-100 shadow-lg image-full transition-all hover:-translate-y-1">
                <figure>
                  <Image
                    src={anime.images.webp.large_image_url}
                    alt={anime.title}
                    width={300}
                    height={300}
                    className="w-full max-h-64"
                    priority
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl md:text-lg">{anime.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;