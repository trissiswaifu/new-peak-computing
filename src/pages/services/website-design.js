import React from "react";
import { Layout } from "../../components/Layout";
import { NewPeakComputingLogo } from "../../components/NewPeakComputingLogo";
import closeUpWireframes from "../../assets/close-up-wireframes.webp";
import { useTheme, css } from "@emotion/react";
import { ServiceLayout } from "../../layouts";
import { ServicesOrderList } from "../../components/ServicesOrderList";
import { ServiceExplantion } from "../../components/ServiceExplantion";

const Websitedesign = () => {
  const theme = useTheme();
  return (
    <body>
      <Layout>
        <ServiceLayout>
          {/* <NewPeakComputingLogo width={"100%"} /> */}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;

              @media (min-width: 1024px) {
                flex-direction: row;
                gap: 2rem;
              }
            `}
          >
            <img
              css={css`
                border-radius: 0.25rem;
                max-width: 500px;
              `}
              src={closeUpWireframes}
            />
            <ServiceExplantion
              header={"Lorem ipsum dolor"}
              para1={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare massa eget egestas purus viverra. A condimentum vitae
                sapien pellentesque habitant.`}
              para2={`Etiam non quam lacus suspendisse. Mi bibendum neque egestas
              congue quisque egestas diam in arcu. Elementum nisi quis
              eleifend quam adipiscing vitae. Velit aliquet sagittis id
              consectetur purus. Feugiat nibh sed pulvinar proin gravida
              hendrerit lectus. Molestie ac feugiat sed lectus vestibulum
              mattis. Malesuada pellentesque elit eget gravida cum sociis
              natoque. Vitae proin sagittis nisl rhoncus mattis rhoncus urna
              neque.`}
            />
          </div>

          <ServicesOrderList
            serviceListItems={[
              {
                details: "morbi tristique senectus et netus et malesuada",
              },
              {
                details: "morbi tristique senectus et netus et malesuada",
              },
              {
                details: "morbi tristique senectus et netus et malesuada",
              },
              {
                details: "morbi tristique senectus et netus et malesuada",
              },
              {
                details: "morbi tristique senectus et netus et malesuada",
              },
            ]}
          />
        </ServiceLayout>
      </Layout>
    </body>
  );
};

export default Websitedesign;
