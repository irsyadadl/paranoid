import * as React from "react";
const SvgIconLaunch = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.861 13.25H4.935a1 1 0 0 1-.878-1.479l1.909-3.5a1 1 0 0 1 .878-.521h4.385m-4.368 5.5 3.889 3.889M6.861 13.25l4.368-5.5m-.479 9.389v1.927a1 1 0 0 0 1.479.877l3.5-1.909a1 1 0 0 0 .521-.878v-4.385m-5.5 4.368 5.5-4.368m0 0c2.828-2.593 4.675-5.402 4.961-9.021a.89.89 0 0 0-.96-.961c-3.62.286-6.43 2.133-9.022 4.961m-6.423 13.5H3.75a1 1 0 0 1-1-1v-1.055a2.056 2.056 0 1 1 2.056 2.055Z"
    />
  </svg>
);
export default SvgIconLaunch;
