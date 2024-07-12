import * as React from "react";
const SvgIconMoonStarFill = (props) => (
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
      d="m16.24 5.018.812-1.624a.5.5 0 0 1 .894 0l.812 1.624a.5.5 0 0 0 .224.223l1.623.812a.5.5 0 0 1 0 .894l-1.623.812a.5.5 0 0 0-.224.223l-.812 1.624a.5.5 0 0 1-.894 0l-.812-1.624a.5.5 0 0 0-.223-.223l-1.623-.812a.5.5 0 0 1 0-.894l1.623-.812a.5.5 0 0 0 .223-.223"
    />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q0-.102-.002-.204a.75.75 0 0 0-1.183-.597 5.75 5.75 0 0 1-8.014-8.014.75.75 0 0 0-.597-1.183z"
    />
  </svg>
);
export default SvgIconMoonStarFill;
