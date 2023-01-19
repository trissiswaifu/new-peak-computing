import React, { useState } from "react";
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
      <motion.main
        transition={{ type: "tween" }}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
      >
        <section className="px-6 py-12 text-center  bg-gradient-to-r from-cyan-100 to-sky-100 ">
          <h2 className=" text-gray-800 text-4xl tracking-tight font-bold sm:text-5xl dark:text-white">
            Get in Touch Submit Your Inquiry Today
          </h2>
          <div className="py-8 px-1 flex flex-col gap-4 text-gray-700 text-base md:max-w-sm md:m-auto ">
            <p>
              We are here to assist you with any questions or concerns about our
              products and services. Please fill out the form with your contact
              information and a detailed message, and our team will respond
              promptly.
            </p>
            <p>
              Please ensure that the email address provided is accurate, as this
              is how we will be able to reach you. Additionally, please complete
              the captcha to confirm that you are a human user. Thank you for
              taking the time to contact us. We are committed to ensuring your
              satisfaction and look forward to connecting with you.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-10 px-2 py-12 lg:flex-row-reverse lg:justify-center lg:gap-20">
          <Form />
          <div className="bg-gray-200 p-2 rounded-sm">
            <h3 className="text-gray-800 mb-3 p-1 text-lg">
              To reach us directly.
            </h3>
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
