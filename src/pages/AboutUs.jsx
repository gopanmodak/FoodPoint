import { Fade } from "react-awesome-reveal";
import { FaUtensils, FaLeaf, FaHeart } from "react-icons/fa"; // বা FontAwesome CDN
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-linear-to-b from-orange-50 to-white py-10 px-4 md:px-8">
      
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 inline-block border-b-4 border-orange-400 pb-2">
          About Us
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Discover the story behind <span className="font-bold text-orange-500">FoodPoint</span> – where every dish tells a tale.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* card 1 */}
        <Fade direction="left" delay={100}>

          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 duration-300 border-l-8 border-orange-400">
          <div className="flex items-center gap-3 mb-4">
            <FaUtensils className="text-orange-500 text-3xl" />
            <h2 className="text-xl font-semibold text-gray-800">Our Passion</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At <span className="text-orange-500 font-bold">FoodPoint</span>, food is not just a necessity — it is an
            experience, a celebration of flavors, and a way to bring people
            together. Our journey began with a passion for authentic cooking and a
            dream to create a place where every guest feels at home.
          </p>
        </div>
        </Fade>

        {/* card 3 */}
       <Fade direction="down" delay={200}>
         <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 duration-300 border-l-8 border-orange-400">
          <div className="flex items-center gap-3 mb-4">
            <FaLeaf className="text-green-500 text-3xl" />
            <h2 className="text-xl font-semibold text-gray-800">Fresh & Creative</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We take pride in sourcing the finest ingredients, blending traditional
            recipes with modern creativity, and presenting meals that delight both
            the eyes and the taste buds. Whether it’s a cozy family dinner, a
            romantic evening, or a gathering with friends, our restaurant offers
            the perfect ambience.
          </p>
        </div>
       </Fade>

        {/* card 3 */}
        <Fade direction="right" delay={300}>
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 duration-300 border-l-8 border-orange-400">
          <div className="flex items-center gap-3 mb-4">
            <FaHeart className="text-red-500 text-3xl" />
            <h2 className="text-xl font-semibold text-gray-800">Memorable Moments</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our specialties range from signature local dishes to international
            favorites, each prepared by skilled chefs who believe in the art of
            cooking. Beyond food, we promise hospitality that makes every visit
            memorable. Because at <span className="text-orange-500 font-bold">FoodPoint</span>, we don’t just serve
            meals — we create moments worth cherishing.
          </p>
        </div>
        </Fade>
      </div>

      {/* কল-টু-অ্যাকশন */}
      <div className="text-center mt-12">
        <Link to='/reservation' className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Reserve a Table
        </Link>
        <Link to='/menu' className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-full shadow transition-all duration-300">
          View Our Menu
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;