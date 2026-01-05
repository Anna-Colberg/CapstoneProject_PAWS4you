import {
  DetailStyledContainer,
  Title,
  ImageWrapper,
  BreedImage,
} from "./styledDetail";

export default function Detail({ dog }) {
  const imageSrc = dog.imageDetail || dog.imageUrl || "/images/placeholder.png";

  return (
    <DetailStyledContainer>
      <Title>{dog.name}</Title>
      <ImageWrapper>
        <BreedImage src={imageSrc} alt={dog.name} />
      </ImageWrapper>
      <p>
        <strong>Schultergröße:</strong> {dog.high}
      </p>
      <p>
        <strong>FCI-Nummer:</strong> {dog.fciNumber}
      </p>
      <p>
        <strong>Group/Section:</strong> {dog.groupsection}
      </p>

      <p>{dog.description}</p>
    </DetailStyledContainer>
  );
}
