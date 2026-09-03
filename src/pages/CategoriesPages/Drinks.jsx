import { useQuery } from "@tanstack/react-query";
import { Fade } from "react-awesome-reveal";

import DrinksCard from "../../components/CategoriesPagesCard/DrinksCard";


const Drinks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["drinks"],
    queryFn: async () => {
      const response = await fetch("https://foodpoint-backend-venk.onrender.com/drinks");
      return await response.json();
    },
  });

  if (error) {
    return (
      <div className="flex justify-center items-center min-w-screen">
        <p className="text-orange-600">Data Not Found</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center space-x-2 pt-15">
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-6 text-orange-700">
        Freshly Baked Happiness
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-5">
        The first cup is for the guest, the second for enjoyment, the third for the sword.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        {data.map((drinks) => (
          <Fade
            cascade
            damping={0.5}
            direction="up"
            triggerOnce
            key={drinks._id}
          >
            <DrinksCard drinks={drinks} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
