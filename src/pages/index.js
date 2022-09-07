import * as React from "react";
import { Layout } from "../components/Layout";
import { css } from "@emotion/react";
import mountain from "../assets/mountain.png";
import manWithLaptop from "../assets/man-computer.png";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const hero = css`
  background-color: hsl(0, 10%, 65%);
  background-image: url(${mountain});
  padding-top: 40vh;
  padding-bottom: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  strong {
    font-size: calc(9vmin);
    /* position: relative;
    top: calc(5.3vmin); */
    color: #fff;
    text-shadow: 0 0 1vmin #fff;
    text-shadow: 0 0 2vmin #fff;
    text-shadow: 0 0 3vmin #fff;
    text-shadow: 0 0 4vmin #eee;
    text-shadow: 0 0 5vmin #ddd;
  }
`;

const projectPortalButton = ({ theme }) => css`
  padding: 1rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
`;

const strongTitle = css`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AboutWhatWeAre = styled("section")`
  background-color: #357a92;
  display: flex;
  justify-content: center;
`;

const aboutWhatWeAreWrapper = css`
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  max-width: 700px;
  background-color: #357a92;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  img {
    width: 300px;
    @media (min-width: 425px) {
      width: 400px;
    }
  }
`;

const paragraphExplanationWrapper = css`
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  max-width: 30ch;
  color: white;
`;

const aboutTeam = css``;

const warranty = css``;

export const Head = () => (
  <>
    <title>Welcome to New Peak Comuputing</title>
    <meta name="description" content="NewPeak Computing" />
  </>
);

const IndexPage = () => {
  return (
    <Layout>
      <motion.main>
        <section css={hero}>
          <div css={strongTitle}>
            <strong>New Peak Computing</strong>
            <div>
              <button
                css={[
                  (theme) => ({
                    color: "white",
                    boxShadow: "0 1px 3 hsl(0, 0%, 74%)",
                    backgroundColor: theme.colors.primary.light,
                  }),
                  projectPortalButton,
                ]}
              >
                Start your project
              </button>
            </div>
          </div>
        </section>
        <AboutWhatWeAre>
          <div css={aboutWhatWeAreWrapper}>
            <img src={manWithLaptop} alt="Person using a laptop" />
            <div css={paragraphExplanationWrapper}>
              <p>
                New Peak Computing is a Website development firm with over 20
                years of experience in blockchain, manufacturing, and other
                industries.
              </p>
              <p>
                We provide Web development services to small business, startups
                and enterprises across a range of industries.
              </p>
            </div>
          </div>
        </AboutWhatWeAre>

        <section css={aboutTeam}></section>
        <section css={warranty}></section>
      </motion.main>
    </Layout>
  );
};

export default IndexPage;
