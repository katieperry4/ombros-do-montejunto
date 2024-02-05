import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  // space: "1wt13v6p9g75",
  space: "blftkadgaae2",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: "ombrosBlog",
      });
      const posts = response.items.map((content) => {
        const title = content.fields.postTitle;
        const post = content.fields.postContent.content;
        const date = content.fields.date;
        const headerImagesObject = content.fields.photoSlideshow;
        const id = content.sys.id;
        const imageFileArray = [];
        headerImagesObject.forEach(function (image) {
          const file = image.fields.file.url;
          imageFileArray.push(file);
        });
        return { title, date, post, imageFileArray, id };
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
