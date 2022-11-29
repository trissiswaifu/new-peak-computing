import { useTheme, css } from "@emotion/react";
import manWithLaptop from "../../assets/man-computer.png";

import React from "react";

export const AboutWhatWeAreSection = () => {
  const theme = useTheme();
  return (
    <section
      css={css`
        background-color: ${theme.colors.grey[200]};
        display: flex;
        justify-content: center;
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
          background-color: ${theme.colors.grey[200]};
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
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            max-width: 30ch;
            color: ${theme.colors.grey[900]};
          `}
        >
          <p>
            New Peak Computing is a Website development firm with over 20 years
            of experience in blockchain, manufacturing, and other industries.
          </p>
          <p>
            We provide Web development services to small business, startups and
            enterprises across a range of industries.
          </p>
        </div>
      </div>
    </section>
  );
};
