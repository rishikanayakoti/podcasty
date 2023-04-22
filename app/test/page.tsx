import fetchPodcasts from "@/sanity/utils/fetchPodcasts";
import React from "react";

const Test = async () => {
  let pods = await fetchPodcasts();
  console.log(pods);

  return (
    <div className="w-full">
      {pods.map((pod: any) => {
        return <audio key={pod.title} src={pod.audio} controls />;
      })}
    </div>
  );
};

export default Test;
