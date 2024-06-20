import * as React from "react";
const SvgIconVipFill = (props) => (
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
      d="M12.628 3.34a.75.75 0 0 0-1.256 0l-3.86 5.903-5.384-3.14a.75.75 0 0 0-1.113.798l2.399 11.7A1.75 1.75 0 0 0 5.128 20h13.744a1.75 1.75 0 0 0 1.714-1.399l2.399-11.7a.75.75 0 0 0-1.113-.799l-5.384 3.141z"
    />
  </svg>
);
export default SvgIconVipFill;
