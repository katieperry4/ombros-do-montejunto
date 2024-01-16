import { Link } from "react-router-dom";
import { Banner } from "../components";

const Land = () => {
  return (
    <>
      <Banner />
      <div className="page-div">
        <div className="pb-4 flex flex-col items-center md:mx-18 lg:mx-32 xl:mx-96">
          <h1 className="font-serif text-5xl p-4">The Land</h1>
          <div className="bg-dark-green p-12 rounded w-2/3 m-12 flex items-center justify-center">
            <h2 className="italic text-white">
              “There’s something about that little circle of mountain, I drive
              there every morning and once you squeeze your way around the foot
              of the mountain, it’s like everything just goes quiet. The world
              is still out there, you can see it from the vineyards, but it’s
              far away.” <br></br> <br></br>-Harry Kirby, Winemaker
            </h2>
          </div>
          <div className="px-4 lg:px-12 xl:px-24">
            <p>
              Our vineyards are located on the northern slopes of Montejunto,
              within the winemaking region of Lisbon. The climate is a modest
              temperate climate throughout the year due to the heavy Atlantic
              influence from the north, with light rainfall throughout winter
              and spring. The area is known for it’s fruit farming due to it’s
              mild and easy climate throughout most of the year, with warm
              summers to push the ripening to it’s fullest. <br /> <br />
              The vineyards are located in four sites around Avenal: Frades,
              Loureiro, Oliviera, and Carvalhal.
            </p>
            <br />
            <div>
              <p>
                <strong>Frades:</strong>
                <br></br>Named after the “Fryers cowl” plant which grows in
                abundance under the vines every year in early winter to mid
                spring.
                <br />
                (Insert Pic, Harry to take)
                <br />
                On the North facing slopes of Montejunto, it is comprised: of
                fernão pires, an aromatic white grape known for it’s high sugar
                content; and Vital, a regional variety that has long been out of
                fashion due to it’s susceptibility to disease, it’s potential is
                only realized when grown at higher altitudes and it’s profile
                changes from a bland grape of low acidity, to a balanced wine
                with unique minerality and aromatics.The terrain is steep and
                well drained with a natural stream neighboring the length of the
                vineyard. It is maintained with an indigenous cover crop to help
                naturally fix nitrogen and increase microbial biodiversity in
                the soil. It’s altitude and northern facing slopes help to keep
                the grapes cool all year round, providing fresh white wines with
                no hint of sunburn and low alcohol.
              </p>
            </div>
            <br />
            <div>
              <p>
                <strong>Loureiro:</strong>
                <br></br>Named after the Laurel bushes that border the vineyard.
                <br />
                (Insert Pic)
                <br />
                This vineyard is East facing on the side of the hill at the
                entrance to Avenal from Vilar. It is comprised of mostly Syrah
                with some rows of Fernão pires. The syrah is a very popular
                variety in southern France, producing full bodied wines with
                strong tannins and slightly violet aromas when ripened
                properly.The terrain is inclined with a loamy-clay soil for half
                a meter before hitting bedrock. This combined with the
                inclination means that while the loam-clay mix is excellent at
                retaining water, the water table is very dependent on rainfall.
                This provides plenty of water in the winter and early spring
                when the vines are focused on “green growth”, but in the dry
                seasons of the summer and early Autumn, the berries ripe and the
                vine is put under drought stress, which increases the phenolic
                composition of the grapes.
              </p>
            </div>
            <br />
            <div>
              <p>
                <strong>Oliveira:</strong>
                <br></br>Named after the Olive grove situated next to the
                vineyard.
                <br />
                (Insert Pic)
                <br />
                Significantly flatter than the other vineyards on this list,
                Oliveira is comprised of mostly Syrah, with a few rows of
                Marselan, a relatively new grape variety first recorded in 1960,
                it has proven to be a workhorse of a variety, producing
                high-yield while still having excellent ageing potential.The
                terrain is only slightly inclined when compared to the rest of
                the region, with a deep loam-clay soil. This allows for the
                vines to dig deep into the soil and create solid networks of
                nutrient supplies, providing healthy vigorous vines that have
                potential for long lives. This vineyard is immovable pillar of
                our winery with hardy vines, good soil, and easy working
                conditions. Oliveira will never let you down.
              </p>
            </div>
            <br />
            <div>
              <p>
                <strong>Carvalhal:</strong>
                <br></br>Named after the Oak-bush forest situated at the peak of
                the hill above the vineyard.
                <br />
                (Insert Pic)
                <br />
                Steep, South facing and sheltered from the wind by forests and
                mountains. The three most important characteristics of a typical
                good vineyard. The variety here is Caladoc, the older cousin to
                Marselan, though Caladoc has a very different profile
                altogether.Similar to Burgundy, the forest at the top of the
                hill provides excellent shelter from the winds, as well as a
                nearby haven for biodiversity. When the rain falls, nutrients
                from the microbes of the forest floor are washed down hill to
                the vineyard, feeding the vines with a renewable source of
                fertilizer. The south facing aspect of the site provides a
                crucial 2-3 degrees more warmth per day, throughout the year,
                which is crucial to fully ripen grapes like caladoc. This
                warmer, dryer vineyard provides a full bodied, highly phenolic,
                highly tannic red wine with very strong flavours.
              </p>
            </div>
          </div>
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
