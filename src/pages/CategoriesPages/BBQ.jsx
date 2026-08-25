import { useQuery } from "@tanstack/react-query";
import BbqCard from "../../components/CategoriesPagesCard/BbqCard";
import { Fade } from "react-awesome-reveal";
const BBQ = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bbq"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/bbq");
      return await response.json();
    },
  });

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-orange-400">Data Not Found</p>
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
      <h2 className="text-2xl text-[#F97316] font-bold text-center mt-4 mb-16">
        Smoky & Juicy BBQ Delights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        {data.map((bbq) => (
          <Fade
            triggerOnce
            cascade
            key={bbq._id}
            damping={0.5}
            direction="up"
          >
            <BbqCard bbq={bbq} key={bbq._id} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default BBQ;
