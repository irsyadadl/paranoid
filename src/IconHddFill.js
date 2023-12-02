import * as React from "react";
const SvgIconHddFill = ({ title, titleId, ...props }) => (
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
      d="M16 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.75 2A2.75 2.75 0 0 0 4 4.75v14.5A2.75 2.75 0 0 0 6.75 22h10.5A2.75 2.75 0 0 0 20 19.25V4.75A2.75 2.75 0 0 0 17.25 2zM5.5 19.25v-2.5c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHddFill;
