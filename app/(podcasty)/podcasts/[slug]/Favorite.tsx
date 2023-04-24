"use client";

import { addToFavorite, removeFromFavorite } from "@/firestore/utils/favorite";
import { FavoriteProps } from "./page";

const AddToFavoriteButton = async ({ _id, userId }: FavoriteProps) => {
  const onClickHandler = async () => {
    await addToFavorite(_id, userId);
  };

  return (
    <span
      onClick={onClickHandler}
      className="p-3 my-2 outline hover:cursor-pointer rounded-lg bg-[#f3a642] text-black hover:bg-[#FF90E7] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2"
    >
      Add to favorites
    </span>
  );
};

export const RemoveFromFavorite = async ({ _id, userId }: FavoriteProps) => {
  const onClickHandler = async () => {
    await removeFromFavorite(_id, userId);
  };

  return (
    <span
      onClick={onClickHandler}
      className="p-3 my-2 outline hover:cursor-pointer rounded-lg hover:bg-[#f3a642] text-black bg-[#FF90E7] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2"
    >
      Remove from Favorites
    </span>
  );
};

export default AddToFavoriteButton;
