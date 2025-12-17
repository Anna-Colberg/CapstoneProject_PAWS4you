export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
  }

  svg path {
    stroke: var(--accent);
    fill: ${({ $isLiked }) => ($isLiked ? "var(--accent)" : "none")};
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

  &:hover svg path {
    fill: var(--accent);
  }
`;