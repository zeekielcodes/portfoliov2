import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import theface from "../assets/images/theface.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function Testimonial() {
  return (
    <div className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <hr className="w-[40px] border-2 mb-4" />
      <p>What colleagues have to say about my works.</p>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[400px] mt-6 bg-[#51516D]"
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="quote">
            <img
              src="https://pbs.twimg.com/profile_images/1549505359391461376/ozd_bKCa_400x400.jpg"
              alt=""
            />
            <q>
              Ezekiel is a cool-headed professional with a great attitude
              towards learning and taking on new challenges/tasks.
            </q>
            <h4>Mr. Dennis Yesu</h4>
            <h5>Project Manager, Soft-Web Digital Ltd.</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          {" "}
          <div className="quote">
            <img
              src="https://pbs.twimg.com/profile_images/1549505359391461376/ozd_bKCa_400x400.jpg"
              alt=""
            />
            <q>
              Ezekiel is a cool-headed professional with a great attitude
              towards learning and taking on new challenges/tasks.
            </q>
            <h4>Mr. Dennis Yesu</h4>
            <h5>Project Manager, Soft-Web Digital Ltd.</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
