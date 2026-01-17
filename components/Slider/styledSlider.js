import styled from "styled-components";


export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  overflow: visible;
  
  .swiper {
    overflow: hidden;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 50px;
    padding-top: 20px;
  }
  .swiper-slide{
    display:flex;
    justify-content: center;
    width: auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.5;
    flex-shrink: 0;
  }
  .swiper-slide-active {
    transform:scale(1.05);
    opacity: 1;
  }
  .swiper-pagination-bullet {
    background-color: var(--color-slider);
  }
  .swiper-pagination-bullet-active {
    background-color: var(--color-h1);
  }

@media screen and (max-width: 480px) {
  padding: 1rem;
}
`;

export const PortraitSlide = styled.div`
position: relative;
width: 220px;
max-width: 260px;
aspect-ratio: 3 / 4;
border-radius: 16px;
overflow: hidden;
`;