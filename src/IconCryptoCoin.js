import * as React from "react";
const SvgIconCryptoCoin = (props) => (
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
      d="M12 6.75V8.5m0 0a3.5 3.5 0 1 0 0 7m0-7c1.116 0 2.11.522 2.75 1.335M12 15.5v1.75m0-1.75c1.116 0 2.11-.522 2.75-1.335M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0"
    />
  </svg>
);
export default SvgIconCryptoCoin;
