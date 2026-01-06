import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PortraitSlide, SliderWrapper } from "./styledSlider";
import "swiper/css";
import "swiper/css/pagination";
import BreedCard from "../Card/BreedCard";

export default function Slider({ dogs }) {
  if (!dogs || dogs.length === 0) {
    return <p>Keine Hunde gefunden</p>;
  }

  return (
    <SliderWrapper>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {dogs.map((dog) => (
          <SwiperSlide key={dog._id}>
            <PortraitSlide>
              <BreedCard
                _id={dog._id}
                name={dog.name}
                imageUrl={dog.imageUrl}
              />
            </PortraitSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}
