import styled from "styled-components";
import Image from "next/image";


export const Card = styled.article`
display: grid;
grid-template-columns: 1fr 200px;
gap: 16px;
align-items: start;
position: relative;
background-color: rgba(219, 36, 36, 1);
border-radius: 8px;

@media screen and (max-width: 768px) {
grid-template-columns: 1fr;
}
`;

export const Tabline = styled.h3`
margin: 0;
font-size: 18px;
color: #980202ad;
font-weight: bold;
position: absolute;
border-bottom: solid black;
border-left: solid black;
border-right: solid black;
top: 50px;
left: 50%;
background-color: #fbbcbcff;

@media screen and (max-width: 480) {
font-size: 16px;
left: 20%;
}
`;

export const Info = styled.div`
margin: 0;
font-size: 14px;
display: flex;
flex-direction: column;
gap: 10px;
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
width: 200px;
height: 200px;
border-radius: 8px;

@media screen and (max-width: 768px) {
width: 100%;
height: auto;
}
`;