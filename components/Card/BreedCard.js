import Link from "next/link";
import { Card, Tabline, ImageWrapper } from "./styledBreedCard";

export default function BreedCard({ _id, name, high, fciNumber, imageUrl }) {
  const imageSrc = imageUrl || "/images/placeholder.jpg";

  return (
    <Card className="breed-card">
      <Link href={`/dogs/${_id}`}>
        <ImageWrapper src={imageSrc} alt={name} width={200} height={200} />
      <Tabline>{name}</Tabline>
      </Link>
    </Card>
  );
}
