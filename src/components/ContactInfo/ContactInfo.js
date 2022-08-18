import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    padding: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary[600]};
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.grey[50]};
  }
`;
const IconDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary[600]};
  padding: 1rem;
  border-radius: 2px;
`;

export const ContactInfo = ({ phoneNumber, address }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 1rem;

        flex-direction: column;
      `}
    >
      <InfoDiv>
        <IconDiv>
          <GoLocation fontSize={30} color="white" />
        </IconDiv>
        <p>{address}</p>
      </InfoDiv>
      <InfoDiv>
        <IconDiv>
          <BsPhone fontSize={30} color="white" />
        </IconDiv>
        <p>{phoneNumber}</p>
      </InfoDiv>
    </div>
  );
};
