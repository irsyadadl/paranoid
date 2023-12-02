import * as React from "react";
const SvgIconMailNotify = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M14 4.75H2.75v14.5h18.5V13M2.999 9.25c2.507 1.884 5.624 3 9.001 3 1.753 0 3.437-.3 5-.854M23.25 6a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgIconMailNotify;
