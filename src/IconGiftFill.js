import * as React from "react";
const SvgIconGiftFill = ({ title, titleId, ...props }) => (
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
      d="M6.25 4.417A2.417 2.417 0 0 1 8.667 2c1.376 0 2.593.68 3.333 1.724A4.078 4.078 0 0 1 15.333 2a2.417 2.417 0 0 1 2.417 2.417c0 .98-.345 1.88-.92 2.583H21v4.25h-8.25V7h.917a2.583 2.583 0 0 0 2.583-2.583.917.917 0 0 0-.917-.917 2.583 2.583 0 0 0-2.583 2.583V7h-1.5v-.917A2.583 2.583 0 0 0 8.667 3.5a.917.917 0 0 0-.917.917A2.583 2.583 0 0 0 10.333 7h.917v4.25H3V7h4.17a4.066 4.066 0 0 1-.92-2.583m6.5 8.333H20V21h-7.25zm-1.5 0H4V21h7.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconGiftFill;
