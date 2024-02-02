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
      <div className="pb-4 flex flex-col items-center mx-6 md:mx-18 lg:mx-32 xl:mx-72">
        <h1 className="font-serif text-5xl p-4 mb-4">Our Winery</h1>
        <h2 className="italic">photo of winery or plans</h2>
        <div>
          <p className="px-4 lg:px-12 xl:px-24">
            Situated in the village of Avenal close by the vineyards the winery
            looks out through the valley mouth towards the Atlantic Ocean.
          </p>
          <hr />
          <p className="px-4 lg:px-12 xl:px-24">
            Built over 2 years between 2024 and 2026 it is modern with the
            emphasis on continuing the focus of technical excellence started in
            the vineyards.
          </p>
          <hr />
          <p className="px-4 lg:px-12 xl:px-24">
            The total area is 450 sqM which is divided into a shop, laboratory
            and office space, workers facilities, cellar, wine making and
            agricultural equipment spaces. Designed by local architects and
            built by local builders the winery also offers other local wine
            growers the opportunity to explore the full potential for their
            wines by offering low-cost contract wine making services.
          </p>
          <hr />
          <p className="px-4 lg:px-12 xl:px-24">
            The focus of the design is on technical excellence, minimal
            environmental impact, and workers safety and wellbeing.
          </p>
          <hr />
          <p className="px-4 lg:px-12 xl:px-24">
            On arrival at the winery from the vineyard the grapes go onto the
            sorting table before passing on to the destemmer and for the whites
            the wine press. The target is to have less than 8 hours between
            picking and the filling of the fermentation tanks. Fermentation is
            carried out in either 3,000 or 3,500 litre temperature controlled
            stainless steel tanks. Ageing, depending on the wines takes place
            either in stainless steel tanks or oak barrels or bottles.
          </p>
          <hr />
          <p className="px-4 lg:px-12 xl:px-24">
            Lovers of wines where volatile acidity or bretnomyces are used to
            introduce character, complexity or “typicity” (tipicidade or
            tipicité) should look elsewhere for their wines.
          </p>
        </div>
      </div>
      {/* winery photos */}
      <div className="flex items-center justify-center">
        <img
          className="w-1/3 rounded-xl"
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
