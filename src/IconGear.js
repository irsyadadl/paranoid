import * as React from "react";
const SvgIconGear = ({ title, titleId, ...props }) => (
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
      d="m9.225 5.525-3.006-.694L4.83 6.22l.694 3.006-2.775 1.85v1.85l2.775 1.85-.694 3.006 1.39 1.388 3.006-.694 1.85 2.775h1.85l1.85-2.775 3.006.694 1.388-1.388-.694-3.006 2.775-1.85v-1.85l-2.775-1.85.694-3.006-1.39-1.39-3.006.694-1.85-2.775h-1.85l-1.85 2.775Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M14.75 12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
    />
  </svg>
);
export default SvgIconGear;
