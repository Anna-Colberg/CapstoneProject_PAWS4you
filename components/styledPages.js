import styled from "styled-components";
import Image from "next/image";
import Bookmark from "/public/icons/bookmark.svg";


export const PageWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 90px;
`;
export const StyledContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto;
  padding: 2.5rem;
  background-color: aliceblue;
  border: 2px solid;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgb(0, 0, 0, 0.1);

  @media screen and (max-width: 1024px) {
    max-width: 95%;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
    margin: 1rem;
    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #801100ff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: solid;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  @media screen and (max-width: 768) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  color: #7d4140ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  
  @media screen and (max-width: 768px){
  font-size: 1.3rem;    
  }
  @media screen and (max-width: 480px){
  font-size: 1.1rem;    
  }
`;

export const RandomDogsGrid = styled.div`
display: flex;
gap: 16px;
flex-wrap: wrap;
`;

export const RandomDogItem = styled.div`
position: relative;
width: 180px;
height: 180px;
border-radius: 14px;
overflow: hidden;
`;

export const RandomDogImage = styled(Image)`
width: 200px;
height: 200px;
border-radius: 14px;
`;

export const ContentWrapper = styled.div`
max-width: 600px;
margin: 0 auto;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: fill 0.2s ease, transform 0.15s ease;
  }

  svg path {
    stroke: var(--accent);
    fill: ${({ $isFavorite }) => ($isFavorite ? "#0000" : "none")};
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const StyledBookmark = styled(Bookmark)`
width: 28px;
height: 28px;
transition: fill 0.2s ease, transform 0.15s ease;

path {
  fill: ${({ $isFavorite}) => ($isFavorite ? "black" : "none")};
  stroke: #0000;
}
`;