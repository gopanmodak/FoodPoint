import { Fade, Slide } from "react-awesome-reveal";
import { GiCirclingFish, GiMeal } from "react-icons/gi";
import { PiCoffeeFill } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";

import about1 from "../assets/about-ourstory.webp";
import BestFood from "./BestFood";
import RestaurantImages_1 from "../assets/Restaurant-1.webp";
import RestaurantImages_2 from "../assets/Restaurant-2.webp";
import RestaurantImages_3 from "../assets/Restaurant-3.webp";
import RestaurantImages_4 from "../assets/Restaurant-4.webp";

const Home = () => {
  return (
    <div className="p-3">
      {/*  Banner images */}
      <div
        className="hero min-h-screen -mt-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612939675110-fe3a0129a024?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content text-neutral-content text-start">
          <div className="max-w-md flex flex-col gap-2">
            <Slide>
              <h1 className="mb-5 text-5xl font-bold">Delicious Recipes</h1>
            </Slide>

            <Fade delay={1000} cascade damping={0.5}>
              <p className="mb-5 text-start">
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women.
              </p>
              <button className="btn btn-primary">Check Our Menu</button>
            </Fade>
          </div>
        </div>
      </div>

      {/* 4card section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-30">
        <div className="flex flex-col gap-3">
          <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
            {" "}
            <GiMeal />{" "}
          </span>
          <h3 className="text-orange-500 text-2xl">Enjoy Eating</h3>
          <p className="text-start text-gray-500">
            A gentle stream flows softly, weaving joy, flavor, and warmth into
            every shared bite together.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
            {" "}
            <GiCirclingFish />{" "}
          </span>
          <h3 className="text-orange-500 text-2xl">Fresh Sea Foods</h3>
          <p className="text-start text-gray-500 ">
            Ocean waves whisper freshness, carrying taste from deep waters,
            delivering nature’s gift to every shore.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
            {" "}
            <PiCoffeeFill />{" "}
          </span>
          <h3 className="text-orange-500 text-2xl">Cup of Coffees</h3>
          <p className="text-start text-gray-500">
            Morning rivers pour warmth, aroma rises gently, each sip awakens
            senses, weaving comfort and joy.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
            {" "}
            <TbMeat />{" "}
          </span>
          <h3 className="text-orange-500 text-2xl">Meat Eaters</h3>
          <p className="text-start text-gray-500">
            A rustic brook delivers flavor, carrying strength and tradition,
            weaving hearty delights into every feast.
          </p>
        </div>
      </div>

      {/* about our story */}

      <div className="grid grid-cols-2 gap-10 my-40">
        <div className="flex flex-col justify-center items-start gap-5">
          <Fade delay={1000} cascade damping={0.5}>
            <h2 className="text-3xl font-bold text-orange-500">
              About Our Story
            </h2>
            <p className="text-gray-700">
              Our story begins with a spark of passion, a quiet dream that grew
              into something larger than we ever imagined. Like a river flowing
              gently through valleys, carrying whispers of nature and tradition,
              our journey has been shaped by dedication, creativity, and the
              desire to share something meaningful with the world.
            </p>

            <button className="btn bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:shadow-amber-500">
              View Full Menu
            </button>
          </Fade>
        </div>

        <div className="flex justify-center items-center">
          <Slide>
            <img src={about1} alt="" className="h-84 object-cover rounded-2xl" />
          </Slide>
        </div>
      </div>

      {/*    find your food */}

      <div className="flex flex-col justify-center items-center gap-5">
        <Fade delay={1000} cascade damping={0.7}>
          <h2 className="text-3xl font-bold text-orange-500">
            Find Your Best Food{" "}
          </h2>
          <p className="text-gray-700 max-w-md text-center">
            A flowing stream carries taste and joy, guiding every heart to
            discover flavor, comfort, and delight together
          </p>
        </Fade>
      </div>
      <div>
        <BestFood />
      </div>

      {/* The Restaurant */}

      <div className="my-30">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-3xl font-bold uppercase text-orange-500 pb-5">
            the restaurant
          </h2>
          <p className="text-gray-600 max-w-xl ">
            Far beyond word‑mountains, blind texts dwell in Bookmarksgrove,
            beside Semantics’ coast, embraced by language’s vast ocean, weaving
            timeless meaning.
          </p>
        </div>
<Fade damping={0.5} cascade delay={1000}>

  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
          {/* Left side image */}
          <div className="col-span-3">
            <img
              src={RestaurantImages_1}
              alt="Restaurant 1"
              className="w-full h-148 object-cover rounded-lg"
            />
          </div>

          {/* Middle stacked images */}
          <div className="col-span-6 flex flex-col gap-5">
            <div>
              <img
                src={RestaurantImages_2}
                alt="Restaurant 2"
                className="w-full h-72 rounded-lg object-cover"
              />
            </div>
            <div>
              <img
                src={RestaurantImages_3}
                alt="Restaurant 3"
                className="w-full h-72 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right side image */}
          <div className="col-span-3">
            <img
              src={RestaurantImages_4}
              alt="Restaurant 4"
              className="w-full object-cover h-148 rounded-lg"
            />
          </div>
        </div>
</Fade>
      </div>
    </div>
  );
};

export default Home;
