import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import slider_1 from "../assets/reserveSlider-1.webp";
import slider_2 from "../assets/reserveSlider-2.webp";
import slider_3 from "../assets/reserveSlider-3.webp";
import slider_4 from "../assets/reserveSlider-4.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reservation = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-4 text-orange-500 uppercase">
        Make Your Reservation
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Reserve your table in advance and enjoy a hassle-free dining experience
      </p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay
        className=""
      >
        <SwiperSlide>
          <div className="">
            <img
              src={slider_1}
              alt=""
              className="w-full h-144 object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              src={slider_2}
              alt=""
              className="w-full h-144 object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              src={slider_3}
              alt=""
              className="w-full h-144 object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              src={slider_4}
              alt=""
              className="w-full h-144 object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="max-w-6xl mx-auto my-30 px-4 sm:px-6">
  {/* Card wrapper */}
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
    
    <h2 className="text-center text-orange-500 uppercase font-bold text-3xl md:text-4xl mb-8 md:mb-12 tracking-wide">
      Book Your Table Today
    </h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fullName" className="text-gray-700 font-medium text-sm">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-700 font-medium text-sm">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-gray-700 font-medium text-sm">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          minLength="11"
          maxLength="11"
          placeholder="01XX-XXXXXXX"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition tabular-nums"
        />
      </div>

      {/* Date */}
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-gray-700 font-medium text-sm">
          Reservation Date
        </label>
        <input
          id="date"
          type="date"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />
      </div>

      {/* Time */}
      <div className="flex flex-col gap-2">
        <label htmlFor="time" className="text-gray-700 font-medium text-sm">
          Time
        </label>
        <input
          id="time"
          type="time"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />
      </div>

      {/* Guests */}
      <div className="flex flex-col gap-2">
        <label htmlFor="guests" className="text-gray-700 font-medium text-sm">
          Number of Guests
        </label>
        <input
          id="guests"
          type="tel"
          minLength="1"
          maxLength="2"
          placeholder="Number of Guests"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition tabular-nums"
        />
      </div>

      {/* Address – spans two columns on md+ */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="address" className="text-gray-700 font-medium text-sm">
          Address (optional)
        </label>
        <input
          id="address"
          type="text"
          placeholder="Street, city, etc."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />
      </div>

      {/* Special Requests – spans two columns */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="requests" className="text-gray-700 font-medium text-sm">
          Special Requests
        </label>
        <textarea
          id="requests"
          rows="4"
          placeholder="Any dietary restrictions, seating preferences, etc."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-y"
        />
      </div>

      {/* Submit button – full width on mobile, centered on desktop */}
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-3.5 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 text-lg"
        >
          Submit Reservation
        </button>
      </div>
    </form>


    <div className="mt-10 ">
      <p className="mb-3"><span className="text-red-500">*</span> For group bookings above 10 guests, please call us directly.</p>
      <p><span className="text-red-500">*</span> We’ll send you a confirmation email once your reservation is approved.</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Reservation;
