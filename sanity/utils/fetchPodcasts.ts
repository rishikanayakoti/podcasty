import { createClient, groq } from "next-sanity";

const fetchPodcasts = async () => {
  const client = createClient({
    projectId: "k9iiqkx5",
    dataset: "production",
  });

  const query = groq`*[_type == "podcast"] {
    title,
    "audio": audio.asset -> url
  }`;

  return await client.fetch(query);
};

export default fetchPodcasts;
