import { css } from "@emotion/react";
import { Link } from "gatsby";
import React from "react";
import { Logo } from "./Logo";
import { NavbarLinks } from "./NavbarLinks";

const navbarContainer = css`
  position: fixed;
  padding: 0rem 1rem;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsla(0, 0%, 60%, 0.4);
  border-bottom: 3px solid #a6a6a6;
  img {
    padding-left: 0rem;
  }
`;

export const Navbar = () => {
  return (
    <>
      <div css={navbarContainer}>
        <Logo />
        <NavbarLinks />
      </div>
    </>
  );
};
