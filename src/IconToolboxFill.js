import * as React from "react";
const SvgIconToolboxFill = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.84 2.394A.75.75 0 0 1 6.5 2h1a.75.75 0 0 1 .66.394l1.75 3.25A.75.75 0 0 1 10 6v4h2V2.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V10h1.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75H4V6a.75.75 0 0 1 .09-.356zM8.5 10h-3V6.19L6.948 3.5h.104L8.5 6.19zm5 0h5V3.5h-5V6h1.75a.75.75 0 0 1 0 1.5H13.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconToolboxFill;
