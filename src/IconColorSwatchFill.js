import * as React from "react";
const SvgIconColorSwatchFill = (props) => (
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
      fillRule="evenodd"
      d="M3.75 2A1.75 1.75 0 0 0 2 3.75V16.5a5.5 5.5 0 0 0 8.324 4.72l10.968-6.332a1.75 1.75 0 0 0 .64-2.39l-3.065-5.31a1.75 1.75 0 0 0-.87-1.37l-5.31-3.066A1.75 1.75 0 0 0 11.25 2zm16.792 11.59-7.515 4.338L18.18 9l2.453 4.248a.25.25 0 0 1-.092.341ZM17.34 7.457 13 14.974V4.664l4.248 2.453a.25.25 0 0 1 .091.341ZM7.5 18.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconColorSwatchFill;
