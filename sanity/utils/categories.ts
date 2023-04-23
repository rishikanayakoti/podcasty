import { groq } from "next-sanity";
import { client } from "./podcasts";
import { CategoryProps } from "@/components/Trending";

export const fetchCategories = async (): Promise<CategoryProps[]> => {
  const query = groq`*[_type == "category"]{
    title,
    "desc": description,
  }`;
  return await client.fetch(query);
};
