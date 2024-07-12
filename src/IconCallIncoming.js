import * as React from "react";
const SvgIconCallIncoming = (props) => (
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
      d="M19.25 9.25h-4.5v-4.5m5.5-1-4.996 4.996M9.211 4.468l.867 2.95a1 1 0 0 1-.266 1.003l-.914.877a.95.95 0 0 0-.184 1.16 13.06 13.06 0 0 0 4.829 4.828.95.95 0 0 0 1.159-.184l.877-.914a1 1 0 0 1 1.004-.267l2.95.868a1 1 0 0 1 .717.96v3.501c0 .552-.448 1.003-1 .973-2.599-.141-5.122-.84-7.393-2.157a16.33 16.33 0 0 1-5.923-5.923 16.3 16.3 0 0 1-2.167-7.408c-.025-.546.423-.985.97-.985h3.515a1 1 0 0 1 .959.718"
    />
  </svg>
);
export default SvgIconCallIncoming;
