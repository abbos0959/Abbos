import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider({ head, title, src1 }) {
   return (
      <>
         <Swiper
            slidesPerView={5}
            spaceBetween={10}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               {" "}
               <IMG
                  src={`${
                     src1 ? src1 : "https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
                  }`}
               />
               <div>
                  <h4>{head}</h4>
                  <p style={{ color: "#7B7B7B" }}>{title}</p>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}

export const IMG = styled.img`
   width: 200px;
   border-radius: 20px;
   overflow: hidden;
`;
