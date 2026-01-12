import { useState } from "react";

export default function CreatePetForm({ onAddPet }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [needs, setNeeds] = useState("");
  const [sick, setSick] = useState(false);
  const [dead, setDead] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    onAddPet({ name, species, breed, age, needs, sick, dead });
    setName("");
    setSpecies("");
    setBreed("");
    setAge("");
    setNeeds("");
    setSick("");
    setDead("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Species"
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(Number(event.target.value))}
        required
      />
      <input
        type="text"
        placeholder="Needs..."
        value={needs}
        onChange={(event) => setNeeds(event.target.value)}
        required
      />
      <label>Sick?</label>
      <div>
        <label>
      <input
        type="radio"
        name="sick"
        value="yes"
        checked={sick === "yes"}
        onChange={(event) => setSick(event.target.value)}
      />
      Yes
      </label>
           <label>
      <input
        type="radio"
        name="sick"
        value="no"
        checked={sick === "no"}
        onChange={(event) => setSick(event.target.value)}
      />
      No
      </label>
      </div>
      <label>Dead?</label>
      <div>
        <label>
      <input
        type="radio"
        name="dead"
        value="yes"
        checked={dead === "yes"}
        onChange={(event) => setDead(event.target.value)}
      />
      Yes
      </label>
          <label>
      <input
        type="radio"
        name="dead"
        value="no"
        checked={dead === "no"}
        onChange={(event) => setDead(event.target.value)}
      />
      No
      </label>
      </div>
      <button type="submit">Add NEW Pet</button>
    </form>
  );
}
