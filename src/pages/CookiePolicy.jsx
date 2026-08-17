import { Fade } from "react-awesome-reveal";
import { FaCookieBite } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-4xl mb-5">
              <FaCookieBite />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Cookie <span className="text-orange-500">Policy</span>
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

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                1. What Are Cookies?
              </h2>

              <p className="text-gray-600 leading-7">
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember information about
                your visit and provide a better, faster, and more personalized
                experience.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                2. How We Use Cookies
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                At{" "}
                <span className="text-orange-500 font-bold">
                  FoodPoint
                </span>
                , we may use cookies to:
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Remember your preferences and settings.</li>
                <li>Improve website performance and functionality.</li>
                <li>Understand how visitors use our website.</li>
                <li>Improve our services and user experience.</li>
                <li>Help provide relevant content and offers.</li>
              </ul>
            </section>

            {/* Types */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. Types of Cookies We Use
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                  <h3 className="font-bold text-orange-500 text-lg mb-2">
                    Essential Cookies
                  </h3>

                  <p className="text-gray-600 text-sm leading-6">
                    These cookies are necessary for the website to function
                    properly and provide essential features.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                  <h3 className="font-bold text-orange-500 text-lg mb-2">
                    Analytics Cookies
                  </h3>

                  <p className="text-gray-600 text-sm leading-6">
                    These cookies help us understand website traffic and how
                    visitors interact with our website.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                  <h3 className="font-bold text-orange-500 text-lg mb-2">
                    Preference Cookies
                  </h3>

                  <p className="text-gray-600 text-sm leading-6">
                    These cookies remember your preferences to provide a more
                    convenient browsing experience.
                  </p>
                </div>

              </div>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                4. Third-Party Cookies
              </h2>

              <p className="text-gray-600 leading-7">
                Some third-party services used on our website may place their
                own cookies on your device. These services may include
                analytics, maps, payment services, or other tools that help us
                provide our services.
              </p>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                5. Managing Cookies
              </h2>

              <p className="text-gray-600 leading-7">
                You can control or delete cookies through your browser
                settings. Most browsers allow you to block cookies or notify
                you before a cookie is stored. However, disabling certain
                cookies may affect some features of our website.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                6. Cookies and Your Privacy
              </h2>

              <p className="text-gray-600 leading-7">
                Cookies may collect certain information about your device and
                browsing activity. We use this information responsibly to
                improve your experience and operate our website. For more
                information about how we handle personal information, please
                review our Privacy Policy.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                7. Updates to This Policy
              </h2>

              <p className="text-gray-600 leading-7">
                We may update this Cookie Policy from time to time to reflect
                changes in our services, technology, or legal requirements. Any
                updates will be posted on this page with a revised update date.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-orange-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                8. Contact Us
              </h2>

              <p className="text-gray-600 leading-7">
                If you have any questions about our Cookie Policy, please
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

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-8">
          © 2026 FoodPoint. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default CookiePolicy;