import Image from "next/image";


export default function Detail({ dog, imageUrl }) {
    const imageSrc = imageUrl || "/images/placeholder.jpg";

  return (
    <>
      <h1>{dog.name}</h1>
      <Image
        src={imageSrc}
        alt={dog.name}
        width={200}
        height={200}
        className="breed-image"
      />
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
    </>
  );
}
