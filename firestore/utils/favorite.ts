import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface FavoriteProps {
  podcastId: string;
  userId: string;
}

export const addToFavorite = async ({ podcastId, userId }: FavoriteProps) => {
  const collectionRef = collection(db, "likes");
  const data = {
    podcastId,
    userId,
  };
  await addDoc(collectionRef, data);
};

export const userFavoritePodcasts = async (
  userId: string
): Promise<string[]> => {
  const collectionRef = collection(db, "likes");
  const q = query(collectionRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);
  let listOfPodcasts: string[] = [];
  snapshot.forEach((doc) => {
    listOfPodcasts.push(doc.data().podcastId);
  });
  return listOfPodcasts;
};

export const countOfFavorites = async (podcastId: string): Promise<number> => {
  const collectionRef = collection(db, "likes");
  const q = query(collectionRef, where("podcastId", "==", podcastId));
  const snapshot = await getCountFromServer(q);
  return snapshot.data().count;
};
