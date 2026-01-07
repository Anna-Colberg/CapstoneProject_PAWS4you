import BreedList from "@/components/List/BreedList";
import Navigation from "@/components/Navigation/navigation";
import { StyledContainer, Subtitle, Title } from "@/components/styledPages";
import useSWR from "swr";

export default function FavoritePage({ favoriteDogIds, toggleFavorite }) {
  const { data: dogs, isLoading, error } = useSWR(`/api/portraits`);

  if (isLoading) return <p>Loading Dogs…</p>;
  if (error) return <p>Error loading dogs.</p>;
  if (!dogs) return <p>No dogs found.</p>;

  const favoriteDogs = dogs.filter((dog) => favoriteDogIds?.includes(dog._id));

  return (
    <>
      <StyledContainer>
        <Title>Favorites Page</Title>
        <Subtitle>your Favorites 🐾🎔</Subtitle>
        {favoriteDogs.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <BreedList
            dogs={favoriteDogs}
            toggleFavorite={toggleFavorite}
            favoriteDogIds={favoriteDogIds}
          />
        )}
        <Navigation />
      </StyledContainer>
    </>
  );
}
