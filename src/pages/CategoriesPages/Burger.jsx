import { useQuery } from "@tanstack/react-query"
import { Fade } from "react-awesome-reveal";

import BurgerCard from "../../components/CategoriesPagesCard/BurgerCard";

const Burger = () => {
  const {data ,isLoading, error} = useQuery({
    queryKey: ['best-foods'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/burger')
      return await response.json();
    }
  })

  if(isLoading){
   return  <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center space-x-2 pt-15">
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        </div>
      </div>
  }

  if(error){
    return(  <div className="flex justify-center items-center min-w-screen">
        <p className="text-orange-600">Data Not Found</p>
      </div>)
   
  }
  return (
    <div>
      <div className="flex items-center justify-center py-15">
        <h1 className="text-4xl font-bold text-[#3B2416]">Best Foods</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        {data.map((burger)=> (
          <Fade key={burger._id} triggerOnce damping={0.7} cascade direction="up">
            <BurgerCard burger={burger}/>
          </Fade>
        )
        )}
      </div>
    </div>
  )
}

export default Burger