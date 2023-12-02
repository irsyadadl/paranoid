import * as React from "react";
const SvgIconBellFill = ({ title, titleId, ...props }) => (
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
      d="M12 2a7.795 7.795 0 0 0-7.696 6.554L2.76 18.131A.75.75 0 0 0 3.5 19h4.008c.849 1.75 2.512 3 4.492 3s3.643-1.25 4.492-3H20.5a.75.75 0 0 0 .74-.87l-1.544-9.576A7.795 7.795 0 0 0 12 2m2.754 17H9.245c.678.937 1.68 1.5 2.754 1.5s2.076-.563 2.754-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBellFill;
