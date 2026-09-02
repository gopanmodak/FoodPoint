

const IndianFoodCard = ({indian}) => {
  return (
    <div>

      
      <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={indian?.img || indian.real_image}
            alt={indian.name}
            className="h-70 w-full relative"
          />

          <div className="absolute top-4 right-4 ">

            {/* <span className={`${indian.stock_status === 'in_stock' ? '' : 'bg-red-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg'}`}>
              {indian.stock_status}
            </span> */}
            <div className="bg-green-500 px-2 py-1 rounded-full text-white text-sm font-semibold shadow-lg">{indian.discount ? `Discount: ${indian.discount}%` : "No Discount"}</div>
            
          </div>
        </figure>
        <div className="card-body flex justify-between">
        
           <h2 className="card-title text-[#3B2416]">{indian.name}</h2>
              <p className=" text-[#F97316] font-semibold text-lg flex items-center">Price : {indian.price} $</p>
          <div className="flex justify-center chocolates-center">
            <p className="text-[#6B7280]">
              {indian.dsc.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-warning">{indian.category}</div>
            <div className="badge badge-outline badge-warning">{indian.country}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndianFoodCard