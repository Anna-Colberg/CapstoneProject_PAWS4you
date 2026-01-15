import { useState } from "react";
import {
  FormWrapper,
  Form,
  Input,
  SubmitButton,
  CancelButton,
} from "./styledFilter";

export default function Searchbar({
  searchName,
  setSearchName,
  searchHigh,
  setSearchHigh,
  onSubmit,
}) {
  const [nameInput, setNameInput] = useState(searchName);
  const [highInput, setHighInput] = useState(searchHigh);

  function handleSubmit(event) {
    event.preventDefault();
    setSearchName(nameInput);
    setSearchHigh(highInput);

    if (onSubmit) onSubmit();
  }

  function handleReset() {
    setNameInput("");
    setHighInput("");
    setSearchName("");
    setSearchHigh("");
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search a Breed Name"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <SubmitButton type="submit">Search</SubmitButton>

        <CancelButton type="button" onClick={handleReset}>
          Remove
        </CancelButton>
      </Form>
    </FormWrapper>
  );
}
