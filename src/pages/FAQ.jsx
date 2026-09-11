import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const axiosInstance = useAxiosSecure();

  const { data = [], error, isLoading } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const response = await axiosInstance.get("/faq");
      return response.data;
    },
  });

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading FAQs...</p>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center pt-15">
        <p className="text-orange-400">Data Not Found</p>
      </div>
    );
  }

  return (
    <div>
     <Fade direction="down" triggerOnce cascade >
       <div className="text-center mb-15 space-y-1">
        <h2 className="text-3xl font-bold text-orange-500">
          Frequently Asked Questions About Our Food & Delivery
        </h2>
        <p className="text-gray-500">
          Find quick answers about our dishes, delivery areas, refunds, and more.
        </p>
      </div>
     </Fade>

      <Fade direction="up" triggerOnce cascade duration={2000} >
        <div className="space-y-3 my-5 md:w-3xl mx-auto">
        {data.map((faq, index) => (
          <div
            key={index}
            className="border border-base-300 rounded-lg p-3 cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="font-semibold flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className="mt-2 text-sm text-orange-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
        </Fade>
    </div>
  );
};

export default FAQ;
