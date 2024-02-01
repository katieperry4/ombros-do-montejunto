import { Banner } from "../components/";
import roy from "../assets/people/roy.jpg";
import diana from "../assets/people/diana.jpg";
import harry from "../assets/people/harry.jpg";
const About = () => {
  return (
    <>
      <Banner />
      <div className="page-div">
        <div className="pb-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
          <h1 className="font-serif text-5xl p-4">Story</h1>
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
        <div className="bg-dark-green p-12 rounded w-2/3 m-12 flex items-center justify-center">
          <h2 className="italic text-white">
            This is a statement on why we're so awesome
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl p-2">Meet the team</h2>
          <div className="flex items-center">
            <div className="flex flex-col items-center p-4">
              <img
                className="w-32 lg:w-64 rounded-full"
                src={harry}
                alt="Harry Kirby"
              />
              <h4 className="text-2xl py-4">Harry</h4>
              <p>Winemaker</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img
                className="w-32 lg:w-64 rounded-full"
                src={roy}
                alt="Roy Kirby"
              />
              <h4 className="text-2xl py-4">Roy</h4>
              <p>Job title</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img
                className="w-32 lg:w-64 rounded-full"
                src={diana}
                alt="Diana Kirby"
              />
              <h4 className="text-2xl py-4">Diana</h4>
              <p>Job title</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
