import * as React from "react";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import manWithLaptop from "../assets/man-computer.png";
import mountain from "../assets/mountain.png";
import { HomeImgCard } from "../components/HomeImgCard";
import { RiCustomerService2Fill } from "react-icons/ri";

export const Head = () => (
  <>
    <title>Welcome to New Peak Computing</title>
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
        <section
          className={`h-screen bg-no-repeat back bg-cover bg-blend-multiply bg-[url(${mountain}})]`}
        >
          <div
            className={"gap-8 items-center flex-col justify-center font-mono"}
          >
            <strong className={"header-styles"}>New Peak Computing</strong>
            {/* <strong>New Peak Computing</strong> */}

            <div>
              <Link to="/contact">
                <button>Start your project</button>
              </Link>
            </div>
          </div>
        </section>
        <section className={"bg-gray-200 flex justify-center mb-10"}>
          <div className="pt-2 pl-2 pb-2 flex-col gap-8 items-center justify-center max-w-2xl bg-gray-200 md:flex-row">
            <img
              className="w-72 sm:w-96"
              src={manWithLaptop}
              alt="Person using a laptop"
            />
            <div className="flex-col font-mono max-w-xs text-gray-900">
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
        <section className="mb-14">
          <div
            // css={css`
            //   display: grid;
            //   grid-template-columns: repeat(1, 1fr);
            //   grid-gap: 16px;
            //   justify-items: center;

            //   @media (min-width: 768px) {
            //     grid-template-columns: repeat(2, 1fr);
            //   }
            // `}
            className="grid-cols-1 gap-4 justify-center md:grid-cols-2"
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
