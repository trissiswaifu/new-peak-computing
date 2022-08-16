import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Logo } from "./Logo";

const FooterStyled = styled.footer`
  background-color: #357a92;
  border-top: 1px solid ${(props) => props.theme.colors.grey[50]};
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <Logo width={100} />
    </FooterStyled>
  );
};
