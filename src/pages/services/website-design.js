import React from "react";
import { Layout } from "../../components/Layout";
import closeUpWireframes from "../../assets/close-up-wireframes.webp";
import { ServiceLayout } from "../../layouts";
import { ServicesOrderList } from "../../components/ServicesOrderList";
import { ServiceExplantion } from "../../components/ServiceExplantion";

const Websitedesign = () => {
  return (
    <body>
      <Layout>
        <ServiceLayout>
          <div className="flex flex-col items-center lg:flex-row lg:gap-4">
            <img className="rounded max-w-md" src={closeUpWireframes} />
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
