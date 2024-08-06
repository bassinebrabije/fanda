import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'; // Adjusted import

import 'swiper/swiper-bundle.css'; // Importing Swiper CSS

// Install required modules


const Carousel = () => {
    return (
        <div className="w-full relative">
            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={20}
                navigation
                breakpoints={{
                    1920: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1028: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    990: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }}
            >
                {[1, 2, 3, 4].map((slide) => (
                    <SwiperSlide key={slide}>
                        <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                            <span className="text-2xl font-semibold text-indigo-600">Slide {slide}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
