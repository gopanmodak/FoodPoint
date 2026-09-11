import { GiBowlOfRice } from "react-icons/gi";
import {
  MdDeliveryDining,
  MdOutlineFamilyRestroom,
} from "react-icons/md";
import { TbCloverFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const DiscoverTest = () => {
  // Parent animation
  const contentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Child animation
  const variant = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className="my-10 mb-20 p-5">
      {/* Discover Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-center items-center">
        {/* ================= IMAGE SECTION ================= */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWZ8ZW58MHx8MHx8fDA%3D"
            alt="discover-test"
            className="w-full h-124 object-cover rounded-2xl"
          />
        </div>

        {/* ================= TEXT SECTION ================= */}
        <div className="space-y-5">
          {/* Small Title */}
          <p className="text-orange-500 font-medium">
            Discover Your Taste
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
            We Provide Good Food For Your Family!
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-2 leading-7">
            At our kitchen, we believe that good food brings people
            together. Every dish we prepare is rooted in the rich
            culinary heritage of Bangladesh—from the aromatic Morog
            Polao to the spicy Beef Kala Bhuna and the delicate
            Shorisha Ilish. We use fresh, halal ingredients and
            traditional recipes passed down through generations. Our
            goal is simple: to serve you authentic Bangladeshi food
            that is safe, delicious, and made with love.
          </p>

          {/* ================= FEATURES GRID ================= */}
          <motion.div
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10"
          >
            {/* Feature 1 */}
            <motion.div
              variants={variant}
              className="flex flex-row gap-5 items-center"
            >
              <div className="shrink-0">
                <GiBowlOfRice className="text-5xl text-orange-500" />
              </div>

              <p className="text-gray-700">
                Authentic recipes with fresh halal ingredients.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={variant}
              className="flex flex-row gap-5 items-center"
            >
              <div className="shrink-0">
                <MdOutlineFamilyRestroom className="text-5xl text-orange-500" />
              </div>

              <p className="text-gray-700">
                Perfect for family dinners and gatherings.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={variant}
              className="flex flex-row gap-5 items-center"
            >
              <div className="shrink-0">
                <MdDeliveryDining className="text-5xl text-orange-500" />
              </div>

              <p className="text-gray-700">
                Hot food delivered safely & fast.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              variants={variant}
              className="flex flex-row gap-5 items-center"
            >
              <div className="shrink-0">
                <TbCloverFilled className="text-5xl text-orange-500" />
              </div>

              <p className="text-gray-700">
                Every dish made with love.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverTest;