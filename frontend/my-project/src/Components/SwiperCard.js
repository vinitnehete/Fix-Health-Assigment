import React from "react";
import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const SwiperCard = () => {
    const Reviews = [
        {
          name: "John Doe",
          text: "I am very satisfied with the service. The assessment method is excellent, and the support team is responsive. Thanks to FixHealth for their help.",
        },
        {
          name: "Jane Smith",
          text: "The back pain from my sitting job has significantly improved. FixHealth accommodated my schedule despite time zone variations. Thank you for your assistance.",
        },
        {
          name: "Bob Johnson",
          text: "I successfully addressed my back pain issues from the comfort of my home. Fix Health is known for quality, pocket-friendly, and consistent care. Grateful for their help.",
        },
        {
          name: "Alice Williams",
          text: "The team at FixHealth did a great job easing my sitting job back pain. They were flexible with time zone differences, making it convenient for me. Appreciate their support.",
        },
        {
          name: "Charlie Brown",
          text: "Fixed my back pain issues from home with the help of Fix Health. Their commitment to quality and affordable care is commendable. Thank you for your assistance.",
        },
    ];
    

  return (
    <section className=" bg-gray-900  pb-12" id="reviewsection overflow-auto">
      <div className="mx-auto max-w-screen-2xl px-8 py-12 sm:px-6 lg:px-12 lg:py-16">
        <h2 className="text-center pb-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Reviews from our Customers
        </h2>

        <div
          style={{
            display: "flex",
            marginTop: "90px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            
            
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              700: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
            
          >
            {Reviews.map((review, index) => {
              return (
                <>
                  <SwiperSlide>
                    <blockquote
                      className="rounded-lg bg-gray-100 h-full p-6 shadow-sm sm:p-8 "
                      key={index}
                    >
                      <div className="flex items-center gap-4">
                       

                        <div>
                          
                          <p className="mt-0.5 text-lg font-medium text-blue-500">
                            {review.name}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700 line-clamp-4">{review.text}</p>
                    </blockquote>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
          
        </div>
      </div>
    </section>
  );
};

export default SwiperCard;