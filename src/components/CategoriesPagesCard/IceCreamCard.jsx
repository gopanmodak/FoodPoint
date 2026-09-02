

const IceCreamCard = ({icecream}) => {
  return (
    <div>

      
      <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={icecream?.img || icecream.real_image}
            alt={icecream.name}
            className="h-70 w-full relative"
          />

          <div className="absolute top-4 right-4 ">

            {/* <span className={`${icecream.stock_status === 'in_stock' ? '' : 'bg-red-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg'}`}>
              {icecream.stock_status}
            </span> */}
            <div className="bg-green-500 px-2 py-1 rounded-full text-white text-sm font-semibold shadow-lg">{icecream.discount ? `Discount: ${icecream.discount}%` : "No Discount"}</div>
            
          </div>
        </figure>
        <div className="card-body flex justify-between">
        
           <h2 className="card-title text-[#3B2416]">{icecream.name}</h2>
              <p className=" text-[#F97316] font-semibold text-lg flex items-center">Price : {icecream.price} $</p>
          <div className="flex justify-center chocolates-center">
            <p className="text-[#6B7280]">
              {icecream.dsc.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-warning">{icecream.category}</div>
            <div className="badge badge-outline badge-warning">{icecream.country}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IceCreamCard