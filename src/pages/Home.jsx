// import image from "../assets/photos/full-white-rows.jpg";

import { Banner, Email, Instagram } from "../components";
import familyImage from "../assets/photos/family-vineyard.jpg";
import fullWhiteRowsImage from "../assets/photos/full-white-rows.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="page-div">
        {/* About Section */}
        <div className="p-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
          <h1 className="text-5xl text-center p-4 font-serif tracking-wider">
            Ombros Do Montejunto
          </h1>
          <h2 className="text-center text-2xl pt-16">About Us</h2>
          <p className="text-left p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aliquid eaque quaerat? Quas at aliquid magnam esse sed facere quod,
            facilis, quibusdam, in autem voluptatum. Dolores repudiandae
            quibusdam quis veritatis. Reiciendis natus consequatur odio facilis
            numquam, labore, officiis ea, incidunt nobis nesciunt deleniti modi?
            Animi labore voluptatibus eius, repellat, sunt doloremque beatae
            ipsam, praesentium rerum ipsum sit cupiditate commodi mollitia!
            Quidem vitae reprehenderit voluptate distinctio, laboriosam sequi
            qui quae assumenda, enim accusamus eaque consectetur. Quia,
            laudantium beatae. Tempore sunt ipsum doloribus? Nesciunt facilis
            incidunt sed eveniet a labore exercitationem fugiat.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aliquid eaque quaerat? Quas at aliquid magnam esse sed facere quod,
            facilis, quibusdam, in autem voluptatum. Dolores repudiandae
            quibusdam quis veritatis. Reiciendis natus consequatur odio facilis
            numquam, labore, officiis ea, incidunt nobis nesciunt deleniti modi?
            Animi labore voluptatibus eius, repellat, sunt doloremque beatae
            ipsam, praesentium rerum ipsum sit cupiditate commodi mollitia!
            Quidem vitae reprehenderit voluptate distinctio, laboriosam sequi
            qui quae assumenda, enim accusamus eaque consectetur. Quia,
            laudantium beatae. Tempore sunt ipsum doloribus? Nesciunt facilis
            incidunt sed eveniet a labore exercitationem fugiat.
          </p>
          <button
            type="button"
            className="bg-light-green btn hover:bg-medium-green"
          >
            <Link to="/about">Learn More</Link>
          </button>
        </div>
        <div className="py-8 h-100">
          <img
            className="w-full"
            src={familyImage}
            alt="Kirby family in the vineyard"
          />
        </div>
        {/* Our Winery Section */}
        <div className="p-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
          <h2 className="text-center text-2xl pt-8">Our Winery</h2>
          <p className="text-left p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aliquid eaque quaerat? Quas at aliquid magnam esse sed facere quod,
            facilis, quibusdam, in autem voluptatum. Dolores repudiandae
            quibusdam quis veritatis. Reiciendis natus consequatur odio facilis
            numquam, labore, officiis ea, incidunt nobis nesciunt deleniti modi?
            Animi labore voluptatibus eius, repellat, sunt doloremque beatae
            ipsam, praesentium rerum ipsum sit cupiditate commodi mollitia!
            Quidem vitae reprehenderit voluptate distinctio, laboriosam sequi
            qui quae assumenda, enim accusamus eaque consectetur. Quia,
            laudantium beatae. Tempore sunt ipsum doloribus? Nesciunt facilis
            incidunt sed eveniet a labore exercitationem fugiat.
          </p>
          <button
            type="button"
            className="bg-light-green btn hover:bg-medium-green"
          >
            <Link to="/winery">Learn More</Link>
          </button>
        </div>
        <div className="py-8 h-100">
          <img
            className="w-full"
            src={fullWhiteRowsImage}
            alt="Kirby family in the vineyard"
          />
        </div>
        <div className="p-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
          <h2 className="text-center text-2xl pt-8">Follow Along</h2>
          <p className="text-left p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aliquid eaque quaerat? Quas at aliquid magnam esse sed facere quod,
            facilis, quibusdam, in autem voluptatum. Dolores repudiandae
            quibusdam quis veritatis. Reiciendis natus consequatur odio facilis
            numquam, labore, officiis ea, incidunt nobis nesciunt deleniti modi?
            Animi labore voluptatibus eius, repellat, sunt doloremque beatae
            ipsam, praesentium rerum ipsum sit cupiditate commodi mollitia!
            Quidem vitae reprehenderit voluptate distinctio, laboriosam sequi
            qui quae assumenda, enim accusamus eaque consectetur. Quia,
            laudantium beatae. Tempore sunt ipsum doloribus? Nesciunt facilis
            incidunt sed eveniet a labore exercitationem fugiat.
          </p>
          <button
            type="button"
            className="bg-light-green btn hover:bg-medium-green"
          >
            <Link to="/news">News</Link>
          </button>
        </div>
        {/* form */}

        <Email />
        <Instagram />
      </div>
    </>
  );
};

export default Home;
