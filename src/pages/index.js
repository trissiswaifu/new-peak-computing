import * as React from "react";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import manWithLaptop from "../assets/man-computer.png";
import { HomeOverViewBox } from "../components/HomeOverViewBox";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

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
        <section className="pt-60 bg-gray-300 h-screen bg-no-repeat back bg-cover bg-blend-multiply bg-[url('../assets/mountain.png')]">
          <div className="gap-8 items-center flex  flex-col justify-center">
            <strong className={"header-styles"}>New Peak Computing</strong>
            <div>
              <Link to="/contact">
                <button className="bg-cyan-500 rounded-sm text-gray-50 p-2">
                  Start your project
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className={"bg-gray-200 flex justify-center pb-10 pt-10"}>
          <div className="pt-2 pl-2 pb-2 flex flex-col gap-8 items-center justify-center max-w-2xl bg-gray-200 md:flex-row">
            <img
              className="w-72 sm:w-96"
              src={manWithLaptop}
              alt="Person using a laptop"
            />
            <div className="flex flex-col max-w-xs text-gray-900">
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
        <section className="pb-10 bg-gray-100 ">
          <div className="pt-4 grid grid-cols-1 gap-y-12 justify-items-center	content-center md:grid-cols-2">
            <HomeOverViewBox
              img={manWithLaptop}
              title="Services"
              url="/services"
              textButton={"See services"}
              icon={<RiCustomerService2Fill className="text-red-200" />}
            >
              Our team of professionals are dedicated to providing top-quality
              service and support to meet the unique needs of our customers.
              From Email Hosting & Management, IT Services, and Website Design,
              we offer a range of services to help you succeed in today's
              digital age.
            </HomeOverViewBox>
            <HomeOverViewBox
              img={manWithLaptop}
              title="Contact"
              url="/contact"
              textButton={"Get in contact"}
              icon={<AiOutlineMail className="text-red-200" />}
            >
              Newpeak is here to be your partner in all things technology.
              Contact us today to learn more about how we can work together to
              meet your technology needs.
            </HomeOverViewBox>
            <HomeOverViewBox
              img={manWithLaptop}
              title="Samples"
              url="/samples"
              textButton={"See samples"}
              icon={<IoIosPaper className="text-red-200" />}
            >
              From software development to data management, our team of experts
              has a proven track record of delivering top-quality solutions to
              our customers. Take a look at our samples and see for yourself the
              level of expertise and professionalism that we bring to every
              project.
            </HomeOverViewBox>
            <HomeOverViewBox
              img={manWithLaptop}
              title="Blog"
              url="/blog"
              textButton={"Read blog"}
              icon={<CgWebsite className="text-red-200" />}
            >
              Stay informed about the latest in technology with our tech blog.
              From emerging trends and innovations to practical tips and advice,
              we've got you covered. Join us as we explore the exciting world of
              technology.
            </HomeOverViewBox>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default IndexPage;
