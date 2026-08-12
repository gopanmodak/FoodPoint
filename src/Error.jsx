import { Link } from "react-router-dom";


const Error = () => {
  return (
    <section className="flex items-center min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="max-w-lg text-center">
          <h2 className="mb-6 text-8xl md:text-9xl font-extrabold text-orange-500">
            <span className="sr-only">Error</span>
            404
          </h2>

          <h1 className="mb-4 text-2xl md:text-3xl font-bold text-gray-800">
            Oops! This page isn’t on the menu. 🍽️
          </h1>

          <p className="mb-8 text-gray-500 text-base md:text-lg">
            But don’t worry — there are plenty of delicious things waiting for
            you on our homepage!
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-3 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300 shadow-md"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;