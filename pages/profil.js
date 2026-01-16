import CreatePetForm from "@/components/Create/CreatePetForm";
import {
  Button,
  CreateSection,
  DeleteButton,
  EditButton,
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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { BackButton } from "@/components/Notice/styledNotice";

export default function ProfilPage() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [myPets, setMyPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  function handleCancelForm() {
    setShowForm(false);
    setEditingPet(null);
  }

  useEffect(() => {
    if (!session) return;

    async function fetchPets() {
      const response = await fetch(`/api/pets`);
      const data = await response.json();
      setMyPets(data);
    }
    fetchPets();
  }, [session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <PageWrapper>
        <BackButton onClick={() => router.back()}>BACK</BackButton>

        <StyledContainer>
          <Title>myPAWS</Title>
          <p>You must be logged in to view this page.</p>
        </StyledContainer>
        <Navigation />
      </PageWrapper>
    );
  }

  async function handleAddPet(pet) {
    const response = await fetch(`/api/pets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    });
    const newPet = await response.json();
    setMyPets((prev) => [...prev, newPet]);
  }

  async function handleDelete(id) {
    await fetch(`/api/pets`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMyPets((prev) => prev.filter((pet) => pet._id !== id));
  }

  async function handleEdit(pet) {
    setEditingPet(pet);
    setShowForm(true);
  }

  async function handleSaveEdit(updatedPet) {
    const response = await fetch(`/api/pets/${updatedPet._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPet),
    });

    const savedPet = await response.json();
    setMyPets((prev) =>
      prev.map((pet) => (pet._id === savedPet._id ? savedPet : pet))
    );

    setEditingPet(null);
    setShowForm(false);
  }

  return (
    <PageWrapper>
      <StyledContainer>
        <Title>myPAWS</Title>
        <Subtitle>My Dogs/Cats/Pets/...</Subtitle>
        <h3>{session.user.name}`s Profile</h3>
        <Navigation />

        <CreateSection>
          <SectionTitle>Create myPAWS</SectionTitle>
          {
            <Button
              onClick={() => {
                if (showForm) {
                  handleCancelForm();
                } else {
                  setEditingPet(null);
                  setShowForm(true);
                }
              }}
            >
              {showForm ? "Cancel" : "+"}
            </Button>
          }
        </CreateSection>

        {showForm && (
          <CreatePetForm
            onAddPet={handleAddPet}
            onSaveEdit={handleSaveEdit}
            editingPet={editingPet}
          />
        )}

        {myPets.length === 0 && <p> Not addet Pets.</p>}
        <PetList>
          {myPets.map((pet) => (
            <PetCard key={pet._id}>
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
              <EditButton type="button" onClick={() => handleEdit(pet)}>
                Edit
              </EditButton>
            </PetCard>
          ))}
        </PetList>
      </StyledContainer>
    </PageWrapper>
  );
}
