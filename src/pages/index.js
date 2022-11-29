import * as React from "react";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import { AboutWhatWeAreSection } from "../pagespecificcomponents/index/AboutWhatWeAreSection";
import HeroSection from "../pagespecificcomponents/index/HeroSection";

export const Head = () => (
  <>
    <title>Welcome to New Peak Comuputing</title>
    <meta name="description" content="NewPeak Computing" />
  </>
);

const IndexPage = () => {
  return (
    <Layout>
      <motion.main
        transition={{ type: "tween" }}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
      >
        <HeroSection />
        <AboutWhatWeAreSection />
        <section></section>
        <section></section>
      </motion.main>
    </Layout>
  );
};

export default IndexPage;
