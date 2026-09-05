import { useState } from 'react';

const MenuCard = ({ menuItem, index }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative bg-white rounded-md shadow-md hover:shadow-lg px-10 transition-shadow duration-300">
      <ul className="list bg-base-100 border-b-gray-300 border-b shadow-md ">
        <li
          className="list-row space-x-4 p-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setShowOverlay(true)}
        >
          <div className="text-xl flex items-center font-thin opacity-30 tabular-nums">{index + 1}</div>
          <div><img className="size-20 rounded-box object-cover" alt="" src={menuItem.image} /></div>
          <div className="list-col-grow flex flex-col items-start justify-center">
            <div className="font-bold">{menuItem.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{menuItem.category}</div>
          </div>
          <p className="font-bold text-orange-500 flex items-center">${menuItem.price}</p>
        </li>
      </ul>

    
     {/*  {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 w-full max-w-sm p-6 text-center"
            onMouseLeave={() => setShowOverlay(false)}
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg mb-3 border-2 border-white/30">
              <img className="w-full h-full object-cover" alt={menuItem.name} src={menuItem.image} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{menuItem.name}</h3>
            <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-white/70 text-[10px] uppercase tracking-wider font-semibold mb-3">
              {menuItem.category}
            </span>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xs mx-auto">{menuItem.description}</p>
            <p className="text-2xl font-bold text-orange-400 mb-4">${menuItem.price}</p>
            <button className="btn bg-orange-500 hover:bg-orange-600 border-0 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md shadow-orange-500/30 transition-all hover:scale-105">
              Order Now
            </button>
            <p className="text-white/20 text-[10px] mt-4 tracking-widest uppercase">hover away to close</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MenuCard;