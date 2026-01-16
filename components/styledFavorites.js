import styled from "styled-components";
import Image from "next/image";


export const Grid = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
gap: 1rem;
`;

export const Card = styled.article`
background-color: var(--color-slider);
border-radius: 8px;
padding: 0.75rem;
text-align: center;
`;

export const GridImage = styled(Image)`
width: 100%;
height: 180px;
object-fit: cover;
border-radius: 6px;
`;