import Header from "@/components/AnimeList/Header";

const Page = ({params}) => {
    const { keyword } = params

  return (
    <div>
      <section id="searchAnime" className="space-y-3">
        <Header
          title={`Halaman: Anime ${keyword}`}
        />
      </section>
    </div>
  );
};

export default Page;
