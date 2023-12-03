import * as React from "react";
const SvgIconRepeatFill = ({ title, titleId, ...props }) => (
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
      d="m21.31 5.75-4.06-4.06-1.06 1.06L18.44 5H3v6h1.5V6.5h13.94l-2.25 2.25 1.06 1.06 4.06-4.06Zm-13.5 9.5L5.56 17.5H19.5v-5H21V19H5.56l2.25 2.25-1.06 1.06-4.06-4.06 4.06-4.06 1.06 1.06Z"
    />
  </svg>
);
export default SvgIconRepeatFill;
