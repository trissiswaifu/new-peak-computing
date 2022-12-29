import * as React from "react";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { useTheme, css } from "@emotion/react";
import styled from "@emotion/styled";
import manWithLaptop from "../assets/man-computer.png";
import mountain from "../assets/mountain.png";
import { PrimaryButton } from "../components/PrimaryButton";
import { HomeImgCard } from "../components/HomeImgCard";
import { Grid } from "../components/Grid";
import { RiCustomerService2Fill } from "react-icons/ri";

export const Head = () => (
  <>
    <title>Welcome to New Peak Computing</title>
    <meta name="description" content="NewPeak Computing" />
  </>
);

const IndexPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <motion.main
        transition={{ type: "tween" }}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
      >
        <section
          css={css`
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
          `}
        >
          <div
            css={css`
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              gap: 2rem;
            `}
          >
            <strong>New Peak Computing</strong>
            <div>
              <Link to="/contact">
                <PrimaryButton text={"Start your project"} />
              </Link>
            </div>
          </div>
        </section>
        <section
          css={css`
            background-color: ${theme.colors?.grey[200]};
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          `}
        >
          <div
            css={css`
              padding-top: 0.5rem;
              padding-left: 0.5rem;
              padding-bottom: 0.5rem;
              display: flex;
              gap: 2rem;
              align-items: center;
              justify-content: space-around;
              flex-direction: column;
              max-width: 700px;
              background-color: ${theme.colors?.grey[200]};
              @media (min-width: 768px) {
                flex-direction: row;
              }
              img {
                width: 300px;
                @media (min-width: 425px) {
                  width: 400px;
                }
              }
            `}
          >
            <img src={manWithLaptop} alt="Person using a laptop" />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                font-family: "Trebuchet MS", "Lucida Sans Unicode",
                  "Lucida Grande", "Lucida Sans", Arial, sans-serif;
                max-width: 30ch;
                color: ${theme.colors?.grey[900]};
              `}
            >
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
        </section>
        <section
          css={css`
            margin-bottom: 50px;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 16px;
              justify-items: center;

              @media (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
              }
            `}
          >
            <HomeImgCard
              img={manWithLaptop}
              title="Services"
              textButton={"See services"}
              icon={<RiCustomerService2Fill />}
            >
              Our team of professionals are dedicated to providing top-quality
              service and support to meet the unique needs of our customers.
              From Email Hosting & Management, IT Services, and Website Design,
              we offer a range of services to help you succeed in today's
              digital age.
            </HomeImgCard>
            <HomeImgCard
              img={manWithLaptop}
              title="Contact"
              textButton={"Get in contact"}
            >
              Newpeak is here to be your partner in all things technology.
              Contact us today to learn more about how we can work together to
              meet your technology needs.
            </HomeImgCard>
            <HomeImgCard
              img={manWithLaptop}
              title="Samples"
              textButton={"See samples"}
            >
              Here you can see a variety of examples of our work in the
              technology field. From software development to data management,
              our team of experts has a proven track record of delivering
              top-quality solutions to our customers. We are proud to showcase a
              selection of our past projects as a testament to our commitment to
              excellence. Take a look at our samples and see for yourself the
              level of expertise and professionalism that we bring to every
              project.
            </HomeImgCard>
            <HomeImgCard
              img={manWithLaptop}
              title="Blog"
              textButton={"Read blog"}
            >
              Stay informed about the latest in technology with our tech blog.
              From emerging trends and innovations to practical tips and advice,
              we've got you covered. Join us as we explore the exciting world of
              technology.
            </HomeImgCard>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default IndexPage;
