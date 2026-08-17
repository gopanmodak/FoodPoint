import { Fade } from "react-awesome-reveal";
import { FaFileContract } from "react-icons/fa";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-linear-0-to-b from-orange-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-4xl mb-5">
              <FaFileContract />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Terms of <span className="text-orange-500">Use</span>
            </h1>

            <div className="flex justify-center items-center gap-3 mt-5">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>

            <p className="text-gray-500 mt-5">
              Last updated: August 2026
            </p>
          </div>
        </Fade>

        {/* Main Content */}
        <Fade direction="up" triggerOnce>
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 space-y-8">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-600 leading-7">
                Welcome to{" "}
                <span className="text-orange-500 font-bold">
                  FoodPoint
                </span>
                . By accessing or using our website, you agree to comply with
                and be bound by these Terms of Use. If you do not agree with
                these terms, please do not use our website or services.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                2. Use of Our Website
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                You agree to use the FoodPoint website only for lawful
                purposes. You must not use the website in a way that may
                damage, disable, or interfere with its operation.
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Do not use the website for fraudulent activities.</li>
                <li>Do not attempt to gain unauthorized access.</li>
                <li>Do not upload harmful or malicious content.</li>
                <li>Do not misuse our services or website resources.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                3. Food Information
              </h2>

              <p className="text-gray-600 leading-7">
                We make reasonable efforts to ensure that menu descriptions,
                images, prices, ingredients, and other food information are
                accurate and up to date. However, information may occasionally
                change without prior notice.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                4. Orders and Reservations
              </h2>

              <p className="text-gray-600 leading-7">
                When you place an order or make a reservation through our
                website, you agree to provide accurate and complete
                information. FoodPoint reserves the right to accept, modify,
                or cancel an order or reservation when necessary.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                5. Prices and Payments
              </h2>

              <p className="text-gray-600 leading-7">
                All prices displayed on our website are subject to change
                without prior notice. Additional charges such as delivery fees
                or applicable taxes may apply depending on the order and
                service selected.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                6. Intellectual Property
              </h2>

              <p className="text-gray-600 leading-7">
                All content available on the FoodPoint website, including
                logos, images, graphics, text, designs, and other materials,
                belongs to FoodPoint or its respective content providers.
                Unauthorized copying, reproduction, or distribution is not
                permitted.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                7. User Content
              </h2>

              <p className="text-gray-600 leading-7">
                If you submit reviews, comments, feedback, or other content to
                FoodPoint, you agree that the content should be truthful,
                respectful, and lawful. You should not submit content that is
                abusive, misleading, offensive, or violates another person's
                rights.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                8. Third-Party Services
              </h2>

              <p className="text-gray-600 leading-7">
                Our website may contain links or integrations with third-party
                services such as payment providers, maps, analytics tools, or
                other external services. FoodPoint is not responsible for the
                policies or practices of those third parties.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                9. Limitation of Liability
              </h2>

              <p className="text-gray-600 leading-7">
                FoodPoint makes reasonable efforts to maintain a reliable
                website and service. However, we do not guarantee that the
                website will always be available, error-free, or uninterrupted.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                10. Changes to These Terms
              </h2>

              <p className="text-gray-600 leading-7">
                We may update these Terms of Use from time to time. Changes
                will become effective when they are posted on this page. We
                encourage users to review this page periodically.
              </p>
            </section>

            {/* 11 */}
            <section className="bg-orange-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                11. Contact Us
              </h2>

              <p className="text-gray-600 leading-7">
                If you have any questions regarding these Terms of Use, please
                contact us.
              </p>

              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-orange-500">
                    support@foodpoint.com
                  </span>
                </p>

                <p>
                  <strong>Phone:</strong> +880 1234-567890
                </p>

                <p>
                  <strong>Address:</strong> Dhaka, Bangladesh
                </p>
              </div>
            </section>

          </div>
        </Fade>

        <p className="text-center text-gray-400 text-sm mt-8">
          © 2026 FoodPoint. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default TermsOfUse;