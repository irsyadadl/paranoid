import * as React from "react";
const SvgIconMagicStar = (props) => (
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
      d="m12.773 12.227.99 4.102a.25.25 0 0 0 .457.073l2.13-3.465a.25.25 0 0 1 .232-.119l4.056.314a.25.25 0 0 0 .21-.412L18.21 9.623a.25.25 0 0 1-.04-.257l1.55-3.76a.25.25 0 0 0-.326-.327l-3.76 1.551a.25.25 0 0 1-.258-.04L12.28 4.153a.25.25 0 0 0-.412.21l.314 4.055a.25.25 0 0 1-.119.232l-3.465 2.13a.25.25 0 0 0 .072.456zm0 0L4.75 20.25"
    />
  </svg>
);
export default SvgIconMagicStar;
