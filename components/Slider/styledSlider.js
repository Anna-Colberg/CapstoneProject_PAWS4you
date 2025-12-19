import styled from "styled-components";
import Link from "next/link";

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  .swiper {
    padding-bottom: 2rem;
  }
  .swiper-pagination-bullet {
    background-color: #ccc;
  }
  .swiper-pagination-bullet-active {
    background-color: #333;
  }
`;

export const Slide = styled(Link)`
  height: 220px;
  background-color: black;
  color: blue;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale() (1.03);
  }
`;
