import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  // space: "1wt13v6p9g75",
  space: "blftkadgaae2",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchTweets = () => {
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    try {
      const response = await client.getEntries({
        content_type: "winemakerBlog",
        order: "-fields.date",
      });
      console.log(response);
      const tweets = response.items.map((content) => {
        console.log(content.fields.date);
        console.log(content.fields.tweet);
        const tweet = content.fields.tweet;
        const date = content.fields.date;
        const headerImagesObject = content.fields.photos;
        const id = content.sys.id;
        const imageFileArray = [];
        headerImagesObject.forEach(function (image) {
          const file = image.fields.file.url;
          imageFileArray.push(file);
        });
        console.log(imageFileArray);
        return { tweet, date, imageFileArray, id };
      });
      setTweets(tweets);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getTweets();
  }, []);
  return { loading, tweets };
};
