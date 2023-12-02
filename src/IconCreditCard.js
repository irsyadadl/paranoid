import * as React from "react";
const SvgIconCreditCard = ({ title, titleId, ...props }) => (
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M2.75 9.75v9.496h18.496V9.75m-18.496 0V4.753h18.492c.005 1.666.004 3.331.004 4.997m-18.496 0h18.496M6.75 13.25h3"
    />
  </svg>
);
export default SvgIconCreditCard;
