import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const MenuCard = ({ menuItem ,variants}) => {
  const { image, name, price, new_price, description, category, nutrition } = menuItem;

  const [openModal, setOpenModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <>
      {/* Card */}
      <motion.div 
      variants={variants} className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border border-base-200">

        <figure className="h-44 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </figure>

        <div className="card-body p-3 gap-2 items-center text-center">
          <h2 className="text-sm font-bold line-clamp-1">{name}</h2>

          <button
            className="btn btn-primary btn-sm w-full rounded-full mt-1"
            onClick={() => setOpenModal(true)}
          >
            View Details
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      {openModal && (
        <div
          className="modal modal-open"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="modal-box max-w-xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Image */}
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => setOpenModal(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black/40 text-white hover:bg-black/60"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-4">

              {/* Name + Category */}
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-bold">{name}</h3>
                {category && (
                  <span className="badge badge-primary badge-sm">{category}</span>
                )}
              </div>

              {/* Description */}
              {description && (
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Price */}
              <div className="flex items-center gap-2 pt-3 border-t border-base-200">
                {new_price && new_price < price ? (
                  <>
                    <span className="text-2xl font-bold text-primary">
                      ৳{new_price}
                    </span>
                    <span className="text-sm line-through opacity-50">
                      ৳{price}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    ৳{price}
                  </span>
                )}
              </div>

              {/* Nutrition Section */}
              {nutrition && (
                <div className="bg-base-200/60 rounded-xl p-4 space-y-3">

                  <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/80">
                    Nutrition Facts
                  </h4>

                  {/* Calories Highlight */}
                  <div className="flex justify-between items-center pb-2 border-b border-base-300">
                    <span className="text-sm font-semibold">Calories</span>
                    <span className="text-base font-bold text-primary">
                      {nutrition.calories}
                    </span>
                  </div>

                  {/* Nutrition Rows */}
                  <div className="space-y-2 text-xs">
                    {nutrition.totalFat && (
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Total Fat</span>
                        <span className="font-semibold">{nutrition.totalFat}</span>
                      </div>
                    )}
                    {nutrition.cholesterol && (
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Cholesterol</span>
                        <span className="font-semibold">{nutrition.cholesterol}</span>
                      </div>
                    )}
                    {nutrition.sodium && (
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Sodium</span>
                        <span className="font-semibold">{nutrition.sodium}</span>
                      </div>
                    )}
                    {nutrition.totalCarbohydrates && (
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Total Carbohydrates</span>
                        <span className="font-semibold">{nutrition.totalCarbohydrates}</span>
                      </div>
                    )}
                    {nutrition.protein && (
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Protein</span>
                        <span className="font-semibold">{nutrition.protein}</span>
                      </div>
                    )}
                    {nutrition.caffeine && (
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Caffeine</span>
                        <span className="font-semibold">{nutrition.caffeine}</span>
                      </div>
                    )}
                  </div>

                  {/* Disclaimer */}
                  {nutrition.disclaimer && (
                    <p className="text-[10px] italic text-base-content/50 pt-2 border-t border-base-300 leading-snug">
                      {nutrition.disclaimer}
                    </p>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="modal-action">
                <button
                  className="btn btn-ghost"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>
                <button disabled className="btn btn-primary rounded-full px-6">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;