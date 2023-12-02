import * as React from "react";
const SvgIconMessage = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 21.25a9.25 9.25 0 1 0-8.222-5.008L2.75 21.25l5.139-.962A9.212 9.212 0 0 0 12 21.25Z"
    />
  </svg>
);
export default SvgIconMessage;
