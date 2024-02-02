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
            className="my-12 w-1/4 rounded"
            src={image}
            alt="wine and cheese board"
          />
          <h1 className="mb-8">Our Wines</h1>
          <div className="md:mx-18 lg:mx-32 xl:mx-72 flex flex-col gap-24">
            <div className="px-4 lg:px-12 xl:px-24">
              <h2>Vital</h2>
              <h4>image?</h4>
              <h4>maybe list which vineyards?</h4>
              <p>
                A historic grape variety reflecting the Atlantic Coast of
                Portugal where it is predominantly grown. Our vineyards are
                situated at altitude in a secluded valley facing the Atlantic
                breeze.
              </p>
              <hr />
              <p>
                Short bottle ageing allows for the development of its wonderful
                and unique structure The wine is fresh, dry and crisp with a
                delicate minerality and delightful mouthfeel, light acidity with
                subtle notes of sweet spices such as cinnamon and nutmeg.
              </p>
              <hr />
              <p>
                Extended bottle age increases the length and complexity with the
                development of fleshy fruit stones and apple skins.
              </p>
            </div>
            <div className="px-4 lg:px-12 xl:px-24">
              <h2>Sparkling Wine</h2>
              <h4>image?</h4>
              <p>
                Made from a blend of our own handpicked grapes picked in a
                single harvest and grown at altitude in a secluded valley facing
                the Atlantic. This means that wines can vary between vintages.
                The unique climate and soil giving the wine an exciting
                freshness and exuberance.
              </p>
              <hr />
              <p>
                The wines are made using the classic champagne method but this
                is not a traditional Portuguese sparkling wine or a French
                champagne look-a-like. The are Brut (or dry), have balanced
                acidity and freshness along with a depth and complexity coming
                from the blend and bottle aging process. The wines are fresh and
                dry with citrus and aromatic notes when young. Ageing in bottle
                leads to further development of the initially subtle apple and
                almond pastry notes. Extended aging will see the typical brioche
                notes coming to the fore.
              </p>
            </div>
            <div className="px-4 lg:px-12 xl:px-24">
              <h2>Syrah</h2>
              <h4>image?</h4>
              <p>
                The Atlantic climate and altitude means that these wines are
                lower in alcohol and much more elegant than your typical Syrah.
                The vineyards are located at altitude in a secluded valley
                facing the Atlantic breeze.
              </p>
              <hr />
              <p>
                Handpicked to deliver the perfect balance of acidity and
                maturity the wines are vinified to deliver wines of complexity,
                balance and beautifully soft yet structured tanins – these are
                not tannin fruit bombs but more Côte Rotie in style. The
                malolactic is carried out in stainless steel to maintain as much
                as possible of the original fresh clean characters of the wine.
                Depending on the year young wines will contain the black and
                blueberry notes typically associated with Syrah , along with
                pepper and plum, but not so much the violet notes which in
                Portugal are usually obtained by blending the wine with Touriga
                Nacional.
              </p>
              <hr />
              <p>
                Ageing in bottle can lead to the further softening of the tanins
                and the development of earthy and soft leather characters.
              </p>
            </div>
          </div>
          <hr />
          <hr />
          <hr />
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
