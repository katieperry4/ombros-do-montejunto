import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "1wt13v6p9g75",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: "wineTest",
      });
      console.log(response);
      const posts = response.items.map((content) => {
        const { title, date, post } = content.fields;
        const id = content.sys.id;
        const desc = content?.fields?.image?.fields?.description;
        const img = content?.fields?.image?.fields?.file?.url;
        return { title, date, post, id, img, desc };
      });
      setPosts(posts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return { loading, posts };
};
