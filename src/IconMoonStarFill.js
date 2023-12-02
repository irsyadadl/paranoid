import * as React from "react";
const SvgIconMoonStarFill = ({ title, titleId, ...props }) => (
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
      d="M22.032 11.723a7 7 0 0 1-9.755-9.755 10.218 10.218 0 0 0-.275-.004c-5.542 0-10.034 4.492-10.034 10.034 0 5.542 4.492 10.034 10.034 10.034 5.542 0 10.034-4.492 10.034-10.034 0-.092-.001-.184-.004-.275Z"
    />
    <path
      fill="currentColor"
      d="M16.333 5.333 17.5 3l1.167 2.333L21 6.5l-2.333 1.167L17.5 10l-1.167-2.333L14 6.5z"
    />
  </svg>
);
export default SvgIconMoonStarFill;
