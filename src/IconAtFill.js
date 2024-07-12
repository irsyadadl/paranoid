import * as React from "react";
const SvgIconAtFill = (props) => (
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
      d="M21.75 12v.143C21.718 13.479 21.222 15 19.125 15c-2.17 0-2.625-1.631-2.625-3V8.25a.75.75 0 0 0-.8-.75.766.766 0 0 0-.7.775v.375a4.5 4.5 0 1 0 .63 6.005q.142.246.318.469c.503.626 1.462 1.376 3.177 1.376q.436 0 .864-.07a.376.376 0 0 1 .384.562 9.76 9.76 0 0 1-8.569 4.758c-5.136-.103-9.348-4.232-9.546-9.365A9.75 9.75 0 1 1 21.75 12M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
);
export default SvgIconAtFill;
