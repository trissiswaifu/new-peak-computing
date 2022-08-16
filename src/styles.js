import { keyframes } from "@emotion/react";

//keyframes
export const buttonPress = keyframes`
  /* from { 
    box-shadow: 0 inherit 0 0 inherit;
  } */
  to {
    box-shadow: none;
    /* border: 3px solid inherit; */
  }
`;
export const buttonPressOffHover = keyframes`
  from {
    box-shadow: none;
    border: 0px solid inherit;
  }
  to { 
    box-shadow: 0 0.25rem 0 0 inherit;
  }
`;
//keyframes
