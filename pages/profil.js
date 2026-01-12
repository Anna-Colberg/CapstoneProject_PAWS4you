import CreatePetForm from "@/components/Create/CreatePetForm";
import Navigation from "@/components/Navigation/navigation";
import { StyledContainer, Subtitle, Title } from "@/components/styledPages";
/* import { useSession } from "next-auth/react"; */
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default function ProfilPage() {
  /* const { data: session, status } = useSession(); */

  const [showForm, setShowForm] = useState(false);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    const storedPets = localStorage.getItem("myPets");
    if (storedPets) {
      setMyPets(JSON.parse(storedPets));
    }
  });

  /* if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  } */

  function handleAddPet(pet) {
    setMyPets((prev) => [
      ...prev,
      { ...pet, id: crypto?.randomUUID?.() || Date.now().toString() },
    ]);
    setShowForm(false);
  }

  return (
    <StyledContainer>
      <Title>myPAWS</Title>
      <Subtitle>My Dogs/Cats/Pets/...</Subtitle>
      <h3>Test User`s Profile</h3>
      <Navigation />

      <h4>Create myPAWS</h4>
      <button onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? "Cancel" : "+"}
      </button>

      {showForm && <CreatePetForm onAddPet={handleAddPet} />}

      <div>
        {myPets.length === 0 && <p> Not addet Pets.</p>}
        {myPets.map((pet) => (
          <div key={pet.id}>
            <strong>{pet.name}</strong> - {pet.species} - {pet.breed} - {pet.age} - {pet.needs} - Sick:{pet.sick} - Dead: {pet.dead}
          </div>
        ))}
      </div>
    </StyledContainer>
  );
}
