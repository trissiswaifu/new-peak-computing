import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { BsChevronLeft } from "react-icons/bs";
import styled from "@emotion/styled";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css, useTheme } from "@emotion/react";

const allLinksWrapper = css`
  display: flex;
  gap: 1rem;
  padding-right: 1.5rem;
  font-weight: 500;
  /* h5 {
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
  } */
  a {
    text-decoration: none;
    color: white;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: calc(30 + 2vmin);
    opacity: 150%;
    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SamplesDiv = styled.h5``;

const DropdownItemLabel = styled(DropdownMenu.Label)`
  color: ${(props) => props.theme.colors.primary.main};
`;

const flex = css`
  display: flex;
  align-items: center;
  background-color: inherit;
`;
const DropdownMenuItem = styled(DropdownMenu.Item)``;

const DropdownMenuContent = styled(DropdownMenu.Content)`
  background-color: ${(props) => props.theme.colors.primary["900"]};
`;

export const DesktopNavbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigateHandler = (url) => {
    //   event.preventDefault();
    navigate(url);
  };
  return (
    <div
      css={css`
        display: flex;
        gap: 1rem;
        padding-right: 1.5rem;
        font-weight: 500;
        color: ${theme.colors.primary[800]};
        a {
          text-decoration: none;
          /* color: white; */
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: calc(30 + 2vmin);
          opacity: 150%;
          @media (min-width: 1200px) {
            font-size: 1.125rem;
          }
          &:hover {
            opacity: 0.8;
          }
        }
      `}
    >
      <Link to="/">Home</Link>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div css={flex} onMouseEnter={() => setOpen(true)}>
            <span
              css={css`
                color: ${theme.colors.primary[800]};
              `}
            >
              Services
            </span>
            <BsChevronLeft color="cyan" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/website-design");
            }}
          >
            Website Design, Building And Hosting
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/email-hosting");
            }}
          >
            Email Hosting & Management
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/it-services");
            }}
          >
            IT Services
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/small-businessapps");
            }}
          >
            Small Business Applications
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/business2business");
            }}
          >
            Business to Business Software
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/automation-service");
            }}
          >
            Automation Services
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu.Root>
      <Link to="/contact">Contact Us</Link>
      {/* <Link to="about">About</Link> */}
    </div>
  );
};
