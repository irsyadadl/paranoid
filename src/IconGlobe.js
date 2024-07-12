import * as React from "react";
const SvgIconGlobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.244 3.024 13.147 7.42a1 1 0 0 1-.726.727l-2.97.747a1 1 0 0 0-.65.52l-.262.52a1 1 0 0 1-1.492.35L3.749 7.813m10.495-4.788A9.3 9.3 0 0 0 12 2.75a9.25 9.25 0 0 0-8.25 5.062m10.495-4.788C18.268 4.028 21.25 7.666 21.25 12a9.25 9.25 0 1 1-18.5 0c0-1.508.36-2.93 1-4.188m7.956 8.743-1.248-1.872a1 1 0 0 1 .127-1.263l.207-.207a1 1 0 0 1 .77-.29l1.223.079a1 1 0 0 1 .494.168l1.994 1.34a1 1 0 0 1 .337 1.277l-.33.66a1 1 0 0 1-.895.553h-1.847a1 1 0 0 1-.832-.445"
    />
  </svg>
);
export default SvgIconGlobe;
