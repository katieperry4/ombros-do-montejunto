import { useFetchPosts } from "../functions/fetchPosts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

const Posts = () => {
  const { loading, posts } = useFetchPosts();
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
        <h1 className="font-serif text-5xl p-4">Progress Blog</h1>
        <p className="m-2 text-lg">follow along as we build our winery etc.</p>
      </div>
      <div className="bg-blog-bg pt-12 rounded">
        {posts.map((content) => {
          const { title, date, post, imageFileArray, id } = content;
          return (
            <article key={id} className="mb-24 mx-6 xl:mx-64 lg:mx-32">
              <div className="xl:flex xl:flex-col xl:items-center">
                <Splide
                  className="slideshow-container"
                  options={{
                    gap: "1rem",
                    type: "loop",
                    width: "50vw",
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
                  <h3 className="text-4xl font-bold">{title}</h3>
                  <h5>{date}</h5>
                </div>
                <div className="post-container">
                  {post.map((content) => {
                    let nodeType = content.nodeType;
                    if (nodeType == "embedded-asset-block") {
                      let bodyImage = content.data.target.fields.file.url;
                      let imageDesc = content.data.target.fields.title;
                      return (
                        <img
                          src={bodyImage}
                          alt={imageDesc}
                          key={imageDesc}
                          className="h-64 m-4 rounded"
                        />
                      );
                    }
                    if (nodeType == "paragraph") {
                      let pContent = content.content[0].value;
                      if (pContent == "") {
                        return <hr key={pContent} className="opacity-0"></hr>;
                      } else {
                        return <p key={pContent}>{pContent}</p>;
                      }
                    }
                    if (/^heading-[1-8]$/.test(nodeType)) {
                      let nodeTypeArray = Array.from(nodeType);
                      let headerType = nodeTypeArray[nodeTypeArray.length - 1];
                      let headerValue = content.content[0].value;
                      let headerClasses = `text-2xl`;
                      if (headerType === "1") {
                        headerClasses = `text-4xl font-bold my-4`;
                      } else if (headerType === "2") {
                        headerClasses = `text-3xl font-semibold my-4`;
                      } else if (headerType === "3") {
                        headerClasses = `text-2xl font-semibold my-4`;
                      } else if (headerType === "4") {
                        headerClasses = `text-1xl font-semibold my-4`;
                      } else if (headerType === "5") {
                        headerClasses = `text-xl font-semibold my-4`;
                      }
                      return React.createElement(
                        `h${headerType}`,
                        { key: headerValue, className: headerClasses },
                        headerValue
                      );
                    }
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
