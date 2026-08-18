const BestFoodCard = ({ item }) => {
  return (
    <div>
      <div className="card bg-[#FFFFFF] h-120 shadow-gray-300 shadow-sm">
        <figure>
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="h-70 w-full"
          />
        </figure>
        <div className="card-body flex justify-between">
          <h2 className="card-title text-[#3B2416]">{item.strMeal}</h2>
          <div className="flex justify-center items-center">
            <p className="text-[#6B7280]">
              {item.strInstructions.slice(0, 100)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-warning">{item.strCategory}</div>
            <div className="badge badge-outline badge-warning">{item.strCountry}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFoodCard;
