import Image from "next/image";
import styled from "styled-components";

export const CreateSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SectionTitle = styled.h4`
  margin: 0;
`;

export const PetList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minimax(280px, 1fr));
  gap: 1.2rem;
`;
export const PetCard = styled.li`
  padding: 1.2rem;
  border-radius: 12px;
  background-color: var(--color-secondary);
  box-shadow: 0 4px 15px rgb(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const PetName = styled.strong`
  font-size: 1.2rem;
`;
export const PetInfo = styled.p`
  margin: 0;
  font-size: 0.95rem;
`;

export const FormWrapper = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  background-color: var(--color-background);
  box-shadow: 0 10px 30px rgb(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: var(--color-button);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  cursor: pointer;
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  &:hover {
    opacity: 0.7;
  }
`;
export const AddButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: var(--color-addbutton);
  color: var(--color-addbutton2);
  border: 2px solid var(--color-addbutton2);
  cursor: pointer;
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  &:hover {
    opacity: 0.7;
  }
`;
export const DeleteButton = styled.button`
  padding: 0.3rem 1.5rem;
  border-radius: 8px;
  background: var(--color-deletebutton);
  color: var(--color-deletebutton2);
  border: 2px solid var(--color-deletebutton2);
  cursor: pointer;
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  &:hover {
    opacity: 0.7;
  }
`;
export const EditButton = styled.button`
  padding: 0.3rem 1.5rem;
  border-radius: 8px;
  background: var(--color-button);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  cursor: pointer;
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  &:hover {
    opacity: 0.7;
  }
`;
export const CreateInput = styled.input`
  width: 100%;
  max-width: 30rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-input);
  font-size: 1rem;
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--color-input2);
  }
`;
export const CreateLabel = styled.label`
  font-weight: 600;
  font-size: 0.95rem;
`;
export const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 0.5rem;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  cursor: pointer;
`;
export const VerticalStroke = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--color-primary);
  width: 90%;
  margin: 20px auto;
`;

