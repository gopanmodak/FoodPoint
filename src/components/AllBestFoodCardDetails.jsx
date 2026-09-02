
import { useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft, FaYoutube } from "react-icons/fa";

const AllBestFoodCardDetails = () => {
  const food = useLoaderData();

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-50 py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back Button */}
        <Link
          to="/best-food"
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white shadow-md hover:shadow-lg text-gray-700 hover:text-orange-500 transition-all duration-300"
        >
          <FaArrowLeft />
          Back to Best Food
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Image */}
          <div className="relative">
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-70 sm:h-100 md:h-125 object-cover"
            />

            {/* Category */}
            <div className="absolute top-5 left-5">
              <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg">
                {food.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-8 md:p-10">

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {food.strMeal}
            </h1>

            {/* Area */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-medium">
                Category: {food.strCategory}
              </span>

              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
                Cuisine: {food.strArea}
              </span>
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Cooking Instructions
              </h2>

              <p className="text-gray-600 leading-8 text-base sm:text-lg whitespace-pre-line">
                {food.strInstructions}
              </p>
            </div>

            {/* YouTube */}
            {food.strYoutube && (
              <a
                href={food.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-md"
              >
                <FaYoutube className="text-xl" />
                Watch Recipe Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBestFoodCardDetails;