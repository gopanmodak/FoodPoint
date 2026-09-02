

const DessertsCard = ({desserts}) => {
  return (
    <div>

      
      <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={desserts?.img || desserts.real_image}
            alt={desserts.name}
            className="h-70 w-full relative"
          />

          <div className="absolute top-4 right-4 ">

            {/* <span className={`${desserts.stock_status === 'in_stock' ? '' : 'bg-red-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg'}`}>
              {desserts.stock_status}
            </span> */}
            <div className="bg-green-500 px-2 py-1 rounded-full text-white text-sm font-semibold shadow-lg">{desserts.discount ? `Discount: ${desserts.discount}%` : "No Discount"}</div>
            
          </div>
        </figure>
        <div className="card-body flex justify-between">
        
           <h2 className="card-title text-[#3B2416]">{desserts.name}</h2>
              <p className=" text-[#F97316] font-semibold text-lg flex items-center">Price : {desserts.price} $</p>
          <div className="flex justify-center chocolates-center">
            <p className="text-[#6B7280]">
              {desserts.dsc.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-warning">{desserts.category}</div>
            <div className="badge badge-outline badge-warning">{desserts.country}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DessertsCard