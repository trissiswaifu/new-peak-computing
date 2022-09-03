import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { newPeakFacebook, newPeakTwitter } from "../Constants/urls";
import { FacebookLogo } from "./FacebookLogo";
import { FooterColumns } from "./FooterColumns";
import { Logo } from "./Logo";
import { TwitterLogo } from "./TwitterLogo/TwitterLogo";
import { Link } from "gatsby";

const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.grey[400]};
  /* border-top: 1px solid ${(props) => props.theme.colors.grey[50]}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 0.5rem; */
`;

const LogosWrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.primary[700]};
  max-width: fit-content;
  border-radius: 0.25rem;
  margin: 0.5rem;
  margin-bottom: 3rem;

  a {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <LogosWrapper>
        <a target="_blank" href={newPeakFacebook}>
          <FacebookLogo width={45} />
        </a>
        <a target="_blank" href={newPeakTwitter}>
          <TwitterLogo width={45} />
        </a>
      </LogosWrapper>
      <div>
        <FooterColumns
          header={"Company"}
          links={[
            { text: "Blog", url: "blog" },
            { text: "Careers", url: "careers" },
            { text: "Contact", url: "contact" },
            { text: "Projects", url: "projects" },
          ]}
        />
        <FooterColumns
          header={"Services"}
          links={[
            { text: "Website Design, Building And Hosting", url: "design" },
            { text: "website", url: "solution" },
          ]}
        />
        <FooterColumns
          header={"Legal"}
          links={[
            { text: "legal1", url: "legal1" },
            { text: "legal2", url: "legal2" },
          ]}
        />
      </div>
      <hr />
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Logo width={100} />
      </div>
    </FooterStyled>
  );
};
