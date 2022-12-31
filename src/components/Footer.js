import React from "react";
import { newPeakFacebook, newPeakTwitter } from "../Constants/urls";
import { FacebookLogo } from "./FacebookLogo";
import { FooterColumns } from "./FooterColumns";
import { NewPeakComputingLogo } from "./NewPeakComputingLogo";
import { TwitterLogo } from "./TwitterLogo";
import { Divider } from "./Divider";

export const Footer = () => {
  return (
    <footer className="bg-gray-400 mt-auto">
      <div className="flex-col lg:flex-row lg:gap-4 lg:items-center lg:justify-center">
        <div className="flex-col items-center justify-start p-3 mr-8">
          <h5 className="p-2 text-gray-900 text-xl">Stay Posted</h5>
          <div className=" flex-row items-center p-2 gap-4 max-w-fit rounded m-2 mb-12">
            <a
              className="bg-gray-200 p-2 rounded shadow cursor-pointer hover:opacity-90 hover:shadow-none hover:ease-in-out duration-200"
              rel="noreferrer"
              target="_blank"
              href={newPeakFacebook}
            >
              <FacebookLogo fontSize={20} />
            </a>
            <a
              className="bg-gray-200 p-2 rounded shadow cursor-pointer hover:opacity-90 hover:shadow-none hover:ease-in-out duration-200"
              rel="noreferrer"
              target="_blank"
              href={newPeakTwitter}
            >
              <TwitterLogo fontSize={20} />
            </a>
          </div>
        </div>
        <div className="grid-cols-12 items-start max-w-7xl lg:gap-16">
          <FooterColumns
            header={"Company"}
            links={[
              { text: "Blog", url: "blog" },
              { text: "Careers", url: "careers" },
              { text: "Contact", url: "contact" },
              { text: "Support", url: "support" },
              { text: "Projects", url: "projects" },
              { text: "Charity", url: "charity" },
              { text: "Privacy Policy", url: "privacy" },
            ]}
          />
          <FooterColumns
            header={"Legal"}
            links={[
              { text: "legal1", url: "legal1" },
              { text: "legal2", url: "legal2" },
            ]}
          />
          <FooterColumns
            header={"Help"}
            links={[
              { text: "Support", url: "support" },
              { text: "legal2", url: "legal2" },
            ]}
          />
        </div>
      </div>
      <Divider shade={500} />
      <div className="flex-col justify-center items-center lg:p-4 lg:mr-20 lg:gap-4 lg:justify-end lg:flex-row">
        <NewPeakComputingLogo width={100} />
        <p className="flex mt-12 justify-center text-gray-800">
          © 2022 New Peak Computing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
