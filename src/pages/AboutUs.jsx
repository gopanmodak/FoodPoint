import { Fade, Slide } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="md:my-15 p-5">
      {/* about us header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center space-y-5">
          <p className="text-orange-400 uppercase font-bold">
            Made for your table
          </p>
          <h1 className="text-3xl md:text-5xl text-gray-800 font-semibold">
            We believe food{" "}
            <span className="text-orange-500 italic">is a feeling.</span>
          </h1>
          <p className="text-gray-500 max-w-md">
            FoodPoint brings the best of your neighborhood together, so every
            meal can feel a little more special.
          </p>
        </div>
        <Slide triggerOnce>
          <div>
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85"
              alt="about us images"
              className="rounded-2xl"
            />
          </div>
        </Slide>
      </div>

      {/* Our Story */}

      <Fade triggerOnce damping={0.5} cascade direction="up" duration={1000}>
        <div className="my-20 flex flex-col justify-center space-y-5 items-center">
          <p className="text-orange-500 uppercase font-bold">Our story</p>
          <h2 className="text-4xl max-w-3xl font-semibold text-center">
            Good meals have a way of becoming good memories.
          </h2>
          <p className="text-gray-700 max-w-3xl text-center">
            We started FoodPoint because we wanted a better way to discover the
            independent restaurants that make our city worth eating in. Our team
            works with local kitchens, makers, and couriers to make ordering
            feel personal again.
          </p>

          <div className="flex gap-15 mt-10">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-orange-500">350+</h1>
              <p className="text-gray-600 text-md">Local kitchens</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-orange-500">4.9</h1>
              <p className="text-gray-600 text-md">Average rating</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-orange-500 whitespace-nowrap">
                28 min
              </h1>
              <p className="text-gray-600 text-md">Average delivery</p>
            </div>
          </div>
        </div>
      </Fade>

      {/* About us footer */}

      <Fade triggerOnce damping={0.5} cascade direction="up" duration={1000}>
        <div className="bg-amber-300 grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-10 p-10 rounded-2xl">
          <div className="flex flex-col justify-center items-start md:px-30 ">
            <p className="text-orange-500 uppercase font-bold text-center">
              Our Mission
            </p>
            <h2 className="text-4xl font-semibold">Make every meal</h2>
            <h2 className="text-4xl font-semibold text-orange-500">
              worth sharing.
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 max-w-md leading-7">
              We’re building a food platform that puts quality first — quality
              ingredients, quality service, and quality time around the table.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 md:mt-30">
        <h2 className="text-center text-3xl text-orange-500 font-bold">
          Ready to find your next favorite?
        </h2>
        <div className="flex justify-center items-center mt-5">
          <button
            className="btn btn-neutral hover:bg-orange-500 hover:transform-stroke flex justify-center items-center gap-3"
            onClick={() => navigate("/menu")}
          >
            Explore the menu{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
