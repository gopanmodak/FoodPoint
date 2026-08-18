import { useQuery } from "@tanstack/react-query";
import BestFoodCard from "../components/BestFoodCard";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const BestFood = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["best-food"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/bestfood");
      return await response.json();
    },
  });

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-center space-x-2 pt-15">
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center pt-15">
        <p className="text-orange-400">Data Not Found</p>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-15">
        {data.slice(0,8).map((item) => (
           <Fade direction="up" cascade damping={0.3} triggerOnce> 
          <BestFoodCard item={item} key={item.idMeal} />
          </Fade>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="btn btn-warning text-white" onClick={()=> navigate('/best-food')}>View All</button>
      </div>
    </div>
  );
};

export default BestFood;
