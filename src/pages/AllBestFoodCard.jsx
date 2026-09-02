import { useQuery } from "@tanstack/react-query";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const AllBestFoodCard = () => {
  const navigate = useNavigate();
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["best-food"],
    queryFn: async () => {
      const response = await fetch("https://foodpoint-backend-venk.onrender.com/bestfoods");

      if (!response.ok) {
        throw new Error("Failed to fetch food data");
      }

      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2 min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-orange-400">Data Not Found</p>
      </div>
    );
  }

  

  return (
    <>

    <div className="flex justify-center items-center flex-col mb-20">
      <h2 className="text-orange-500 text-3xl font-bold border-b-2 border-orange-500 p-2">Our Signature Dishes</h2>
      <p className="text-gray-600 text-center mt-4 max-w-2xl">Discover our most-loved dishes, crafted with fresh ingredients and unforgettable flavors.</p>
    </div>
   <div
       
        className="grid grid-cols-1 md:grid-cols-4 gap-5"
      >
        {data.map((item) => (
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <div
           
            className="card bg-white h-120 shadow-gray-300 shadow-sm mb-10 cursor-pointer"
            key={item.idMeal}
            onClick={()=> navigate(`/best-food/${item._id}`)}
          >
            <figure>
              <img
                src={item.img}
                alt={item.name}
                className="h-70 w-full object-cover"
              />
            </figure>

            <div className="card-body flex justify-between">
              <h2 className="card-title text-[#3B2416]">
                {item.name}
              </h2>

              <div className="flex justify-center items-center">
                <p className="text-[#6B7280]">
                  {item.dsc?.slice(0, 100) ||
                    "No description available"}
                </p>
              </div>

              <div className="card-actions justify-end">
               {/*  <div className="badge badge-outline badge-warning">
                  {item.discount}
                </div> */}

                <div className="badge badge-outline badge-warning font-bold">
                  {item.price}.00 Taka
                </div>
              </div>
            </div>
          </div>
      
    </Fade>
        ))}
      </div>
    </>
  );
};

export default AllBestFoodCard;