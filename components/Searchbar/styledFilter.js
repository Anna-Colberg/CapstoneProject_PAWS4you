import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #f5e4e4ff;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1 1 150px;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

export const SubmitButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  background-color: #5b2aa6;
  color: #ffff;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #efef87ff;
    font-size: 14px;
    color: #000000ff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;

export const CancelButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  background-color: #5b2aa6;
  color: #ffffffff;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #efef87ff;
    font-size: 14px;
    color: #000000ff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;
