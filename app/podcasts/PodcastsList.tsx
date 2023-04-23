import React from 'react';
import Link from 'next/link';

const fetchPodcasts = async() => {
  const res = await fetch(``);
  {/* @ts-ignore */}
  const podcasts: Podcast[] = await res.json();
  return podcasts;
}

async function PodcastsList() {
  const podcasts = await fetchPodcasts();

  // return (
    // {podcasts.map((podcast) => {
    //   return (
    //     <div>
    //       <p key={podcast.id}>
    //         <Link href={`/podcasts/${podcast.id}`}>Podcast Id: {podcast.id}</Link>
    //       </p>
    //       <p>
    //         {podcast.title}
    //       </p>
    //       <br />
    //     </div>
    //   )
    // })}
  // )
}

export default PodcastsList