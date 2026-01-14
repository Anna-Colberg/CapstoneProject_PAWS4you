import styled from "styled-components";
import Image from "next/image";


export const Card = styled.article`
width: 220px;
display: flex;
flex-direction: column;
gap: 16px;
align-items: center;
position: relative;
background-color: rgba(219, 36, 36, 1);
border-radius: 8px;

@media screen and (max-width: 768px) {
grid-template-columns: 1fr;
}
`;

export const Tabline = styled.h3`
margin-top: 0.5rem;
font-size: 1rem;
color: #980202ad;
font-weight: 600;
text-align: center;
line-height: 1.2;
position: absolute;
border-bottom: solid black;
border-left: solid black;
border-right: solid black;

background-color: #fbbcbcff;
word-break: break-word;
max-width: 100%;

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
overflow: hidden;
border-radius: 12px;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

@media screen and (max-width: 768px) {
width: 100%;
height: auto;
}
`;