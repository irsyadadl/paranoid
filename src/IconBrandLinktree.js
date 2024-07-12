import * as React from "react";
const SvgIconBrandLinktree = (props) => (
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
      d="m13.466 6.877 3.38-3.43 1.962 1.984-3.545 3.337h4.987v2.754h-5.011l3.57 3.423-1.963 1.945L12 12.082 7.155 16.89l-1.963-1.938 3.57-3.423H3.75V8.768h4.987L5.192 5.43l1.962-1.984 3.38 3.43V2h2.932zm-2.932 8.588h2.932V22h-2.932v-6.534Z"
    />
  </svg>
);
export default SvgIconBrandLinktree;
