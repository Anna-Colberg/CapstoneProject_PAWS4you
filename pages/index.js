import { useRouter } from "next/router";
import { StyledSuccessMessageDiv } from "@/components/Login/styledMessage";
import { StyledContainer, Title, Subtitle } from "@/components/styledPages";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Slider from "@/components/Slider/Slider";

export default function HomePage() {
  const { data: dogs, isLoading, error } = useSWR(`/api/portraits`);

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
          Hello, {session?.user.name}!
        </StyledSuccessMessageDiv>
      )}
      <Title>PAWS4you</Title>
      <Subtitle>Your Bestfriends and more !</Subtitle>
      <Slider />
    </StyledContainer>
  );
}
