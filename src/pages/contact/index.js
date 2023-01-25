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
        <section className="px-6 py-12 text-center  bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-900 dark:to-sky-900 ">
          <h2 className=" text-gray-800 dark:text-gray-100 text-4xl tracking-tight font-bold sm:text-5x">
            Get in Touch Submit Your Inquiry Today
          </h2>
          <div className="px-1 mt-8 flex flex-col gap-4 text-gray-700 dark:text-gray-200 text-base md:max-w-sm mx-auto">
            <p>
              We are here to assist you with any questions or concerns about our
              products and services. Please fill out the form with your contact
              information and a detailed message, and our team will respond
              promptly.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-10 px-2 py-12 lg:flex-row-reverse lg:justify-center lg:gap-20">
          <Form />
          <div className="bg-gray-200 dark:bg-slate-900 p-2 rounded-sm">
            <h3 className="text-gray-800 dark:text-gray-100 mb-3 p-1 text-lg">
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
