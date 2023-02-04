import * as React from "react";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import manWithLaptop from "../assets/man-computer.png";
import { HomeOverViewBox } from "../components/HomeOverViewBox";
import { AiOutlineMail } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import * as Tabs from "@radix-ui/react-tabs";
import { HomePageServiceListItem } from "../components/HomePageServiceListItem";

//TODO testimonial section

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
        <section className="back h-screen bg-gray-300 bg-[url('../assets/mountain.png')] bg-cover bg-no-repeat pt-60 bg-blend-multiply dark:bg-gray-400">
          <div className="flex flex-col items-center  justify-center gap-8">
            <strong className={"header-styles"}>New Peak Computing</strong>
            <div>
              <Link to="/contact">
                <button className="rounded-sm bg-cyan-600 p-2 text-gray-200 shadow-sm hover:bg-cyan-700 hover:text-gray-50  hover:shadow-none">
                  Start your project
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className={"flex justify-center py-8"}>
          <div className="flex  flex-col items-center justify-center gap-8 pt-2 pb-2 lg:flex-row lg:items-start">
            <h2 className="text-3xl font-medium">Who We Are</h2>
            <img
              // className="w-72 sm:w-96"
              src={manWithLaptop}
              alt="Person using a laptop"
              className="rounded:sm max-w-full brightness-90 lg:max-w-lg lg:p-2"
            />
            <div className="flex flex-col gap-6  p-5">
              <p className="text-base text-gray-700 dark:text-gray-100">
                New Peak Computing is a Website development firm with over 20
                years of experience in blockchain, manufacturing, and other
                industries.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-100">
                With a team of experienced and skilled professionals, we have
                established ourselves as a leader in the industry. Our services
                include
              </p>
              <ul className="m-auto my-8 flex  max-w-lg flex-col gap-4 rounded-sm border-t-4 border-red-600 bg-gray-200 p-4 dark:bg-gray-700">
                <HomePageServiceListItem
                  service={"Website Design, Development, & Hosting"}
                  url="services/website-design"
                />
                <HomePageServiceListItem
                  service={"Email Hosting & Management"}
                  url="services/email-hosting"
                />
                <HomePageServiceListItem
                  service={"IT Service"}
                  url="services/it-services"
                />
                <HomePageServiceListItem
                  service={"Small Business Applications"}
                  url="services/small-business-applications"
                />
                <HomePageServiceListItem
                  service={"Business to Business Software"}
                  url="services/b2b-software"
                />
                <HomePageServiceListItem service={"Automation Services"} />
              </ul>
              <p className="text-base text-gray-700 dark:text-gray-100">
                all designed to help our clients stay competitive and efficient
                in today's fast-paced digital world.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-100">
                We are constantly researching and implementing the latest
                technologies to ensure that our solutions are always at the
                forefront of the industry. In addition to our top-notch
                technology services, we are also dedicated to excellent customer
                service. We work closely with our clients to understand their
                specific needs and provide personalized solutions.
              </p>
            </div>
          </div>
        </section>
        <section className="my-20">
          <Tabs.Root
            className="flex flex-col items-center justify-center border-t-2 border-gray-300 md:flex-row  md:gap-8 md:p-4  lg:border-t-0"
            defaultValue="servicesTab"
          >
            <Tabs.List
              className="flex gap-1 p-1 md:flex-col"
              aria-label="Overview tabs of New Peak"
            >
              <Tabs.Trigger
                value="servicesTab"
                className="duration-50 flex flex-col items-start gap-3 rounded-sm p-2  font-medium text-gray-800 ease-in hover:bg-gray-200 focus:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 md:flex-row"
              >
                <div className="rounded:sm bg-red-600 px-4 py-2 text-red-200 dark:bg-red-800">
                  <FaHandshake />
                </div>
                Services
              </Tabs.Trigger>
              <Tabs.Trigger
                value="contactTab"
                className="duration-50 flex flex-col items-start gap-3 rounded-sm p-2 font-medium text-gray-800 ease-in hover:bg-gray-200 focus:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 md:flex-row"
              >
                <div className="rounded:sm bg-red-600  px-4 py-2 text-red-200 dark:bg-red-800">
                  <AiOutlineMail />
                </div>
                Contact
              </Tabs.Trigger>
              <Tabs.Trigger
                value="samplesTab"
                className="duration-50 flex flex-col items-start gap-3 rounded-sm p-2 font-medium text-gray-800 ease-in hover:bg-gray-200 focus:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 md:flex-row"
              >
                <div className="rounded:sm bg-red-600 px-4 py-2 text-red-200 dark:bg-red-800">
                  <IoIosPaper />
                </div>
                Samples
              </Tabs.Trigger>
              <Tabs.Trigger
                value="blogTab"
                className=" duration-50 flex flex-col items-start gap-3 rounded-sm p-2 font-medium text-gray-800 ease-in hover:bg-gray-200 focus:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 md:flex-row"
              >
                <div className="rounded:sm bg-red-600 px-4 py-2 text-red-200 dark:bg-red-800">
                  <CgWebsite />
                </div>
                Blog
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="servicesTab">
              <HomeOverViewBox url="/services" textButton={"See services"}>
                Our team of professionals are dedicated to providing top-quality
                service and support to meet the unique needs of our customers.
                From Email Hosting & Management, IT Services, and Website
                Design, we offer a range of services to help you succeed in
                today's digital age.
              </HomeOverViewBox>
            </Tabs.Content>
            <Tabs.Content value="contactTab">
              <HomeOverViewBox url="/contact" textButton={"Get in contact"}>
                Newpeak is here to be your partner in all things technology.
                Contact us today to learn more about how we can work together to
                meet your technology needs.
              </HomeOverViewBox>
            </Tabs.Content>
            <Tabs.Content value="samplesTab">
              <HomeOverViewBox url="/samples" textButton={"See samples"}>
                From software development to data management, our team of
                experts has a proven track record of delivering top-quality
                solutions to our customers. Take a look at our samples and see
                for yourself the level of expertise and professionalism that we
                bring to every project.
              </HomeOverViewBox>
            </Tabs.Content>
            <Tabs.Content value="blogTab">
              <HomeOverViewBox url="/blog" textButton={"Read blog"}>
                Stay informed about the latest in technology with our tech blog.
                From emerging trends and innovations to practical tips and
                advice, we've got you covered. Join us as we explore the
                exciting world of technology.
              </HomeOverViewBox>
            </Tabs.Content>
          </Tabs.Root>
        </section>
      </motion.main>
    </Layout>
  );
};

export default IndexPage;
