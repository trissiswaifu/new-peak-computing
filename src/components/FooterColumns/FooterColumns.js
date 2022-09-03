import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const ColumnWrapper = styled.div`
  display: flex;
  max-width: fit-content;
  /* padding: 1rem; */
  flex-direction: column;
  a {
    color: ${(props) => props.theme.colors.grey[900]};
    line-height: 2rem;
    margin-top: 0.5rem;
  }
  /* background-color: ${(props) => props.theme.colors.grey[900]}; */
  padding: 1rem;
  h5 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.primary[900]};
  }
  @media (min-width: 1024px) {
    a {
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme.colors.grey[50]};
        opacity: 0.9;
        transition: color 350ms;
      }
    }
  }

  margin-bottom: 3rem;
`;

export const FooterColumns = ({ header, links }) => {
  return (
    <ColumnWrapper>
      <h5>{header}</h5>
      {links.map((link) => (
        <Link key={link.url} to={`/${link.url}`}>
          {link.text}
        </Link>
      ))}
    </ColumnWrapper>
  );
};