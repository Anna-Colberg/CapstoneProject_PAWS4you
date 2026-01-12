import { useRouter } from "next/router";
import { StyledSuccessMessageDiv } from "@/components/Login/styledMessage";
import {
  StyledContainer,
  Title,
  Subtitle,
  RandomDogsGrid,
  RandomDogItem,
  RandomDogImage,
} from "@/components/styledPages";
import { useSession } from "next-auth/react";
import { useState, useEffect, useMemo } from "react";
import useSWR from "swr";
import Navigation from "@/components/Navigation/navigation";
import TopRightLogin from "@/components/Login/topRightLogin";

export default function HomePage() {
  const { data: dogs, isLoading, error } = useSWR(`/api/portraits`);

  const randomDogs = useMemo(() => {
    if (!dogs) return [];
    return [...dogs].sort(() => 0.5 - Math.random()).slice(0, 1);
  }, [dogs]);

  const router = useRouter();
  const { login } = router.query;
  const { data: session } = useSession();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (login === "success" && session) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => setShowSuccessMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [login, session]);

  if (isLoading) return <p>Loading Dogs…</p>;
  if (error) return <p>Error loading.</p>;
  if (!dogs) return <p>No portraits and dogs found.</p>;

  return (
    <StyledContainer>
      {showSuccessMessage && (
        <StyledSuccessMessageDiv>
          Good Day, {session?.user.name}!
        </StyledSuccessMessageDiv>
      )}
      <Title>PAWS4you</Title>
      <TopRightLogin />
      <Subtitle>Your Bestfriends and more !</Subtitle>
      <RandomDogsGrid>
        {randomDogs.map((dog) => (
          <RandomDogItem key={dog._id}>
            <RandomDogImage src={dog.imageUrl} alt={dog.name} fill />
          </RandomDogItem>
        ))}
      </RandomDogsGrid>
      <Navigation />
    </StyledContainer>
  );
}
