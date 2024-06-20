import * as React from "react";
const SvgIconFileLock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="m13.043 3.043-.53.53zm5.914 5.914-.53.53zM4 10.75a.75.75 0 0 0 1.5 0zm9.25 9.75a.75.75 0 0 0 0 1.5zm.25-17.25a.75.75 0 0 0-1.5 0zM18.75 10a.75.75 0 0 0 0-1.5zm-15 6.75V16a.75.75 0 0 0-.75.75zm6.5 0H11a.75.75 0 0 0-.75-.75zm0 4.5V22a.75.75 0 0 0 .75-.75zm-6.5 0H3c0 .414.336.75.75.75zm5.5-4.5v.75H10v-.75zm-4.5 0H4v.75h.75zm1-13.25h6.586V2H5.75zM18.5 9.664V20.25H20V9.664zm-5.987-6.09 5.914 5.913 1.06-1.06-5.914-5.914zM5.5 10.75v-7H4v7zm12.75 9.75h-5V22h5zM20 9.664c0-.464-.184-.909-.513-1.237l-1.06 1.06a.25.25 0 0 1 .073.177zM12.336 3.5a.25.25 0 0 1 .177.073l1.06-1.06A1.75 1.75 0 0 0 12.336 2zM18.5 20.25a.25.25 0 0 1-.25.25V22A1.75 1.75 0 0 0 20 20.25zM5.75 2A1.75 1.75 0 0 0 4 3.75h1.5a.25.25 0 0 1 .25-.25zM12 3.25v5h1.5v-5zM13.75 10h5V8.5h-5zM12 8.25c0 .966.784 1.75 1.75 1.75V8.5a.25.25 0 0 1-.25-.25zM3.75 17.5h6.5V16h-6.5zm5.75-.75v4.5H11v-4.5zm.75 3.75h-6.5V22h6.5zm-5.75.75v-4.5H3v4.5zm4-5.25v.75H10V16zm.75 0h-4.5v1.5h4.5zm-3.75.75V16H4v.75zM7 14.5A1.5 1.5 0 0 1 8.5 16H10a3 3 0 0 0-3-3zM7 13a3 3 0 0 0-3 3h1.5A1.5 1.5 0 0 1 7 14.5z"
    />
  </svg>
);
export default SvgIconFileLock;
