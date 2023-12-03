import * as React from "react";
const SvgIconSwitchVerticalFill = ({ title, titleId, ...props }) => (
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
      d="m7.25 2.69 5.06 5.06-1.06 1.06L8 5.56V21H6.5V5.56L3.25 8.81 2.19 7.75l5.06-5.06ZM17.5 3v15.44l3.25-3.25 1.06 1.06-5.06 5.06-5.06-5.06 1.06-1.06L16 18.44V3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSwitchVerticalFill;
