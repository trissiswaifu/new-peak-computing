import styled from "@emotion/styled";
import React from "react";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { ContactInfo } from "../components/ContactInfo";
import { useMediaQuery } from "../hooks/useMediaQuery";
const ContactUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 5rem;
  }
`;
const ContactInfoDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary[900]};
  padding: 1rem;
  h3 {
    color: ${(props) => props.theme.colors.grey[50]};
  }
`;

const Contact = () => {
  return (
    <Layout>
      <ContactUsSection>
        <Form />
        <ContactInfoDiv>
          <h3>Contact Us</h3>
          <ContactInfo
            phoneNumber={"(307) 235-4016"}
            address="4031 E 2nd St, Casper, WY 82609"
          />
        </ContactInfoDiv>
      </ContactUsSection>
    </Layout>
  );
};

export default Contact;
