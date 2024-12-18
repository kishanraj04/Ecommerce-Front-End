import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import CategoryCard from "./CategoryCard";
import { Outlet } from "react-router-dom";
import ProductsLists from "./productsList/ProductsLists";

export default function Home() {
  return (
    <>
      <div className="w-full h-[30rem] flex justify-center items-center shadow-md">
        <div className="h-[70%] w-[80%] flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="../../images/beauty.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/decorations.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/fragance.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/furniturs.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/images.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/kitchen.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/laptops.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../images/shirts.jpg"
                alt=""
                className="h-[100%] w-[100%]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="h-[8rem] w-full">
        <div className="h-[8rem] w-full">
          <CategoryCard
            object={[
              { images: '../../images/beauty.jpg', path: 'beauty' },
              { images: '../../images/decorations.jpg', path: 'home-decoration' },
              { images: '../../images/fragance.jpg', path: 'fragances' },
              { images: '../../images/furniturs.jpg', path: 'furniture' },
              { images: '../../images/images.jpg', path: 'groceries' },
              { images: '../../images/kitchen.jpg', path: 'kitchen-accessories' },
              { images: '../../images/laptops.jpg', path: 'laptops' },
              { images: '../../images/shirts.jpg', path: 'men-shirts' }
            ]}
          />
        </div>
        
      </div>

      <div className="w-full h-auto">
        <Outlet/>
      </div>

      <ProductsLists/>
    </>
  );
}
