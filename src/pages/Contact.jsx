import { Banner, Email, Instagram } from "../components/index";
import mapImg from "../assets/replace/map.png";
const Contact = () => {
  return (
    <>
      <Banner />
      <div className="page-div">
        <h1 className="font-serif text-5xl p-4">Get in contact!</h1>
        <div className="flex flex-col justify-evenly md:flex-row">
          {/* hours */}
          <div className=" m-12">
            <h2 className="font-bold">Hours:</h2>
            <ul>
              <li>Monday: 0:00-0:00</li>
              <li>Tuesday: 0:00-0:00</li>
              <li>Wednesday: 0:00-0:00</li>
              <li>Thursday: 0:00-0:00</li>
              <li>Friday: 0:00-0:00</li>
              <li>Saturday: 0:00-0:00</li>
              <li>Sunday: 0:00-0:00</li>
            </ul>
          </div>
          {/* contact info */}
          <div className="m-12">
            <h2 className="font-bold">Contact Info:</h2>
            <ul>
              <li className="">Address Line 1</li>
              <li className="">Address Line 2</li>
              <li className="">Address Line 3</li>
              <li className="">Address Line 4</li>
              <li className="">444-444-444</li>
              <li
                className=" underline"
                onClick={() => (window.location = "mailto:email@email.com")}
              >
                email@email.com
              </li>
              <li className="footer-li">Social Icons</li>
            </ul>
          </div>
        </div>
        {/* map */}
        <div className="w-96 ">
          <img src={mapImg} alt="image to replace for map iFrame" />
        </div>
        <Email />
        <Instagram />
      </div>
    </>
  );
};

export default Contact;
