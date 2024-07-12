import * as React from "react";
const SvgIconStore2 = (props) => (
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
      d="M21.25 7.752 18.467 4.14a1 1 0 0 0-.792-.39H6.325a1 1 0 0 0-.792.39L2.75 7.752m18.5 0v1a2.96 2.96 0 0 1-1.028 2.237m1.028-3.237H2.75m0 0v1a2.96 2.96 0 0 0 1.028 2.237m11.305-2.237c0 1.658 1.38 3.001 3.084 3.001.79 0 1.51-.289 2.055-.764m-5.139-2.237v-1m0 1c0 1.658-1.38 3.001-3.083 3.001s-3.083-1.343-3.083-3m0 0c0 1.657-1.38 3-3.084 3a3.12 3.12 0 0 1-2.055-.764m5.139-2.237v-1m5.139 12.498v-3.001c0-1.105-.92-2.001-2.056-2.001-1.135 0-2.056.896-2.056 2v3.002m-6.166-9.26v8.26a1 1 0 0 0 1 1h14.444a1 1 0 0 0 1-1v-8.26"
    />
  </svg>
);
export default SvgIconStore2;
