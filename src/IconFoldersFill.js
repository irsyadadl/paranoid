import * as React from "react";
const SvgIconFoldersFill = (props) => (
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
      d="M6.75 3A1.75 1.75 0 0 0 5 4.75V7H2.75A1.75 1.75 0 0 0 1 8.75v10.5c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 19 19.25V17h2.25A1.75 1.75 0 0 0 23 15.25v-8.5A1.75 1.75 0 0 0 21.25 5h-6.836a.25.25 0 0 1-.177-.073l-1.414-1.414A1.75 1.75 0 0 0 11.586 3zM19 15.5h2.25a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.836a1.75 1.75 0 0 1-1.237-.513l-1.414-1.414a.25.25 0 0 0-.177-.073H6.75a.25.25 0 0 0-.25.25V7h1.086c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 0 0 .177.073h6.836c.966 0 1.75.784 1.75 1.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFoldersFill;
