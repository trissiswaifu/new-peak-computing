import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import React from "react";
import { newPeakFacebook, newPeakTwitter } from "../Constants/urls";
import { FacebookLogo } from "./FacebookLogo";
import { FooterColumns } from "./FooterColumns";
import { NewPeakComputingLogo } from "./NewPeakComputingLogo";
import { TwitterLogo } from "./TwitterLogo";
import { Divider } from "./Divider";

const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.grey[400]};
  margin-top: auto;
  margin-top: 10px;
`;

const LogosWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  max-width: fit-content;
  border-radius: 0.25rem;
  margin: 0.5rem;
  margin-bottom: 3rem;

  a {
    background-color: ${(props) => props.theme.colors.grey[200]};
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 0.25rem ${(props) => props.theme.colors.grey[700]};

    cursor: pointer;
    &:hover {
      opacity: 0.9;
      box-shadow: none;
      transition: opacity 200ms ease-in-out, box-shadow 200ms ease-in-out;
    }
  }
`;

export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterStyled>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1rem;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 0.75rem;
            margin-right: 2rem;
            h5 {
              padding: 0.5rem;
              color: ${theme.colors.grey[900]};
              font-size: 1.25rem;
            }
          `}
        >
          <h5>Stay Posted</h5>
          <LogosWrapper>
            <a rel="noreferrer" target="_blank" href={newPeakFacebook}>
              <FacebookLogo fontSize={20} />
            </a>
            <a rel="noreferrer" target="_blank" href={newPeakTwitter}>
              <TwitterLogo fontSize={20} />
            </a>
          </LogosWrapper>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            align-items: flex-start;
            max-width: 1200px;
            @media (min-width: 1024px) {
              gap: 4.5rem;
            }
          `}
        >
          <FooterColumns
            header={"Company"}
            links={[
              { text: "Blog", url: "blog" },
              { text: "Careers", url: "careers" },
              { text: "Contact", url: "contact" },
              { text: "Support", url: "support" },
              { text: "Projects", url: "projects" },
              { text: "Charity", url: "charity" },
              { text: "Privacy Policy", url: "privacy" },
            ]}
          />
          <FooterColumns
            header={"Legal"}
            links={[
              { text: "legal1", url: "legal1" },
              { text: "legal2", url: "legal2" },
            ]}
          />
          <FooterColumns
            header={"Help"}
            links={[
              { text: "Support", url: "support" },
              { text: "legal2", url: "legal2" },
            ]}
          />
        </div>
      </div>
      <Divider shade={500} />
      <div
        css={css`
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          @media (min-width: 1024px) {
            padding: 1rem;
            margin-right: 5rem;
            gap: 1rem;
            justify-content: flex-end;
            flex-direction: row;
          }
        `}
      >
        <NewPeakComputingLogo width={100} />
        <p
          css={css`
            display: flex;
            margin-top: 3rem;

            justify-content: center;
            color: ${theme.colors.grey[800]};
          `}
        >
          © 2022 New Peak Computing. All rights reserved.
        </p>
      </div>
    </FooterStyled>
  );
};
