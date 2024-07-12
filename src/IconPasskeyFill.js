import * as React from "react";
const SvgIconPasskeyFill = (props) => (
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
      d="M12 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 10c-4.242 0-7.284 3.06-8.08 7.022C3.7 20.119 4.593 21 5.593 21h9.657v-3.438A4.5 4.5 0 0 1 13.5 14c0-.636.132-1.242.37-1.79A8.3 8.3 0 0 0 12 12"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 11a3 3 0 0 0-1.25 5.728v3.532a.5.5 0 0 0 .188.39l.75.6a.5.5 0 0 0 .624 0l.75-.6a.5.5 0 0 0 .188-.39v-.61a.5.5 0 0 0-.165-.372l-.585-.528.604-.604a.5.5 0 0 0 .146-.353v-1.065A3 3 0 0 0 18 11m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPasskeyFill;
