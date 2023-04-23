import { fetchPodcasts } from "@/sanity/utils/podcasts";
import React from "react";
import Card from "./Card";

const MainPodcasts = async () => {
  const podcasts = await fetchPodcasts();

  return (
    <div>
      {podcasts.map((podcast) => {
        return <Card {...podcast} />;
      })}
    </div>
  );
};

export default MainPodcasts;
