import { useQuery } from "@tanstack/react-query"
import BbqCard from "../../components/CategoriesPagesCard/BbqCard"
import { Fade } from "react-awesome-reveal"


const BBQ = () => {

  const {data ,isLoading, error} = useQuery({
    queryKey: ['bbq-foods'],
    queryFn: async () => { 
      
      const response = await fetch("https://foodpoint-backend-venk.onrender.com/bbqs")
      return await response.json()
    }
  })

  if(isLoading){
     return (
      <div className="flex items-center justify-center space-x-2 min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
      </div>
    );
  }

  if(error){
    return (
      <div className="flex justify-center items-center min-w-screen">
        <p className="text-orange-600">Data Not Found</p>
      </div>
    );
  }

  
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {data.map((bbq)=> <Fade key={bbq._id} direction="up" cascade damping={0.1} triggerOnce>
          <BbqCard bbq={bbq} />
        </Fade>)}
      </div>
    </div>
  )
}

export default BBQ