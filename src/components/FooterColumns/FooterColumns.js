import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const ColumnWrapper = styled.div`
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  grid-column: span 6;
  a {
    color: ${(props) => props.theme.colors.grey[900]};
    line-height: 2rem;
    margin-top: 0.5rem;
  }
  padding: 1rem;
  h5 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.grey[900]};
  }
  @media (min-width: 1024px) {
    grid-column: span 4;
    a {
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme.colors.grey[50]};
        opacity: 0.9;
        transition: color 150ms ease-in-out;
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
