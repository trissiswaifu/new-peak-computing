import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { BsChevronLeft } from "react-icons/bs";
import styled from "@emotion/styled";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css } from "@emotion/react";

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
  background-color: ${(props) => props.theme.colors.grey["50"]};
`;

export const DesktopNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigateHandler = (url) => {
    //   event.preventDefault();
    navigate(url);
  };
  return (
    <div css={allLinksWrapper}>
      <Link to="/">Home</Link>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div css={flex} onMouseEnter={() => setOpen(true)}>
            <a>Solutions</a>
            <BsChevronLeft color="white" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenuContent>
          <DropdownItemLabel>Services</DropdownItemLabel>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/#websitedesign");
            }}
          >
            Website Design, Building And Hosting
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/#emailhosting");
            }}
          >
            Email Hosting & Management
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/#itservices");
            }}
          >
            IT Services
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/#smallbusinessapps");
            }}
          >
            Small Business Applications
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/#business2business");
            }}
          >
            Business to Business Software
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              navigateHandler("/services/#automationservice");
            }}
          >
            Automation Services
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu.Root>
      <Link to="contact">Contact Us</Link>
      <Link to="about">About</Link>
    </div>
  );
};
