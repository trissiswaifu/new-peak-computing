import { useTheme, css } from "@emotion/react";
import { Link } from "gatsby";
import React from "react";
import mountain from "../../assets/mountain.png";
import { PrimaryButton } from "../../components/PrimaryButton";

const HeroSection = () => {
  const theme = useTheme();
  return (
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
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
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
  );
};

export default HeroSection;
