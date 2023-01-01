import React from "react";
import { motion } from "framer-motion";

export const HomeImgCard = ({
  title,
  children,
  img,
  alt,
  textButton,
  icon,
}) => {
  return (
    <div className="bg-gray-50 relative flex flex-col shadow-md rounded p-6 max-w-xs md:max-w-xl">
      {/* <Overlay> */}
      {/* <img
        alt={alt}
        src={img}
        css={css`
          max-width: 100%;
          z-index: 0;
          background: ${theme.color?.grey[900]};
        `}
      /> */}
      <div className="pl-2 pr-2 flex flex-col gap-4">
        <div className="flex gap-4 items-baseline mb-1 mt-2">
          <div className="bg-red-300 rounded text-gray-50 pt-1 pr-3 pb-1 pl-3">
            {icon}
          </div>
          {title && (
            <h6 className="text-lg text-gray-500 font-bold">{title}</h6>
          )}
        </div>

        <p className="text-gray-900 text-left text-base">{children}</p>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="bg-cyan-700 text-gray-50 p-4 rounded absolute bottom-2 left-2 right-2 font-semibold hover:shadow"
        >
          {textButton}
        </motion.button>
      </div>
      {/* </Overlay> */}
    </div>
  );
};
