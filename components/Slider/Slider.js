import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SliderWrapper, Slide } from "./styledSlider";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Slide href="/lexikon">Lexikon</Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide href="/favorite">Favorites</Slide>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}
