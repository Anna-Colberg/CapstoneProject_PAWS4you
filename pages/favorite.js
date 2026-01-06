import Navigation from "@/components/Navigation/navigation";
import { StyledContainer, Subtitle, Title } from "@/components/styledPages";
import useSWR from "swr";

export default function FavoritePage() {
  const { data: dogs, isLoading, error } = useSWR(`/api/portraits`);

  if (isLoading) return <p>Loading Dogs…</p>;
  if (error) return <p>Error loading dogs.</p>;
  if (!dogs) return <p>No dogs found.</p>;


  return (
    <>
      <StyledContainer>
        <Title>Favorites Page</Title>
        <Subtitle>your Favorites 🐾🎔</Subtitle>
        <Navigation />
      </StyledContainer>
    </>
  );
}
