import * as React from "react";
const SvgIconHeartFill = ({ title, titleId, ...props }) => (
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
      d="M12.367 21.404c8.72-4.9 10.72-10.637 9.15-14.558-.767-1.918-2.375-3.287-4.264-3.71-1.719-.383-3.613.027-5.253 1.414-1.64-1.387-3.534-1.797-5.253-1.413-1.89.422-3.497 1.791-4.264 3.709-1.57 3.921.43 9.659 9.15 14.558l.367.206.367-.206Z"
    />
  </svg>
);
export default SvgIconHeartFill;
