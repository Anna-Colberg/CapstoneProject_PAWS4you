import styled from "styled-components";

export const FormNotice = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;
export const TitelNotice = styled.h2`
  font-size: 1rem;
  margin-bottom: -1rem;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 30rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;
export const NoNoticePart = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #c1c1c1ff;
  border-radius: 10px;
  padding: 1rem;
  gap: 2rem;
`;

export const NoticeTitle = styled.h2`
  font-size: 1rem;
`;

export const OutputSection = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.8;
  margin-bottom: 1rem;
  max-width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;

  p {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  p:first-child {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p:last-child {
    font-size: 0.875rem;
    color: #666;
    text-align: right;
  }
`;
export const VerticalStroke = styled.hr`
  border: none;
  height: 2px;
  background-color: #333;
  width: 90%;
  margin: 20px auto;
`;

export const SendButton = styled.div`
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.7;
  }
  `;
  export const BackButton = styled.button`
 padding: 0.8rem 1.2rem;
 gap:2rem;
  border-radius: 8px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.7;
  }
`;
