const BbqCard = ({ bbq }) => {
  return <div>

     <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={bbq.img}
            alt={bbq.name}
            className="h-70 w-full"
          />
        </figure>
        <div className="card-body flex justify-between">
          <h2 className="card-title text-[#3B2416]">{bbq.name}</h2>
          <div className="flex justify-center items-center">
            <p className="text-[#6B7280]">
              {bbq.dsc.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
           {/*  <div className="badge badge-outline badge-warning">{item.category}</div> */}
            <div className="badge badge-outline badge-warning font-bold">{bbq.price}.00 Taka</div>
          </div>
        </div>
      </div>
  </div>;
};

export default BbqCard;
