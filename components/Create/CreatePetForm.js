import { useEffect, useState } from "react";
import {
  AddButton,
  CreateInput,
  CreateLabel,
  FormGroup,
  FormWrapper,
  RadioGroup,
  RadioLabel,
  VerticalStroke,
} from "./styledCreateForm";

export default function CreatePetForm({ onAddPet, onSaveEdit, editingPet }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [needs, setNeeds] = useState("");
  const [sick, setSick] = useState("");
  const [dead, setDead] = useState("no");

  function handleAgeChange(event) {
    const value = event.target.value;

    if (value === "") {
      setAge("");
      return;
    }
    const numberValue = Number(value);
    if (numberValue < 0) {
      setAge(0);
    } else if (numberValue > 20) {
      setAge(20);
    } else {
      setAge(numberValue);
    }
  }

  useEffect(() => {
    if (editingPet) {
      setName(editingPet.name || "");
      setSpecies(editingPet.species || "");
      setBreed(editingPet.breed || "");
      setAge(editingPet.age || 0);
      setNeeds(editingPet.needs || "");
      setSick(editingPet.sick || "no");
      setDead(editingPet.dead || "no");
    }
  }, [editingPet]);

  function handleSubmit(event) {
    event.preventDefault();

    if (editingPet) {
      onSaveEdit({
        ...editingPet,
        name,
        species,
        breed,
        age: Number(age),
        needs,
        sick,
        dead,
      });
    } else {
      onAddPet({
        name,
        species,
        breed,
        age: Number(age),
        needs,
        sick,
        dead,
      });
    }
    setName("");
    setSpecies("");
    setBreed("");
    setAge(0);
    setNeeds("");
    setSick("no");
    setDead("no");
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <CreateLabel>Name of the Pet : </CreateLabel>
        <CreateInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <CreateLabel>Pet Species : </CreateLabel>
        <CreateInput
          type="text"
          placeholder="Species"
          value={species}
          onChange={(event) => setSpecies(event.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <CreateLabel>Pet Breed : </CreateLabel>
        <CreateInput
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <CreateLabel>Age of the Pet : </CreateLabel>
        <CreateInput
          type="number"
          placeholder="Age"
          value={age}
          min={0}
          max={20}
          onChange={handleAgeChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <CreateLabel>Pet´s need : </CreateLabel>
        <CreateInput
          type="text"
          placeholder="Needs..."
          value={needs}
          onChange={(event) => setNeeds(event.target.value)}
          required
        />
      </FormGroup>

      <VerticalStroke />

      <FormGroup>
        <CreateLabel>Sick?</CreateLabel>
        <RadioGroup>
          <RadioLabel>
            <CreateInput
              type="radio"
              name="sick"
              value="yes"
              checked={sick === "yes"}
              onChange={(event) => setSick(event.target.value)}
            />
            Yes
          </RadioLabel>
          <RadioLabel>
            <CreateInput
              type="radio"
              name="sick"
              value="no"
              checked={sick === "no"}
              onChange={(event) => setSick(event.target.value)}
            />
            No
          </RadioLabel>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <CreateLabel>Dead?</CreateLabel>
        <RadioGroup>
          <RadioLabel>
            <CreateInput
              type="radio"
              name="dead"
              value="yes"
              checked={dead === "yes"}
              onChange={(event) => setDead(event.target.value)}
            />
            Yes
          </RadioLabel>
          <RadioLabel>
            <CreateInput
              type="radio"
              name="dead"
              value="no"
              checked={dead === "no"}
              onChange={(event) => setDead(event.target.value)}
            />
            No
          </RadioLabel>
        </RadioGroup>
      </FormGroup>

      <AddButton type="submit">
        {editingPet ? "Save changes" : "Add NEW Pet"}
      </AddButton>
    </FormWrapper>
  );
}
