import { Fade } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="md:mb-10 p-5">
      <div className="flex flex-col justify-center items-center space-y-3">
        <p className="uppercase text-orange-500 font-bold">
          Something for everyone
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Browse Categories
        </h2>
        <p className="text-gray-600">
          Find your next favorite, sorted just the way you like it.
        </p>
      </div>

      {/* Categories card */}

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* card-1 */}

        <Fade triggerOnce direction="up" duration={1000} delay={100} damping={0.5} cascade>
<Link
          to="/categories/ourbestfood"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1628294896516-344152572ee8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Best Food</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>

        </Fade>
        

        {/* card-2 */}
           <Fade triggerOnce direction="up" duration={1000} delay={200} damping={0.5} cascade>
   <Link
          to="/categories/bbq"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">BBQ</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
          
        </Fade>

        {/* card-3 */}
            <Fade triggerOnce direction="up" duration={1000} delay={300} damping={0.5} cascade>

          <Link
          to="/categories/breads"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1533782654613-826a072dd6f3?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Breads</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-4 */}
            <Fade triggerOnce direction="up" duration={1000} delay={400} damping={0.5} cascade>

          <Link
          to="/categories/burger"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Burger</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-5 */}
           <Fade triggerOnce direction="up" duration={1000} delay={500} damping={0.5} cascade>

           <Link
          to="/categories/chocolate"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Chocolate</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-6 */}
            <Fade triggerOnce direction="up" duration={1000} delay={700} damping={0.5} cascade>

          <Link
          to="/categories/desserts"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Desserts</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-7 */}
          <Fade triggerOnce direction="up" duration={1000} delay={700} damping={0.5} cascade>

            <Link
          to="/categories/drinks"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1691939610599-a9a3dde8e810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpbmtzfGVufDB8fDB8fHww"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Drinks</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-8 */}
            <Fade triggerOnce direction="up" duration={1000} delay={800} damping={0.5} cascade>
<Link
          to="/categories/fridechicken"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1695931839969-f33ab12e107b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <Link className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Fride Chicken</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </Link>
        </Link>
          
        </Fade>

        {/* card-9 */}
          <Fade triggerOnce direction="up" duration={1000} delay={900} damping={0.5} cascade>

            <Link
          to="/categories/icecream"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Ice Cream</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-10 */}
          <Fade triggerOnce direction="up" duration={1000} delay={1000} damping={0.5} cascade>
      <Link
          to="/categories/ourfood"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1611315764615-3e788573f31e?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Our Foods</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
          
        </Fade>

        {/* card-11 */}
          <Fade triggerOnce direction="up" duration={1000} delay={1100} damping={0.5} cascade>
  <Link
          to="/categories/pizza"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Pizza</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
          
        </Fade>

        {/* card-12 */}
            <Fade triggerOnce direction="up" duration={1200} delay={1000} damping={0.5} cascade>
<Link
          to="/categories/indianfood"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1723893905879-0e309c2a8e06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Indian Food</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
          
        </Fade>
       
        {/* card-13 */}
            <Fade triggerOnce direction="up" duration={1000} delay={1300} damping={0.5} cascade>

          <Link
          to="/categories/sandwiches"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1738802845911-809a01acfa50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Sandwiches</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-14 */}
          <Fade triggerOnce direction="up" duration={1000} delay={1400} damping={0.5} cascade>

            <Link
          to="/categories/sausages"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1766589152317-2bafe6f2923c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNhdXNnZXN8ZW58MHx8MHx8fDA%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Sausages</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-15 */}
           <Fade triggerOnce direction="up" duration={1000} delay={1500} damping={0.5} cascade>

           <Link
          to="/categories/steaks"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Steaks</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>

        {/* card-16 */}
           <Fade triggerOnce direction="up" duration={1000} delay={1600} damping={0.5} cascade>

           <Link
          to="/categories/banglafood"
          className="card bg-orange-50  shadow-gray-300 shadow-sm rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bbq-categories"
            className="h-88 rounded-t-2xl object-cover"
          />

          <div className="flex justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-800 font-semibold">Bangla Food</p>
              <p className="text-gray-400 text-xs">Dishes</p>
            </div>
            <p className="text-orange-500">
              <FaArrowRightLong />
            </p>
          </div>
        </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Categories;
