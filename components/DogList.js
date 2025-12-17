import DogsCard from "./DogsCard";

export default function DogList({ dogs }) {
  if (!dogs || dogs.length === 0) {
    return <p>No Dogs found.</p>;
  }
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog._id}>
          <DogsCard
            _id={dog._id}
            name={dog.name}
            description={dog.description}
            imageUrl={dog.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
}
