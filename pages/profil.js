import Navigation from "@/components/Navigation/navigation";
import { StyledContainer, Subtitle, Title } from "@/components/styledPages";
import { useSession } from "next-auth/react";

export default function ProfilPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <StyledContainer>
      <Title>myPAWS</Title>
      <Subtitle>My Dogs/Cats/Pets/...</Subtitle>
      <h3>{session.user.name}`s Profile</h3>
      <Navigation />
    </StyledContainer>
  );
}
