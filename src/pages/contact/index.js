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

const Index = () => {
  return (
    <Layout>
      <motion.main>
        <section className="flex flex-col justify-center items-center gap-20 pt-8 pr-8 pl-8 lg:flex-row-reverse lg:justify-center lg:gap-20">
          <Form />
          <div className="bg-cyan=900 p-4">
            <h3 className="text-gray-50">Contact Us</h3>
            <ContactInfo
              phoneNumber={newPeakPhoneNumber}
              address={newPeakAddress}
            />
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default Index;
