import * as React from "react";
const SvgIconLayers2 = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.3 12-5.55 3.094L12 20.25l9.25-5.156L15.7 12m-7.4 0L2.75 8.906 12 3.75l9.25 5.156L15.7 12m-7.4 0 3.7 2.063L15.7 12"
    />
  </svg>
);
export default SvgIconLayers2;
