import { useQuery } from "@tanstack/react-query";

const BestFood = () => {
  const {
    data: foods = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["best-food"],

    queryFn: async () => {
      const response = await fetch(
        "http://localhost:3000/bestfood"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch food");
      }

      return response.json();
    },
  });
  console.log(foods)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        {error.message}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {foods.map((food, index) => (
        <div
          key={food._id || food.idMeal || index}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <img
            src={food.image || food.strMealThumb}
            alt={food.name || food.strMeal}
            className="w-full h-60 object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800">
              {food.name || food.strMeal}
            </h2>

            {food.price && (
              <p className="text-orange-500 font-bold mt-2">
                ৳{food.price}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestFood;