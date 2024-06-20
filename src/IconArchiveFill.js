import * as React from "react";
const SvgIconArchiveFill = (props) => (
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
      d="M2.75 3a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h18.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 8.5H3v10.176c0 .258 0 .494.016.692.018.213.057.446.175.677.168.329.435.596.765.764.23.118.463.157.676.175.198.016.434.016.692.016h13.352c.258 0 .494 0 .692-.016a1.8 1.8 0 0 0 .677-.175 1.75 1.75 0 0 0 .764-.765 1.8 1.8 0 0 0 .175-.676c.016-.198.016-.434.016-.692zM9.25 11.75A.75.75 0 0 1 10 11h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArchiveFill;
