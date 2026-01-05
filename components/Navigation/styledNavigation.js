import Link from "next/link";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fdfd;
  z-index: 1000;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  list-style: none;
  gap: 2rem;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.15); 
  }
`;