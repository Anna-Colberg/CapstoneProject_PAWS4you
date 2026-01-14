import CreatePetForm from "@/components/Create/CreatePetForm";
import {
  Button,
  CreateSection,
  DeleteButton,
  PetCard,
  PetInfo,
  PetList,
  PetName,
  SectionTitle,
} from "@/components/Create/styledCreateForm";
import Navigation from "@/components/Navigation/navigation";
import {
  PageWrapper,
  StyledContainer,
  Subtitle,
  Title,
} from "@/components/styledPages";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ProfilPage() {
  const { data: session, status } = useSession();

  const [showForm, setShowForm] = useState(false);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      const response = await fetch(`/api/pets`);
      const data = await response.json();
      setMyPets(data);
    }
    fetchPets();
  });


  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  
  async function handleAddPet(pet) {
    await fetch(`/api/pets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    });
    setMyPets((prev) => [...prev]);
  }

  async function handleDelete(id) {
    await fetch(`/api/pets`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMyPets((prev) => prev.filter((pet) => pet._id !== id));
  }

  return (
    <PageWrapper>
      <StyledContainer>
        <Title>myPAWS</Title>
        <Subtitle>My Dogs/Cats/Pets/...</Subtitle>
        <h3>Test User`s Profile</h3>
        <Navigation />

        <CreateSection>
          <SectionTitle>Create myPAWS</SectionTitle>
          <Button onClick={() => setShowForm((prev) => !prev)}>
            {showForm ? "Cancel" : "+"}
          </Button>
        </CreateSection>

        {showForm && <CreatePetForm onAddPet={handleAddPet} />}

        {myPets.length === 0 && <p> Not addet Pets.</p>}
        <PetList>
          {myPets.map((pet) => (
            <PetCard key={pet.id}>
              <PetName>{pet.name}</PetName>
              <PetInfo>Species : {pet.species}</PetInfo>
              <PetInfo>Breed : {pet.breed} </PetInfo>
              <PetInfo>Age : {pet.age}</PetInfo>
              <PetInfo>Needs : {pet.needs}</PetInfo>
              <PetInfo>Sick : {pet.sick}</PetInfo>
              <PetInfo>Dead : {pet.dead}</PetInfo>
              <DeleteButton type="button" onClick={() => handleDelete(pet._id)}>
                Delete
              </DeleteButton>
            </PetCard>
          ))}
        </PetList>
      </StyledContainer>
    </PageWrapper>
  );
}
