import { Link } from "react-router-dom";
// import mapImg from "../assets/replace/map.png";

const Footer = () => {
  return (
    <>
      {/* main container */}
      <div className="h-2/5 p-4 lg:h-96 bg-dark-green mt-16 flex flex-col md:flex-row items-center px-24 justify-evenly">
        {/* map */}
        {/* <div className="w-96 ">
          <img src={mapImg} alt="image to replace for map iFrame" />
        </div> */}
        {/* contact */}
        <div className="px-6">
          <ul>
            <li className="footer-li">Address Line 1</li>
            <li className="footer-li">Address Line 2</li>
            <li className="footer-li">Address Line 3</li>
            <li className="footer-li">Address Line 4</li>
            <li className="footer-li">444-444-444</li>
            <li
              className="footer-li underline"
              onClick={() => (window.location = "mailto:hello@ombrosdm.com")}
            >
              hello@ombrosdm.com
            </li>
            <li className="footer-li">Social Icons</li>
          </ul>
        </div>
        {/* navigation */}
        <div className="px-6">
          <ul>
            <li className="footer-li hover:text-light-blue">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-li hover:text-light-blue">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-li hover:text-light-blue">
              <Link to="/land">Land</Link>
            </li>
            <li className="footer-li hover:text-light-blue">
              <Link to="/winery">Winery</Link>
            </li>
            <li className="footer-li hover:text-light-blue">
              <Link to="/wines">Our Wines</Link>
            </li>
            <li className="footer-li hover:text-light-blue">
              <Link to="/news">News</Link>
            </li>
            <li className="footer-li hover:text-light-blue">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* terms */}
      <div className="bg-dark-green flex flex-col items-center py-4">
        <h5 className="text-white text-xs">
          &copy; {new Date().getFullYear()}
          <span> Ombros Do Montejunto</span>
        </h5>
        <h5 className="text-white text-xs">All rights reserved</h5>
      </div>
    </>
  );
};

export default Footer;
