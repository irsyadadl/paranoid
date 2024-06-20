import * as React from "react";
const SvgIconFolderPaperFill = (props) => (
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
      d="M3 4.75C3 3.784 3.784 3 4.75 3h10.5c.966 0 1.75.784 1.75 1.75V5h2.25c.966 0 1.75.784 1.75 1.75v3.418c.591.281 1 .884 1 1.582v7.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25V8.75c0-.698.409-1.3 1-1.582zM4.5 7h3.836c.464 0 .909.184 1.237.513l2.414 2.414a.25.25 0 0 0 .177.073H15.5V4.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25zM17 10h2.5V6.75a.25.25 0 0 0-.25-.25H17z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFolderPaperFill;
