import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Homer = styled.div`
  width: 95vw;
  margin: auto;

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 3%;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .quotes {
    display: flex;
    flex-direction: column;
    margin: 3rem auto;

    p:nth-of-type(1) {
      font-size: 20px;
      font-weight: bolder;
    }
  }

  @media screen and (min-width: 700px) {
    width: 85%;
    .quotes {
      font-size: 25px;
      p:nth-of-type(1) {
        font-size: 27px;
      }
    }

    button {
      font-size: 24px;
    }
    .images {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .my__swiper{
      display: none;
    }
  }


  @media screen and (max-width: 699px){
    .images{
      display: none;
    }

    .my__swiper{
      height: 400px;

      img{
        width: 100%;
        height: 100%;
      }
    }
  }
`;

function HomePage() {
  return (
    <Homer>
      <Swiper
        // install Swiper modules
        modules={[Navigation,  ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        onSlideChange={() => console.log("slide change")}
        className= "my__swiper"
      >
        <SwiperSlide>
        <img src="../images/img1.jpg" alt="img1" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="../images/img2.jpg" alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../images/img3.jpg" alt="img2" />
        </SwiperSlide>
      </Swiper>
      <div className="images">
        <img src="../images/img1.jpg" height="300" alt="img1" />
        <img src="../images/img2.jpg" height="300" alt="img2" />
        <img src="../images/img3.jpg" height="300" alt="img3" />
      </div>

      <div className="quotes text-center">
        <p className="text-primary">Quick And Easy To Use Anytime, Anywhere!</p>
        <p>"Plan Your Day Better, Get Your Life Organised"</p>
        <p>TASKMATE Lets You Keep Track Of Your Tasks in One Place</p>
        <button
          className="btn btn-primary"
          style={{ width: "fit-content", margin: "auto" }}
        >
          Get Started
        </button>
      </div>
    </Homer>
  );
}

export default HomePage;
