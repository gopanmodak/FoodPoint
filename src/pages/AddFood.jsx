

const AddFood = () => {

  const handleOnForm = (event) => {

    event.preventDefault();
    const form =event.target;

    const foodName = form.foodName.value;
    const foodImageUrl = form.foodImageUrl.value;
    const foodDescription = form.foodDescription.value;
    const foodCategory = form.foodCategory.value;
    const foodCountry = form.foodCountry.value;

    const foodInformation ={ foodName,  foodImageUrl, foodDescription, foodCategory, foodCountry}

    console.log(foodInformation)
  }
  return (
    <div className="my-10">

      <div>
        <form action="" className="space-y-4 md:max-w-5xl mx-auto p-5" onSubmit={handleOnForm}>

          {/*food Name */}

          <div>
            <label htmlFor="" className="block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5"> Food Name</label>
            <input type="text" name="foodName" className="w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200" />
          </div>

          {/*food image */}
          <div>
            <label htmlFor="" className="block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5"> Food Image URL</label>
            <input type="text" name="foodImageUrl" className="w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200" />
          </div>

          {/*food Description */}
          <div>
            <label htmlFor="" className="block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5"> Food Description </label>
            <textarea type="text" name="foodDescription" className="w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200" />
          </div>

          {/*food Category */}
          <div>
            <label htmlFor="" className="block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5"> Food Category</label>
            <input type="text" name="foodCategory" className="w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200" />
          </div>

          {/*food Country */}
          <div>
            <label htmlFor="" className="block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5"> Food Country</label>
            <input type="text" name="foodCountry" className="w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200" />
          </div>

          <div>
            <button className="btn bg-orange-500 text-white hover:bg-orange-700 shadow-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddFood