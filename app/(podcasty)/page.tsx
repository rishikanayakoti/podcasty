import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Trending from "@/components/Trending";
import { fetchPodcasts } from "@/sanity/utils/podcasts";

export default async function Home() {
  const podcasts = await fetchPodcasts();

  return (
    <div>
      {/* @ts-ignore */}
      <Trending />
      {/* Main Podcasts */}
      <h1 className="font-bold text-xl">Recommended</h1>
      <div className="w-full flex justify-start overflow-x-sroll no-scrollbar">
        {podcasts.map((podcast) => {
          return <Card key={podcast._slug} {...podcast} />;
        })}
      </div>
      {/* Card Components */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
