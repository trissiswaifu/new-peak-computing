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
//TODO make sure api works

const Index = () => {
  return (
    <Layout>
      <motion.main
        transition={{ type: "tween" }}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
      >
        <section className="bg-gradient-to-r from-cyan-100 to-sky-100  px-6 py-12 text-center dark:from-cyan-900 dark:to-sky-900 ">
          <h2 className=" sm:text-5x text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            Get in Touch Submit Your Inquiry Today
          </h2>
          <div className="mx-auto mt-8 flex flex-col gap-4 px-1 text-base text-gray-700 dark:text-gray-200 md:max-w-sm">
            <p>
              We are here to assist you with any questions or concerns about our
              products and services. Please fill out the form with your contact
              information and a detailed message, and our team will respond
              promptly.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-10 px-2 py-12 lg:flex-row-reverse lg:justify-center lg:gap-20">
          <Form />
          <div className="rounded-sm bg-gray-200 p-2 dark:bg-slate-900">
            <h3 className="mb-3 p-1 text-lg text-gray-800 dark:text-gray-100">
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
