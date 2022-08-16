import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const IconDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary.light};
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
          <GoLocation fontSize={25} color="white" />
        </IconDiv>
        <p>{address}</p>
      </InfoDiv>
      <InfoDiv>
        <IconDiv>
          <BsPhone fontSize={25} color="white" />
        </IconDiv>
        <p>{phoneNumber}</p>
      </InfoDiv>
    </div>
  );
};
