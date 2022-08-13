import { css } from "@emotion/react";
import React from "react";

const nav = css`
  display: flex;
  gap: 1rem;
  padding-right: 1.5rem;
  a {
    text-decoration: none;
    color: white;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: calc(30 + 2vmin);
    opacity: 150%;
    @media (min-width: 1200px) {
      font-size: 1.1rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const NavbarLinks = () => {
  return (
    <nav css={nav}>
      <a href="#">Home</a>
      <a href="#">Contact Us</a>
      <a href="#">About</a>
    </nav>
  );
};
