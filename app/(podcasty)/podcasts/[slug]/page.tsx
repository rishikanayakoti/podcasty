import React from "react";
import Image from "next/image";
import { fetchPodcast } from "@/sanity/utils/podcasts";
import {
  fetchFavoriteCount,
  fetchFavoritedByUser,
  fetchuserFavoritePodcasts,
} from "@/firestore/utils/favorite";
import { SignedIn, SignedOut, auth } from "@clerk/nextjs/app-beta";
import AddToFavoriteButton, { RemoveFromFavorite } from "./Favorite";

type Slug = {
  params: {
    slug: string;
  };
};

export interface FavoriteProps {
  _id: string;
  userId: string;
}

export interface PodcastProps {
  _id: string;
  title: string;
  _slug: string;
  author: string;
  desc: string;
  notes: string;
  bannerURL: string;
  audioURL: string;
  categories: string[];
}

const PodcastPage = async ({ params: { slug } }: Slug) => {
  const { userId } = auth();
  const { title, author, desc, bannerURL, audioURL, categories, _id } =
    await fetchPodcast(slug);
  const favorites = await fetchFavoriteCount(_id);
  const favoriteByUser = await fetchFavoritedByUser(userId!, _id);
  console.log(favoriteByUser);

  return (
    <div className="body-font font-mabry">
      <p className="text-center my-4 text-4xl font-bold">{title}</p>
      <div className="mb-5 flex bg-[#f4f4f1] flex-col justify-center lg:flex lg:flex-row lg:justify-evenly lg:items-center h-[280px]">
        <div className="border-2 border-black rounded-lg text-center w-full p-3 lg:mr-3 hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:shadow-lg">
          <div className="w-full h-[196px] relative rounded-lg">
            <Image src={bannerURL} alt={title} fill />
          </div>
          <div className="w-full flex justify-center">
            <audio src={audioURL} controls />
          </div>
        </div>
        <div className="border-2 border-black rounded-lg w-[50%] flex flex-col h-full p-3 bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:shadow-lg">
          <p className="pb-1">Author: {author}</p>
          <p className="pb-1">
            Category:{" "}
            {categories.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </p>
          <p className="pb-1">Favorites: {favorites ?? <span>loading</span>}</p>
        </div>
      </div>
      <div className="my-4">
        <SignedIn>
          {favoriteByUser > 0 && (
            /* @ts-ignore */
            <RemoveFromFavorite userId={userId!} _id={_id} />
          )}
          {favoriteByUser == 0 && (
            /* @ts-ignore */
            <AddToFavoriteButton _id={_id} userId={userId!} />
          )}
        </SignedIn>
      </div>
      <SignedOut>
        <p>Login to add to favorites</p>
      </SignedOut>
      <div className="flex-col my-3">
        <p className="text-xl font-semibold">Description</p>
        <p className="p-2 bg-white border-2 border-black rounded-lg mt-2">
          {desc}
        </p>
      </div>
      <div className="flex lg:flex-row justify-center sm:flex-col sm:mt-2">
        <div className="sm:flex sm:flex-row sm:justify-between sm: w-auto">
          <button className="p-2 m-2 border-2 border-black rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2 sm:w-1/2">
            More from [Author Name]
          </button>
          <button className="p-2 m-2 border-2 border-black rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2 sm:w-1/2">
            More from [This TopicName]
          </button>
        </div>
        <div className="sm:flex sm:flex-col">
          <button className="p-2 m-2 border-2 border-black rounded-lg bg-[#000000] text-white hover:bg-[#FF90E7] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2">
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
