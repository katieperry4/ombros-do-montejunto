import { Link } from "react-router-dom";
import { Banner } from "../components";

const Land = () => {
  return (
    <>
      <Banner />
      <div className="page-div">
        <div className="pb-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
          <h1 className="font-serif text-5xl p-4">The Land</h1>
          <p className="px-4 lg:px-12 xl:px-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            fugiat voluptas culpa mollitia totam tenetur quas perferendis,
            itaque minus at dolores, sint doloremque suscipit facere alias autem
            soluta voluptates explicabo! Iure laborum culpa modi architecto
            mollitia voluptate quaerat tempora accusantium exercitationem soluta
            enim dolorem molestias consequatur tenetur hic repudiandae dicta,
            ducimus itaque ad corporis esse? Eos sequi cum tempore esse.
          </p>
        </div>
        <div className="flex flex-col items-center m-4">
          <h3 className="text-2xl">Come visit us!</h3>
          <button className=" m-4 btn bg-light-green hover:bg-medium-green">
            <Link to="/winery">Winery</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Land;

//about the land
//iframe map
