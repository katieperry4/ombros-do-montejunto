import { Banner } from "../components";
import harry from "../assets/people/harry.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Banner />
      <div className="page-div">
        <div className="pb-8 flex flex-col items-center">
          <h1 className="font-serif text-5xl p-4">News</h1>
          <h3>Would you like to learn more about us?</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex flex-col items-center w-1/2 bg-light-green p-4 rounded hover:opacity-70">
            <Link to={"/news/blog"}>
              <button>
                <img
                  src={harry}
                  alt="The Kirby family in one of the vineyards"
                  className="rounded"
                />
                <h3 className="py-4 text-xl">Progress Blog</h3>
                <h4>A blurb here about what this blog does</h4>
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-1/2 bg-light-green p-4 rounded hover:opacity-70">
            <Link to={"/news/winemaker-blog"}>
              <button>
                <img
                  src={harry}
                  alt="A photo of our winemaker, Harry"
                  className="rounded"
                />
                <h3 className="py-4 text-xl">Winemaker&apos;s Blog</h3>
                <h4>A blurb here about what this blog does</h4>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Posts /> */}
    </div>
  );
};

export default News;
