import * as React from "react";
const SvgIconHome2 = (props) => (
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
      d="M3.75 9.258c0-.278 0-.418.035-.547a1 1 0 0 1 .15-.318c.078-.109.186-.197.402-.373l6.65-5.441c.36-.295.541-.443.742-.5a1 1 0 0 1 .542 0c.2.057.381.205.742.5l6.65 5.44c.216.177.324.265.401.374a1 1 0 0 1 .151.318c.035.13.035.269.035.547v9.392c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H5.35c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.436c-.109-.214-.109-.494-.109-1.054z"
    />
  </svg>
);
export default SvgIconHome2;
