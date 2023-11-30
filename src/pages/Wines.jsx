import { Link } from "react-router-dom";
import image from "../assets/replace/stock-wine-cheese.jpg";
import { Banner, Instagram } from "../components";

const Wines = () => {
  return (
    <>
      <Banner />
      <div className="page-div">
        <div className="flex flex-col items-center">
          <img
            className="my-12 w-1/3 rounded"
            src={image}
            alt="wine and cheese board"
          />
          <h1 className="font-serif text-4xl md:text-5xl p-4">
            Page under construction
          </h1>
          <h3>Follow along as we build our winery</h3>
          <button className="btn m-4 bg-light-green hover:bg-medium-green">
            <Link to="/news">News</Link>
          </button>
          <Instagram />
        </div>
      </div>
    </>
  );
};

export default Wines;
