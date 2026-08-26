const BestFoodsCard = ({ bestFood}) => {
  return <div>

      <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={bestFood.img || 'https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png'}
            alt={bestFood.name}
            
            className="h-70 w-full relative"
          />

          <div className="absolute top-4 right-4 ">

            {/* <span className={`${bestfood.stock_status === 'in_stock' ? '' : 'bg-red-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg'}`}>
              {bestfood.stock_status}
            </span> */}
            <div className="bg-green-500 px-2 py-1 rounded-full text-white text-sm font-semibold shadow-lg">{bestFood.discount ? `Discount: ${bestFood.discount}%` : "No Discount"}</div>
            
          </div>
        </figure>
        <div className="card-body flex justify-between">
        
           <h2 className="card-title text-[#3B2416]">{bestFood.name}</h2>
              <p className=" text-[#F97316] font-semibold text-lg flex items-center">Price : {bestFood.price} $</p>
          <div className="flex justify-center bestfoods-center">
            <p className="text-[#6B7280]">
              {bestFood.dsc.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-warning">{bestFood.country}</div>
          </div>
        </div>
      </div>
  </div>;
};

export default BestFoodsCard;
