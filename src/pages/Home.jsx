import { Fade, Slide } from "react-awesome-reveal";
import { GiCirclingFish, GiMeal  } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineSafety  } from "react-icons/ai";
import { PiBowlFoodLight, PiCoffeeFill } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";

import about1 from "../assets/about-ourstory.webp";
import BestFood from "./BestFood";
import RestaurantImages_1 from "../assets/Restaurant-1.webp";
import RestaurantImages_2 from "../assets/Restaurant-2.webp";
import RestaurantImages_3 from "../assets/Restaurant-3.webp";
import RestaurantImages_4 from "../assets/Restaurant-4.webp";
import { LiaHotTubSolid } from "react-icons/lia";
import { RiDrinksLine } from "react-icons/ri";
import { MdOutlineFastfood, MdOutlineFoodBank } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from 'react-icons/fa6';

const Home = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="p-3">
      {/*  Banner images */}
      <div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1649067846117-2d71b76be1e0?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-132 object-cover rounded-2xl -mt-16" />
        </div>

        <div className="absolute top-70 right-70 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-50">
        <p className="text-xl font-bold">The Best Food Stations</p>
        <h1 className="text-5xl font-bold w-sm">Where Food Meets Best Cuisine</h1>

        </div>
      </div>

      {/* about our story */}

      <div className="grid grid-cols-2 gap-10 my-40">
        <div className="flex flex-col justify-center items-start gap-5">
          <Fade delay={1000} cascade damping={0.5} triggerOnce>
            <h2 className="text-3xl font-bold text-orange-500 uppercase">
              About Our Story
            </h2>
            <p className="text-gray-700">
              Our story begins with a spark of passion, a quiet dream that grew
              into something larger than we ever imagined. Like a river flowing
              gently through valleys, carrying whispers of nature and tradition,
              our journey has been shaped by dedication, creativity, and the
              desire to share something meaningful with the world.
            </p>

            <Link
              to="/about-us"
              className="btn bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:shadow-amber-500"
            >
             Meet FoodPoint <span><FaArrowRightLong /></span>
            </Link>
          </Fade>
        </div>

        <div className="flex justify-center items-center">
          <Slide triggerOnce>
            <img
              src={about1}
              alt=""
              className="h-84 object-cover rounded-2xl"
            />
          </Slide>
        </div>
      </div>

      {/*    find your food */}

      <div className="flex flex-col justify-center items-center gap-5">
        <Fade delay={1000} cascade damping={0.7} triggerOnce>
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



        {/* others services */}
      <div className="my-20 ">
        <h2 className="text-3xl text-orange-500 uppercase font-bold text-center mb-4">
          Other Services
        </h2>
        <p className="text-gray-600 text-center">
          {" "}
          Enhancing Your Experience with More Options
        </p>

        {/* 4card section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20 p-5"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <GiMeal />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Enjoy Eating</h3>
            <p className="text-start text-gray-500">
              A gentle stream flows softly, weaving joy, flavor, and warmth into
              every shared bite together.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <GiCirclingFish />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Fresh Sea Foods</h3>
            <p className="text-start text-gray-500 ">
              Ocean waves whisper freshness, carrying taste from deep waters,
              delivering nature’s gift to every shore.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <PiCoffeeFill />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Cup of Coffees</h3>
            <p className="text-start text-gray-500">
              Morning rivers pour warmth, aroma rises gently, each sip awakens
              senses, weaving comfort and joy.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <TbMeat />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Meat Eaters</h3>
            <p className="text-start text-gray-500">
              A rustic brook delivers flavor, carrying strength and tradition,
              weaving hearty delights into every feast.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <LiaHotTubSolid />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Free Hot Soup</h3>
            <p className="text-start text-gray-500">
              Warm, comforting soup served fresh, crafted with love to bring
              flavor, joy, and nourishment to every guest.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <RiDrinksLine />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Drinks & Beverages</h3>
            <p className="text-start text-gray-500">
              Refreshing drinks and crafted beverages, blending taste and style
              to keep you energized, hydrated, and delighted always.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <MdOutlineFastfood />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Healthy Smoothies </h3>
            <p className="text-start text-gray-500">
              Fresh fruits blended into nourishing smoothies, offering energy,
              flavor, and wellness in every refreshing sip you enjoy.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariant}>
            <span className="bg-orange-500 h-20 w-20 rounded-full flex text-white text-4xl justify-center items-center">
              {" "}
              <PiBowlFoodLight />{" "}
            </span>
            <h3 className="text-orange-500 text-2xl">Sweet Desserts</h3>
            <p className="text-start text-gray-500">
              Indulge in delightful desserts, crafted with care, blending
              sweetness and artistry to make every bite memorable.
            </p>
          </motion.div>
        </motion.div>
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

    



      {/* more than meal */}

      <div className="my-25 p-3">
        <p className="uppercase text-orange-500 font-bold text-center mb-2">The FoodPoint difference</p>
        <h2 className="text-3xl font-bold md:text-4xl text-center">More Than A Meal</h2>

      <Fade triggerOnce direction="up" cascade damping={0.8} dummyClass="fade-up">
          <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div className="flex flex-col gap-3 text-gray-400">
            <p className="text-2xl text-orange-600"><GrDeliver/></p>
            <p className="text-gray-800 font-semibold">Fast, reliable delivery</p>
            <p className="max-w-md">Real-time tracking and thoughtful drivers get your food there right.</p>
          </div>

          <div className="flex flex-col gap-3 text-gray-400">
            <p className="text-2xl text-orange-600"><AiOutlineSafety  /></p>
            <p className="text-gray-800 font-semibold">Quality you can taste</p>
            <p className="max-w-md">We partner with the best local kitchens and source fresh ingredients.</p>
          </div>

          <div className="flex flex-col gap-3 text-gray-400">
            <p className="text-2xl text-orange-600"><MdOutlineFoodBank /></p>
            <p className="text-gray-800 font-semibold">Made with care</p>
            <p className="max-w-md">Every order is packed with attention, from their kitchen to your table.</p>
          </div>
        </div>
      </Fade>
      </div>

      {/* Home footer */}

      <section className="px-5 md:px-10 py-16">
        <div className="max-w-6xl mx-auto bg-orange-500 rounded-3xl py-12 px-6 text-center text-white">
          <Fade triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready For A Delicious Experience?
            </h2>

            <p className="mt-4 text-orange-50 max-w-xl mx-auto">
              Visit FoodPoint and enjoy delicious food, warm hospitality, and
              unforgettable moments.
            </p>

            <Link
              to="/menu"
              className="btn bg-white text-orange-500 hover:bg-gray-100 border-none rounded-full px-8 mt-7"
            >
              Explore Our Menu
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Home;
