import { useState } from "react";
import {
  AddButton,
  CreateInput,
  CreateLabel,
  FormGroup,
  FormWrapper,
  ImagePet,
  RadioGroup,
  RadioLabel,
  VerticalStroke,
} from "./styledCreateForm";

export default function CreatePetForm({ onAddPet }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [needs, setNeeds] = useState("");
  const [sick, setSick] = useState("");
  const [dead, setDead] = useState("no");
 
  function handleSubmit(event) {
    event.preventDefault();
    onAddPet({
      name,
      species,
      breed,
      age: Number(age),
      needs,
      sick,
      dead,
    });
    setName("");
    setSpecies("");
    setBreed("");
    setAge("");
    setNeeds("");
    setSick("no");
    setDead("no");
    setImage("/images/placeholder.jpg");
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
          onChange={(event) => setAge(Number(event.target.value))}
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

      <AddButton type="submit">Add NEW Pet</AddButton>
    </FormWrapper>
  );
}
