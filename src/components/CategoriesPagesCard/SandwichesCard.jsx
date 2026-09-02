

const SandwichesCard = ({sandwiches}) => {
  return (
    <div>

      
      <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={sandwiches?.img || sandwiches.real_image}
            alt={sandwiches.name}
            className="h-70 w-full relative"
          />

          <div className="absolute top-4 right-4 ">

            {/* <span className={`${sandwiches.stock_status === 'in_stock' ? '' : 'bg-red-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg'}`}>
              {sandwiches.stock_status}
            </span> */}
            <div className="bg-green-500 px-2 py-1 rounded-full text-white text-sm font-semibold shadow-lg">{sandwiches.discount ? `Discount: ${sandwiches.discount}%` : "No Discount"}</div>
            
          </div>
        </figure>
        <div className="card-body flex justify-between">
        
           <h2 className="card-title text-[#3B2416]">{sandwiches.name}</h2>
              <p className=" text-[#F97316] font-semibold text-lg flex items-center">Price : {sandwiches.price} $</p>
          <div className="flex justify-center chocolates-center">
            <p className="text-[#6B7280]">
              {sandwiches.dsc.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-warning">{sandwiches.category}</div>
            <div className="badge badge-outline badge-warning">{sandwiches.country}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SandwichesCard