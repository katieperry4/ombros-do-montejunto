import { Splide, SplideSlide } from "@splidejs/react-splide";
// import React from "react";
import { useFetchTweets } from "../functions/fetchTweets";

const Tweets = () => {
  const { loading, tweets } = useFetchTweets();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-3xl ">Loading blog....</h1>
      </div>
    );
  }
  return (
    <div className="mt-2 mx-6">
      <div className="mb-12 flex flex-col items-center justify-center">
        <h1 className="font-serif text-5xl p-4">Winemaker&apos;s Blog</h1>
        <p className="m-2 text-lg">follow our winemaker</p>
      </div>
      <div>
        {tweets.map((content) => {
          const { date, tweet, imageFileArray, id } = content;
          return (
            <article
              key={id}
              className="mb-12 mx-6 xl:mx-64 lg:mx-32 bg-blog-bg px-12 py-4 rounded"
            >
              <div className="xl:flex xl:flex-col xl:items-center">
                <Splide
                  className="slideshow-container"
                  options={{
                    gap: "1rem",
                    type: "loop",
                    width: "20vw",
                    autoplay: true,
                    pagination: false,
                    speed: 3000,
                    interval: 4000,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                  }}
                >
                  {imageFileArray.map((image) => {
                    return (
                      <SplideSlide key={image}>
                        <div>
                          <img src={image} alt="image" />
                        </div>
                      </SplideSlide>
                    );
                  })}
                </Splide>
                <div className="flex justify-between items-center my-6 flex-col">
                  <h5>{date}</h5>
                  <h3 className="text-xl ">{tweet}</h3>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Tweets;
