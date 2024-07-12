import * as React from "react";
const SvgIconTShirt = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.078 10.548.873-2.456a1 1 0 0 0-.504-1.234L15.075 3.75c-1.005 3.182-5.145 3.182-6.15 0L2.553 6.858a1 1 0 0 0-.504 1.234l.873 2.456a1 1 0 0 0 1.358.575l1.47-.673v8.8a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1v-8.8l1.47.673a1 1 0 0 0 1.358-.575Z"
    />
  </svg>
);
export default SvgIconTShirt;
