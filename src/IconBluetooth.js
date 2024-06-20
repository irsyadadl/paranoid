import * as React from "react";
const SvgIconBluetooth = (props) => (
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
      d="m11.912 12 4.828-3.95a.5.5 0 0 0 .003-.771L11.53 2.933a.5.5 0 0 0-.82.384v7.698m1.203.985-1.204.985M11.912 12l4.828 3.95a.5.5 0 0 1 .003.77l-5.214 4.346a.5.5 0 0 1-.82-.384v-7.697M11.911 12l-1.204-.985m0 1.97-5.416 4.431m5.416-4.431v-1.97m0 0L5.292 6.583"
    />
  </svg>
);
export default SvgIconBluetooth;
