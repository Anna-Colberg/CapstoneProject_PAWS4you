import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: aliceblue;
  border: solid;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgb(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
display: flex;
justify-content: center;
  color: #801100ff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: solid;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  color: #7d4140ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const CancelButton = styled.button`
  align-self: flex-end;
  margin-top: 0%.75rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--alert);
  background-color: transparent;
  color: var(--alert);
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    background-color: var(--alert-foreground);
    color: var(--background);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;