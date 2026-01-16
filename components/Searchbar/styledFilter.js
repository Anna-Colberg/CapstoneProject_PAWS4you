import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: var(--color-filter);
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    padding: 10px 15px;
    margin-bottom:20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

export const Input = styled.input`
  flex: 1 1 150px;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid var(--color-input);

  @media screen and (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

export const SubmitButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  background-color: var(--color-h2);
  color: var(--color-secondary);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: var(--color-button);
    font-size: 14px;
    color: var(--color-primary);
    box-shadow: 0 2px 6px rgb(0, 0, 0, 0.25);
  }

@media screen and (max-width: 480px) {
  width: 100%;
}
`;

export const CancelButton = styled(SubmitButton)`
  background-color: var(--color-h2);
  color: var(--color-secondary);

  &:hover {
    background-color: var(--color-button);
    color: var(--color-primary);
  }
`;
