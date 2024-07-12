import * as React from "react";
const SvgIconSnowFlakes = (props) => (
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
      d="M11.999 5.5v13m0-13L9.51 3m2.488 2.5L14.486 3M12 18.5 9.51 21m2.488-2.5 2.487 2.5M6.399 8.75l11.204 6.5M6.398 8.75 3 9.665m3.398-.915-.91-3.415m12.114 9.915.91 3.415m-.91-3.415L21 14.335m-14.602.915 11.204-6.5m-11.204 6.5-.91 3.415m.91-3.415L3 14.335M17.602 8.75 21 9.665m-3.398-.915.91-3.415"
    />
  </svg>
);
export default SvgIconSnowFlakes;
