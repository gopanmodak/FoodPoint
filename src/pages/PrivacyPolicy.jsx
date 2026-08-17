import { Fade } from "react-awesome-reveal";
import { FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-4xl mb-5">
              <FaShieldAlt />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Privacy <span className="text-orange-500">Policy</span>
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

        {/* Content */}
        <Fade direction="up" triggerOnce>
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 space-y-8">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                1. Introduction
              </h2>

              <p className="text-gray-600 leading-7">
                Welcome to{" "}
                <span className="text-orange-500 font-bold">
                  FoodPoint
                </span>
                . We respect your privacy and are committed to protecting
                your personal information. This Privacy Policy explains what
                information we collect, how we use it, and how we protect it
                when you use our website and services.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                2. Information We Collect
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                Depending on how you use our website, we may collect
                information such as:
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your name and contact information.</li>
                <li>Email address and phone number.</li>
                <li>Delivery or reservation information.</li>
                <li>Order and transaction details.</li>
                <li>Messages, feedback, and reviews you submit.</li>
                <li>Basic device and website usage information.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                3. How We Use Your Information
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                We may use the information we collect to:
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process and manage your orders.</li>
                <li>Manage table reservations.</li>
                <li>Respond to your questions and requests.</li>
                <li>Provide customer support.</li>
                <li>Improve our website and services.</li>
                <li>Send important service-related communications.</li>
                <li>Prevent fraud and protect our website.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                4. Payment Information
              </h2>

              <p className="text-gray-600 leading-7">
                When you make an online payment, payment information may be
                processed by third-party payment providers. We do not
                intentionally store complete payment card details on our own
                servers. Payment providers handle payment information according
                to their own privacy and security policies.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                5. Cookies and Tracking Technologies
              </h2>

              <p className="text-gray-600 leading-7">
                We may use cookies and similar technologies to remember your
                preferences, understand website usage, improve performance, and
                provide a better browsing experience. You can manage cookies
                through your browser settings.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                6. Sharing Your Information
              </h2>

              <p className="text-gray-600 leading-7">
                We may share necessary information with trusted service
                providers who help us operate our business, such as payment
                processors, delivery partners, hosting providers, and analytics
                services. We only share information where reasonably necessary
                to provide or improve our services.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                7. Data Security
              </h2>

              <p className="text-gray-600 leading-7">
                We take reasonable technical and organizational measures to
                protect your personal information from unauthorized access,
                misuse, alteration, or disclosure. However, no internet
                transmission or electronic storage system can be guaranteed to
                be completely secure.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                8. Data Retention
              </h2>

              <p className="text-gray-600 leading-7">
                We retain personal information only for as long as reasonably
                necessary to provide our services, fulfill business purposes,
                resolve disputes, maintain records, or comply with applicable
                legal requirements.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                9. Third-Party Links
              </h2>

              <p className="text-gray-600 leading-7">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices,
                content, or security of those external websites. We recommend
                reviewing their privacy policies before providing personal
                information.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                10. Children's Privacy
              </h2>

              <p className="text-gray-600 leading-7">
                Our website is not intentionally designed to collect personal
                information from children. If you believe that a child has
                provided personal information to us, please contact us so that
                we can take appropriate action.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                11. Your Privacy Choices
              </h2>

              <p className="text-gray-600 leading-7">
                Depending on applicable laws, you may have rights regarding
                your personal information, including requesting access,
                correction, or deletion of certain information. To make a
                request, please contact us using the information below.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                12. Changes to This Privacy Policy
              </h2>

              <p className="text-gray-600 leading-7">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technology, or legal requirements.
                Updated versions will be posted on this page with a revised
                "Last updated" date.
              </p>
            </section>

            {/* 13 Contact */}
            <section className="bg-orange-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                13. Contact Us
              </h2>

              <p className="text-gray-600 leading-7">
                If you have any questions, concerns, or requests regarding
                this Privacy Policy, please contact us.
              </p>

              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-orange-500">
                    privacy@foodpoint.com
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

export default PrivacyPolicy;