import { Fade, Slide } from "react-awesome-reveal";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="py-16 px-5 text-center bg-orange-50">
        <Fade direction="down" triggerOnce>
          <span className="text-orange-500 font-semibold uppercase tracking-[4px] text-sm">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <div className="flex justify-center items-center gap-3 mt-5">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-7">
            Have a question, suggestion, or want to make a reservation?
            We would love to hear from you.
          </p>
        </Fade>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <Fade direction="up" delay={100} triggerOnce>
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaPhoneAlt />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                Phone
              </h3>

              <p className="text-gray-500 mt-2">
               01709200099
              </p>
            </div>
          </Fade>

          {/* Email */}
          <Fade direction="up" delay={200} triggerOnce>
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                Email
              </h3>

              <p className="text-gray-500 mt-2 break-all">
              gopanmodk@gmail.com
              </p>
            </div>
          </Fade>

          {/* Location */}
          <Fade direction="up" delay={300} triggerOnce>
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaMapMarkerAlt />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                Location
              </h3>

              <p className="text-gray-500 mt-2">
               Mirpur-10, Dhaka
              </p>
            </div>
          </Fade>

          {/* Opening Hours */}
          <Fade direction="up" delay={400} triggerOnce>
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaClock />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                Opening Hours
              </h3>

              <p className="text-gray-500 mt-2">
                10:00 AM - 11:00 PM
              </p>
            </div>
          </Fade>

        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Form */}
          <Slide direction="left" triggerOnce>
            <div className="bg-orange-50 rounded-3xl p-6 md:p-10">

              <span className="text-orange-500 font-semibold uppercase tracking-widest">
                Send A Message
              </span>

              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-7">
                We'd Love To Hear From You
              </h2>

              <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Your Name
                      </span>
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered w-full bg-white"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Email
                      </span>
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full bg-white"
                    />
                  </div>

                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Subject
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Message
                    </span>
                  </label>

                  <textarea
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full h-36 bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-full px-8"
                >
                  Send Message
                </button>

              </form>
            </div>
          </Slide>

          {/* Map / Restaurant */}
          <Slide direction="right" triggerOnce>
            <div className="h-full min-h-113 rounded-3xl overflow-hidden shadow-lg">

              <iframe
                title="FoodPoint Location"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                className="w-full h-full min-h-113 border-0"
                loading="lazy"
              ></iframe>

            </div>
          </Slide>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="px-5 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto bg-orange-500 rounded-3xl py-12 px-6 text-center text-white">

          <Fade triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready For A Delicious Experience?
            </h2>

            <p className="mt-4 text-orange-50 max-w-xl mx-auto">
              Visit FoodPoint and enjoy delicious food, warm hospitality,
              and unforgettable moments.
            </p>

            <Link to="/menu" className="btn bg-white text-orange-500 hover:bg-gray-100 border-none rounded-full px-8 mt-7">
              Explore Our Menu
            </Link>
          </Fade>

        </div>
      </section>

    </div>
  );
};

export default Contact;