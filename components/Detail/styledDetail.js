import styled from "styled-components";

export const DetailStyledContainer = styled.div`
max-width: 800px;
margin: 2rem auto;
padding: 3rem;
color: var(--color-primary);
background-color: var(--color-input);
border: 2px solid var(--color-secondary) ;
border-radius: 12px;
box-shadow: 0 4px 15px rgb(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
display: flex;
justify-content: center;
color: var(--color-primary);
font-size: 2rem;
margin-bottom: 0%.5rem;
`;

export const ImageWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 1rem;
`;

export const BreedImage = styled.img`
width: 100%;
max-width: 250px;
border-radius: 12px;
margin-bottom: 1rem;
`;