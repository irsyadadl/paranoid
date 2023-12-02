import * as React from "react";
const SvgIconPlay = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.155 10.32 8.836 2.998c-1.33-.86-3.086.094-3.086 1.68v14.647c0 1.585 1.756 2.54 3.086 1.679l11.319-7.324a2 2 0 0 0 0-3.358Z"
    />
  </svg>
);
export default SvgIconPlay;
