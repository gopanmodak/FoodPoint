import { useQuery } from "@tanstack/react-query";
import { Fade } from "react-awesome-reveal";

import SausagesCard from "../../components/CategoriesPagesCard/SausagesCard";


const Sausages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sausages"],
    queryFn: async () => {
      const response = await fetch("https://foodpoint-backend-venk.onrender.com/sausages");
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
        Discover our variety of chocolate, baked to perfection every day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        {data.map((sausages) => (
          <Fade
            cascade
            damping={0.5}
            direction="up"
            triggerOnce
            key={sausages._id}
          >
            <SausagesCard sausages={sausages} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Sausages;
