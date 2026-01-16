import BreedCard from "@/components/Card/BreedCard";
import Navigation from "@/components/Navigation/navigation";
import { Grid } from "@/components/styledFavorites";
import { PageWrapper, StyledContainer, Subtitle, Title } from "@/components/styledPages";
import useSWR from "swr";

export default function FavoritePage({ favoriteDogIds, toggleFavorite }) {
  const { data: dogs, isLoading, error } = useSWR(`/api/portraits`);

  if (isLoading) return <p>Loading Dogs…</p>;
  if (error) return <p>Error loading dogs.</p>;
  if (!dogs) return <p>No dogs found.</p>;

  const favoriteDogs = dogs.filter((dog) => favoriteDogIds?.includes(dog._id));

  return (
    <PageWrapper>
      <StyledContainer>
        <Title>Favorites Page</Title>
        <Subtitle>your Favorites 🐾</Subtitle>

        {favoriteDogs.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <Grid>
            {favoriteDogs.map((dog) => (
              <BreedCard
                key={dog._id}
                {...dog}
                toggleFavorite={toggleFavorite}
                favoriteDogIds={favoriteDogIds}
              />
            ))}
          </Grid>
        )}
        <Navigation />
      </StyledContainer>
    </PageWrapper>
  );
}