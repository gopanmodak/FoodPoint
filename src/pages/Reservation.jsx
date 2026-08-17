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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const inputClass =
  "w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200";

const labelClass = "block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5";

const FormField = ({ id, label, children }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    {children}
  </div>
);

const Reservation = () => {
  return (
    <div className="bg-[#fdfaf6] min-h-screen">

      {/* ── Hero / Slider Section ── */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {[slider_1, slider_2, slider_3, slider_4].map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img
                  src={src}
                  alt=""
                  className="w-full h-130 md:h-155 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centred hero text on top of slider */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 px-4 pointer-events-none">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Fine Dining Experience
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center leading-tight drop-shadow-lg">
            Reserve Your Table
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-md text-sm md:text-base">
            Secure your spot and arrive to a table set just for you.
          </p>
        </div>
      </div>

      {/* ── Decorative divider ── */}
      <div className="flex items-center justify-center gap-4 py-10">
        <span className="block h-px w-16 bg-orange-200" />
        <svg
          className="text-orange-400 w-5 h-5 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
        <span className="block h-px w-16 bg-orange-200" />
      </div>

      {/* ── Booking Form ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.08)] border border-orange-100/60 overflow-hidden">

          {/* Card header strip */}
          <div className="bg-liear-to-r from-orange-500 to-amber-500 px-8 py-7 md:px-12">
            <p className="text-orange-400 uppercase tracking-[0.25em] text-xs font-semibold mb-1">
              Reservation Form
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Book Your Table Today
            </h2>
          </div>

          <div className="px-8 py-10 md:px-12 md:py-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <FormField id="fullName" label="Full Name">
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </FormField>

              {/* Email */}
              <FormField id="email" label="Email Address">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </FormField>

              {/* Phone */}
              <FormField id="phone" label="Phone Number">
                <input
                  id="phone"
                  type="tel"
                  minLength="11"
                  maxLength="11"
                  placeholder="01XX-XXXXXXX"
                  className={`${inputClass} tabular-nums`}
                />
              </FormField>

              {/* Date */}
              <FormField id="date" label="Reservation Date">
                <input
                  id="date"
                  type="date"
                  className={inputClass}
                />
              </FormField>

              {/* Time */}
              <FormField id="time" label="Time">
                <input
                  id="time"
                  type="time"
                  className={inputClass}
                />
              </FormField>

              {/* Table Number */}
              <FormField id="tableNo" label="Table Number">
                <select
                  id="tableNo"
                  defaultValue=""
                  className={`${inputClass} bg-orange-50/40 cursor-pointer appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: "40px",
                  }}
                >
                  <option value="" disabled>Select a table</option>
                  <option value="1">Table 1 — 2 seats</option>
                  <option value="2">Table 2 — 2 seats</option>
                  <option value="3">Table 3 — 4 seats</option>
                  <option value="4">Table 4 — 4 seats</option>
                  <option value="5">Table 5 — 6 seats</option>
                  <option value="6">Table 6 — 6 seats</option>
                  <option value="7">Table 7 — 8 seats</option>
                  <option value="8">Table 8 — 8 seats</option>
                  <option value="9">Table 9 — 10 seats</option>
                  <option value="10">Table 10 — 10 seats</option>
                </select>
              </FormField>

              {/* Guests */}
              <FormField id="guests" label="Number of Guests">
                <input
                  id="guests"
                  type="tel"
                  minLength="1"
                  maxLength="2"
                  placeholder="e.g. 4"
                  className={`${inputClass} tabular-nums`}
                />
              </FormField>

              {/* Address – spans two columns */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="address" className={labelClass}>
                  Address{" "}
                  <span className="normal-case tracking-normal font-normal text-gray-400">
                    (optional)
                  </span>
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Street, city, etc."
                  className={inputClass}
                />
              </div>

              {/* Special Requests */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="requests" className={labelClass}>
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  rows="4"
                  placeholder="Dietary needs, seating preferences, special occasion…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-200 text-base tracking-wide"
                >
                  Confirm Reservation →
                </button>
                <p className="text-gray-400 text-xs text-center sm:text-left">
                  We'll confirm via email within a few hours.
                </p>
              </div>
            </form>

            {/* Footer notes */}
            <div className="mt-10 pt-6 border-t border-orange-100 flex flex-col sm:flex-row gap-3 text-sm text-gray-500">
              <p className="flex items-start gap-2">
                <span className="text-orange-400 font-bold mt-0.5">✦</span>
                Groups above 10 guests — please call us directly.
              </p>
              <span className="hidden sm:block text-gray-200">|</span>
              <p className="flex items-start gap-2">
                <span className="text-orange-400 font-bold mt-0.5">✦</span>
                Confirmation email sent once approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;