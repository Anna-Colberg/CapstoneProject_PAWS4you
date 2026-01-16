import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PortraitSlide, SliderWrapper } from "./styledSlider";
import "swiper/css";
import "swiper/css/pagination";
import BreedCard from "../Card/BreedCard";

export default function Slider({ dogs, toggleFavorite, favoriteDogIds }) {
  if (!dogs || dogs.length === 0) {
    return <p>Keine Hunde gefunden</p>;
  }

  return (
    <SliderWrapper>
      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={100}
        pagination={{ clickable: true }}
      >
        {dogs.map((dog) => (
          <SwiperSlide key={dog._id}>
            <PortraitSlide>
              <BreedCard
                _id={dog._id}
                name={dog.name}
                imageUrl={dog.imageUrl}
                toggleFavorite={toggleFavorite}
                favoriteDogIds={favoriteDogIds}
              />
            </PortraitSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}
