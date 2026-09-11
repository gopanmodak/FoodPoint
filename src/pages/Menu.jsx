import { useQuery } from "@tanstack/react-query"
import MenuCard from "../components/MenuCard"
import { motion } from 'framer-motion';

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
        <div className="flex items-center justify-center space-x-2 pt-15 min-h-screen">
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
      <div className="flex items-center justify-center pt-15 min-h-screen">
        <p className="text-orange-400">Data Not Found</p>
      </div>
    );
  }

  const contantVariants ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{   staggerChildren: 0.3,
      }
    }
  }

  const variants= {
    hidden: {
      opacity: 0,
      y: 5,
    },
    visible: {
      opacity: 1,
     
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.5,
      },
    },
  }


  return (
    <div>


      <div className="space-y-2 mb-15 text-center">
        <h2 className="text-orange-500 font-bold text-3xl uppercase">Explore Our Menu</h2>
        <p className="text-gray-600">
          Discover our variety of delicious dishes, carefully crafted with the finest ingredients.
        </p>
      </div>


      <motion.div
      variants={contantVariants}
      initial="hidden" 
      animate='visible' 
      viewport={{once:true, amount:0.2}} className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-5">

        {data.map((menuItem, index) => (
          <MenuCard key={menuItem._id} menuItem={menuItem} index={index} variants={variants} />
        ))}
      </motion.div>
    </div>
  )
}

export default Menu