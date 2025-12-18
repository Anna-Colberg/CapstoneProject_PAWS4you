import Link from "next/link";
import Image from "next/image";

export default function BreedCard({ _id, name, high, fciNumber, imageUrl }) {
  const imageSrc = imageUrl || "/images/placeholder.jpg";

  return (
    <article classname="breed-card">
      <Link href={`/dogs/${_id}`}>
        <div className="image-wrapper">
          <Image
            src={imageSrc}
            alt={name}
            width={200}
            height={200}
            className="breed-image"
          />
        </div>

        <h3 className="breed-name">{name}</h3>
      </Link>
      <p>
        <strong>Schultergröße:</strong> {high}
      </p>
      <p>
        <strong>FCI-Nummer:</strong> {fciNumber}
      </p>
    </article>
  );
}
