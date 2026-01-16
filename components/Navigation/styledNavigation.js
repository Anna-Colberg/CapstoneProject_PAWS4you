import Link from "next/link";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffff;
  border-top: 2px solid #fdc2c2ff;
  box-shadow: 0 -2px 10px rgb(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 0.5rem 0;

  @media screen and (max-width: 480px) {
    padding: 0.75rem 0;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 1rem;
  list-style: none;

  @media screen and (max-width: 480px) {
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
`;

export const NavigationLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s, filter 0.2s, color 0.2s;

  color: ${({ $active }) => ($active ? "#410404ff" : "rgb(127, 87, 87)")};
  background-color: ${({ $active }) =>
    $active ? "rgba(65, 4, 4, 0.15)" : "transparent"};

  transition: color 0.2s ease, background-color 0.2s ease, transform 0.15s ease;

  svg {
    stroke: currentColor;
    transition: transform 0.15s ease, stroke 0.2s ease;
  }

  svg path {
    stroke: var(--accent);
    fill: ${({ $isFavorite }) => ($isFavorite ? "#0000" : "none")};
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  img {
    filter: brightness(1.2);
  }

  @media screen and (max-width: 480px) {
    padding: 0.4rem;
  }

  &.active img {
    filter: ${({ $highlighted }) =>
      $highlighted ? "brightness(1.5)" : "brightness(1)"};
    transition: filter 0.2s;

    svg {
      width: 32px;
      height: 32px;
      overflow: visible;
      display: block;

      &:hover svg path {
        fill: none;
      }
    }

    svg path,
    svg circle,
    svg line {
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;

      fill: none;
      transition: stroke 0.2s ease, fill 0.2s ease;
    }
  }
`;
