import BreedCard from "./BreedCard";

export default function BreedList({ dogs }) {
  if (!dogs || dogs.length === 0) {
    return <p>No Dogs found.</p>;
  }
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog._id}>
          <BreedCard
            _id={dog._id}
            name={dog.name}
            description={dog.description}
            imageUrl={dog.imageUrl}
            fciNumber={dog.fciNumber}
            high={dog.high}
          />
        </li>
      ))}
    </ul>
  );
}
