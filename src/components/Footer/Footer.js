import React from "react";
import { newPeakFacebook, newPeakTwitter } from "../../Constants/urls";
import { FacebookLogo } from "../FacebookLogo";
import { FooterColumns } from "../FooterColumns";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";
import { TwitterLogo } from "../TwitterLogo";
import { Divider } from "../Divider";

//TODO add dynamic time for the @

export const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-300 dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-4">
        <div className="mr-8 flex flex-col items-center justify-start p-3">
          <h5 className="p-2 text-xl text-gray-800 dark:text-gray-400">
            Stay Posted
          </h5>
          <div className=" m-2 mb-12 flex max-w-fit flex-row items-center gap-4 rounded p-2">
            <a
              className="cursor-pointer rounded bg-gray-200 p-2 shadow duration-150 ease-in-out hover:bg-gray-100 hover:shadow-none dark:hover:bg-gray-300"
              rel="noreferrer"
              target="_blank"
              href={newPeakFacebook}
            >
              <FacebookLogo fontSize={20} />
            </a>
            <a
              className="cursor-pointer rounded bg-gray-200 p-2 shadow duration-150  ease-in-out hover:bg-gray-100 hover:shadow-none dark:hover:bg-gray-300"
              rel="noreferrer"
              target="_blank"
              href={newPeakTwitter}
            >
              <TwitterLogo fontSize={20} />
            </a>
          </div>
        </div>
        <div className="grid max-w-7xl grid-cols-12 items-start lg:gap-16">
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
      <Divider shade={500} xInset={"auto"} />
      <div className="flex flex-col items-center justify-center lg:mr-20 lg:flex-row lg:justify-end lg:gap-4 lg:p-4">
        <NewPeakComputingLogo width={100} />
        <p className="mt-12 flex justify-center text-gray-800 dark:text-gray-50">
          © 2023 New Peak Computing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
