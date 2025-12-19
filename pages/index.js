import { useRouter } from "next/router";
import { StyledSuccessMessageDiv } from "@/components/Login/styledMessage";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";


export default function HomePage() {
  const {data: dogs, isLoading, error} = useSWR(`/api/portraits`)


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
    <div>
       {showSuccessMessage && (
        <StyledSuccessMessageDiv>
          Hello, {session?.user.name}!
        </StyledSuccessMessageDiv>
      )}
      <h1>PAWS4you</h1>
      <h2>Your Bestfriends and more !</h2>
    </div>
  );
}
