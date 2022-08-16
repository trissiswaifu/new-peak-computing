import styled from "@emotion/styled";
import React from "react";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { ContactInfo } from "../components/ContactInfo";
import { useMediaQuery } from "../hooks/useMediaQuery";
const ContactUsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: 2rem;
    /* div {
      background-color: ${(props) => props.theme.colors.grey["600"]};
      align-self: flex-start;
    } */
  }
`;
const ContactInfoDiv = styled.div``;

const Contact = () => {
  const isDesktop = useMediaQuery("(min-width: 1044px)");
  return (
    <Layout>
      <ContactUsSection>
        {/* {isDesktop ? (
          <ContactInfo
          phoneNumber={"(307) 235-4016"}
          address="4031 E 2nd St, Casper, WY 82609"
        />
        ) : null} */}

        <Form />
        <ContactInfoDiv>
          <h3>Contact Us</h3>
          <ContactInfo
            phoneNumber={"(307) 235-4016"}
            address="4031 E 2nd St, Casper, WY 82609"
          />
        </ContactInfoDiv>

        {/* {isDesktop ? (
          {isDesktop ? (
            <ContactInfo
              phoneNumber={"(307) 235-4016"}
              address="4031 E 2nd St, Casper, WY 82609"
            />
          ) : null}
        ) :  */}
      </ContactUsSection>
    </Layout>
  );
};

export default Contact;
