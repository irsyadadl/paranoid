import * as React from "react";
const SvgIconBagHeartFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.691 3c-.925 0-1.69.72-1.747 1.644l-.878 14.5A1.75 1.75 0 0 0 4.812 21h9.021c-.693-.814-1.333-1.937-1.333-3.333 0-1.203.385-2.324 1.173-3.164a3.95 3.95 0 0 1 2.882-1.253c.552 0 1.038.1 1.445.24.407-.14.892-.24 1.444-.24.386 0 .772.057 1.143.17l-.532-8.776A1.75 1.75 0 0 0 18.31 3zM9 7.25a.75.75 0 0 1 .75.75 2.25 2.25 0 1 0 4.5 0 .75.75 0 0 1 1.5 0 3.75 3.75 0 0 1-7.5 0A.75.75 0 0 1 9 7.25"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18 22.03c-.67 0-4-1.81-4-4.36 0-1.92 1.29-2.92 2.56-2.92.62 0 1.11.19 1.44.38.34-.19.83-.38 1.44-.38 1.27 0 2.56 1 2.56 2.92 0 2.56-3.33 4.36-4 4.36m-1.44-5.78c-.53 0-1.06.44-1.06 1.42 0 1.33 1.87 2.52 2.5 2.82.63-.29 2.5-1.49 2.5-2.82 0-.98-.53-1.42-1.06-1.42-.56 0-.91.32-.92.33-.3.28-.77.28-1.05 0 0 0-.35-.32-.91-.32z"
    />
  </svg>
);
export default SvgIconBagHeartFill;
