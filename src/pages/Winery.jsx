import { Banner } from "../components";
import { Link } from "react-router-dom";
import glassesPhoto from "../assets/replace/stock-red-glasses.jpg";
import sunsetVineyard from "../assets/replace/stock-sunset-over-hills.jpg";
import tastingPhoto from "../assets/replace/stock-close-white.jpg";
import picnicPhoto from "../assets/replace/stock-under-vines.jpg";

const Winery = () => {
  return (
    <>
      <Banner />
      {/* intro */}
      <div className="pb-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
        <h1 className="font-serif text-5xl p-4">Our Winery</h1>
        <p className="px-4 lg:px-12 xl:px-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat
          voluptas culpa mollitia totam tenetur quas perferendis, itaque minus
          at dolores, sint doloremque suscipit facere alias autem soluta
          voluptates explicabo! Iure laborum culpa modi architecto mollitia
          voluptate quaerat tempora accusantium exercitationem soluta enim
          dolorem molestias consequatur tenetur hic repudiandae dicta, ducimus
          itaque ad corporis esse? Eos sequi cum tempore esse.
        </p>
      </div>
      {/* winery photos */}
      <div className="flex items-center justify-center">
        <img
          className="w-1/2 rounded-xl"
          src={glassesPhoto}
          alt="Two red wine glasses"
        />
      </div>
      {/* event info */}
      <div className="my-6 flex flex-col items-center">
        <h1 className="text-2xl m-6 font-bold">Events</h1>
        {/* tours */}
        <div className="flex flex-col items-center md:flex-row md:mx-12 lg:mx-32">
          <img
            className="w-1/3 rounded m-4"
            src={sunsetVineyard}
            alt="vineyard at sunset"
          />
          <div className="m-4">
            <h2 className="font-bold text-xl">Tours</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              eveniet ullam dignissimos voluptatem at eligendi magnam accusamus
              laboriosam hic illum! Explicabo eaque reprehenderit doloribus
              quidem esse incidunt illum nihil commodi.
            </p>
            <div className="flex items-center justify-center">
              <button className="my-6 btn bg-light-green hover:bg-medium-green">
                <Link to="/contact">Email to book</Link>
              </button>
            </div>
          </div>
        </div>
        {/* tastings */}
        <div className="flex flex-col items-center md:flex-row-reverse md:mx-12 lg:mx-32">
          <img
            className="w-1/3 rounded m-4"
            src={tastingPhoto}
            alt="vineyard at sunset"
          />
          <div className="m-4">
            <h2 className="font-bold text-xl">Tastings</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              eveniet ullam dignissimos voluptatem at eligendi magnam accusamus
              laboriosam hic illum! Explicabo eaque reprehenderit doloribus
              quidem esse incidunt illum nihil commodi.
            </p>
            <div className="flex items-center justify-center">
              <button className="my-6 btn bg-light-green hover:bg-medium-green">
                <Link to="/contact">Email to book</Link>
              </button>
            </div>
          </div>
        </div>
        {/* picnics */}
        <div className="flex flex-col items-center md:flex-row md:mx-12 lg:mx-32">
          <img
            className="w-1/3 rounded m-4"
            src={picnicPhoto}
            alt="vineyard at sunset"
          />
          <div className="m-4">
            <h2 className="font-bold text-xl">Picnics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              eveniet ullam dignissimos voluptatem at eligendi magnam accusamus
              laboriosam hic illum! Explicabo eaque reprehenderit doloribus
              quidem esse incidunt illum nihil commodi.
            </p>
            <div className="flex items-center justify-center">
              <button className="my-6 btn bg-light-green hover:bg-medium-green">
                <Link to="/contact">Email to book</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* visiting info */}
      <div className="m-6 flex items-center flex-col">
        <h2 className="text-2xl">Visiting Info:</h2>
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
      </div>
    </>
  );
};

export default Winery;

//banner
//about winery
//visiting info
//=> hours
//=> Tours
//=> tastings
//=> picnics
//photo carousel
//product highlights
//link to shop
