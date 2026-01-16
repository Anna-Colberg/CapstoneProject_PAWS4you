import styled from "styled-components";
import Image from "next/image";

export const Card = styled.article`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: relative;
  background-color: rgba(135, 113, 113, 0.67);
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const Tabline = styled.h3`
  margin-top: 85%;
  font-size: 0.95rem;
  color: #f3ee9b;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 6px;

  position: absolute;
  background-color: rgb(162, 32, 32);
  word-break: break-word;
  max-width: 100%;

  @media screen and (max-width: 480) {
    font-size: 16px;
    left: 20%;
  }
`;

export const Info = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    gap: 12px;
  }
`;

export const InfoLabel = styled.span`
  font-size: medium;
  font-weight: 600;
  color: #000000;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const InfoValue = styled.span`
  font-size: medium;
  color: #000000;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const ImageWrapper = styled(Image)`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 12px;

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
