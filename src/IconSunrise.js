import * as React from "react";
const SvgIconSunrise = (props) => (
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
      d="M12 2.75v1.03m-8.222 8.47H2.75m17.472 0h1.028m-3.437-6.059.727-.727M2.75 16.25h18.5m-14.5 4h10.5M6.187 6.191l-.727-.727m2.29 6.786v-.243A4.253 4.253 0 0 1 12 7.75a4.253 4.253 0 0 1 4.25 4.257v.243"
    />
  </svg>
);
export default SvgIconSunrise;
