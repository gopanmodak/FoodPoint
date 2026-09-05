import { useQuery } from "@tanstack/react-query"
import MenuCard from "../components/MenuCard"

const Menu = () => {
  const {data, isLoading, error} = useQuery({
    queryKey:["menu"],
    queryFn: async()=>{
      const response = await fetch("https://foodpoint-backend-venk.onrender.com/menu")
      return await response.json()
    }
  })

    if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-center space-x-2 pt-15">
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        </div>
        <div>
          <p className="text-orange-400 text-center pt-5">Loading...</p>
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


      <div className="space-y-2 mb-5">
        <h2 className="text-orange-500 font-bold text-3xl uppercase">Explore Our Menu</h2>
        <p className="text-gray-600">
          Discover our variety of delicious dishes, carefully crafted with the finest ingredients.
        </p>
      </div>


      <div className="mb-10">

        {data.map((menuItem, index) => (
          <MenuCard key={menuItem._id} menuItem={menuItem} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Menu