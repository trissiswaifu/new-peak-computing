import styled from "@emotion/styled";
import React from "react";
import { Form } from "../../components/Form";
import { Layout } from "../../components/Layout";
import { ContactInfo } from "../../components/ContactInfo";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  newPeakAddress,
  newPeakPhoneNumber,
} from "../../Constants/contactInfo";
//TODO add toast alert on successful  submission
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

const Index = () => {
  return (
    <Layout>
      <motion.main>
        <ContactUsSection>
          <Form />
          <ContactInfoDiv>
            <h3>Contact Us</h3>
            <ContactInfo
              phoneNumber={newPeakPhoneNumber}
              address={newPeakAddress}
            />
          </ContactInfoDiv>
        </ContactUsSection>
      </motion.main>
    </Layout>
  );
};

export default Index;
