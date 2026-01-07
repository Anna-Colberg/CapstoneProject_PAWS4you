import Link from "next/link";
import { Card, Tabline, ImageWrapper } from "./styledBreedCard";
import FavoriteButton from "../FavoriteButton";

export default function BreedCard({
  _id,
  name,
  imageUrl,
  toggleFavorite,
  favoriteDogIds,
}) {
  const imageSrc = imageUrl || "/images/placeholder.jpg";
  const isFavorite = favoriteDogIds?.includes(_id);

  return (
    <Card className="breed-card">
      <Link href={`/dogs/${_id}`}>
        <ImageWrapper src={imageSrc} alt={name} width={200} height={200} />
      </Link>
      <Tabline>{name}</Tabline>
      <FavoriteButton
        _id={_id}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      ></FavoriteButton>
    </Card>
  );
}
