import styled from "styled-components";
import Link from "next/link";

export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  
  .swiper {
    padding-bottom: 30px;
  }
  .swiper-slider{
    display:flex;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    background-color: #ccc;
  }
  .swiper-pagination-bullet-active {
    background-color: #333;
  }

@media screen and (max-width: 768px) {
  padding: 1.5rem;
}
@media screen and (max-width: 480px) {
  padding: 1rem;
}
`;

export const PortraitSlide = styled.div`
position: relative;
width: 100%;
max-width: 260px;
aspect-ratio: 3 / 4;
border-radius: 16px;
overflow: hidden;
`;