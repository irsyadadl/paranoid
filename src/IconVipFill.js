import * as React from "react";
const SvgIconVipFill = ({ title, titleId, ...props }) => (
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
      d="M12.628 3.34a.75.75 0 0 0-1.256 0l-3.86 5.903-5.384-3.14a.75.75 0 0 0-1.113.798l2.563 12.5a.75.75 0 0 0 .735.599h15.375a.75.75 0 0 0 .734-.6l2.563-12.5a.75.75 0 0 0-1.113-.798l-5.384 3.141-3.86-5.903Z"
    />
  </svg>
);
export default SvgIconVipFill;
