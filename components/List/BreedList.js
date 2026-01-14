import BreedCard from "../Card/BreedCard";
import { List, ListItem } from "./styledBreedList";

export default function BreedList({ dogs, favoriteDogIds, toggleFavorite }) {

if (!dogs || dogs.length === 0) {
  return <p></p>
}

  return (
    <List>
      {dogs.map((dog) => (
        <ListItem key={dog._id}>
          <BreedCard
            _id={dog._id}
            name={dog.name}
            description={dog.description}
            imageUrl={dog.imageUrl}
            imageDetail={dog.imageDetail}
            fciNumber={dog.fciNumber}
            high={dog.high}
            toggleFavorite={toggleFavorite}
            favoriteDogIds={favoriteDogIds}
          />
        </ListItem>
      ))}
    </List>
  );
}
