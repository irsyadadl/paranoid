import * as React from "react";
const SvgIconPersonFill = ({ title, titleId, ...props }) => (
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
      d="M12 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 10.5c-4.616 0-7.845 3.41-8.247 7.68A.75.75 0 0 0 4.5 21h15a.75.75 0 0 0 .747-.82c-.402-4.27-3.631-7.68-8.247-7.68"
    />
  </svg>
);
export default SvgIconPersonFill;
