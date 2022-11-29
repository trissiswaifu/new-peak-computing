import React from "react";
import { Link, navigate } from "gatsby";
import { BsChevronLeft } from "react-icons/bs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTheme, css } from "@emotion/react";

export const NavMenuServicesDropdown = () => {
  const theme = useTheme();
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div
          css={css`
            display: flex;
            align-items: center;
            background-color: inherit;
            gap: 0.25rem;
            @media (min-width: 1200px) {
              font-size: 1.125rem;
            }
          `}
        >
          <span>Services</span>
          <BsChevronLeft color={theme.colors.grey[50]} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        css={css`
          display: grid;
          gap: 0.5rem;
          grid-column: 2;
          background-color: ${theme.colors.grey[50]};
          border-radius: 0.25rem;
          padding: 0.5rem;
          div {
            color: ${theme.colors.grey[900]};
          }
        `}
      >
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/website-design");
          }}
        >
          Website Design, Building And Hosting
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/email-hosting");
          }}
        >
          Email Hosting & Management
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/it-services");
          }}
        >
          IT Services
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/small-businessapps");
          }}
        >
          Small Business Applications
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/business2business");
          }}
        >
          Business to Business Software
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/automation-service");
          }}
        >
          Automation Services
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
