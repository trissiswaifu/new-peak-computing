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
import * as Tabs from "@radix-ui/react-tabs";
import { HomePageServiceListItem } from "../components/HomePageServiceListItem";

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
        <section className="pt-60 bg-gray-400 h-screen bg-no-repeat back bg-cover bg-blend-multiply bg-[url('../assets/mountain.png')]">
          <div className="gap-8 items-center flex  flex-col justify-center">
            <strong className={"header-styles"}>New Peak Computing</strong>
            <div>
              <Link to="/contact">
                <button className="bg-cyan-500 rounded-sm text-gray-200 hover:text-gray-50 shadow-sm hover:shadow-none hover:bg-cyan-600  p-2">
                  Start your project
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className={"bg-gray-200 flex justify-center pb-10 pt-5"}>
          <div className="pt-2  pb-2 flex flex-col gap-8 items-center justify-center  bg-gray-200 lg:flex-row lg:items-start">
            <img
              // className="w-72 sm:w-96"
              src={manWithLaptop}
              alt="Person using a laptop"
              className="max-w-full lg:max-w-lg lg:p-2 rounded:sm"
            />
            <div className="flex flex-col p-5  gap-6">
              <p className="text-base text-gray-700">
                New Peak Computing is a Website development firm with over 20
                years of experience in blockchain, manufacturing, and other
                industries.
              </p>
              <p className="text-base text-gray-700">
                With a team of experienced and skilled professionals, we have
                established ourselves as a leader in the industry. Our services
                include{" "}
                <ul className="flex m-auto flex-col  gap-4 bg-gray-100 max-w-lg rounded-sm border-red-600 border-t-4 p-4 my-8">
                  <HomePageServiceListItem
                    service={"Website Design, Development, & Hosting"}
                  />
                  <HomePageServiceListItem
                    service={"Email Hosting & Management"}
                  />
                  <HomePageServiceListItem service={"IT Service"} />
                  <HomePageServiceListItem
                    service={"Small Business Applications"}
                  />
                  <HomePageServiceListItem
                    service={"Business to Business Software"}
                  />
                  <HomePageServiceListItem service={"Automation Services"} />
                </ul>
                all designed to help our clients stay competitive and efficient
                in today's fast-paced digital world.
              </p>
              <p className="text-base text-gray-700">
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
        <section className=" bg-gray-200">
          <Tabs.Root
            className="flex flex-col lg:flex-row justify-center items-baseline lg:gap-8 lg:p-4  border-gray-300 border-t-2  lg:border-t-0"
            defaultValue="servicesTab"
          >
            <Tabs.List
              className="flex gap-1 p-1 sm:pl-5 md:justify-center lg:flex-col"
              aria-label="Overview tabs of New Peak"
            >
              <Tabs.Trigger
                value="servicesTab"
                className=" text-gray-800 flex flex-col lg:flex-row gap-3 font-medium  items-start p-2 rounded-sm hover:bg-red-200 focus:bg-red-200"
              >
                <div className="text-red-200 bg-red-600   rounded:sm pt-1 pr-3 pb-1 pl-3">
                  <RiCustomerService2Fill />
                </div>
                Services
              </Tabs.Trigger>
              <Tabs.Trigger
                value="contactTab"
                className=" text-gray-800 flex flex-col lg:flex-row gap-3 font-medium items-start p-2 rounded-sm hover:bg-red-200 focus:bg-red-200"
              >
                <div className="text-red-200 bg-red-600  rounded:sm pt-1 pr-3 pb-1 pl-3">
                  <AiOutlineMail />
                </div>
                Contact
              </Tabs.Trigger>
              <Tabs.Trigger
                value="samplesTab"
                className=" text-gray-800 flex flex-col lg:flex-row gap-3 font-medium items-start p-2 rounded-sm hover:bg-red-200 focus:bg-red-200"
              >
                <div className="text-red-200 bg-red-600  rounded:sm pt-1 pr-3 pb-1 pl-3">
                  <IoIosPaper />
                </div>
                Samples
              </Tabs.Trigger>
              <Tabs.Trigger
                value="blogTab"
                className="  text-gray-800 flex flex-col lg:flex-row gap-3 font-medium items-start p-2 rounded-sm hover:bg-red-200 focus:bg-red-200"
              >
                <div className="text-red-200 bg-red-600  rounded:sm pt-1 pr-3 pb-1 pl-3">
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
