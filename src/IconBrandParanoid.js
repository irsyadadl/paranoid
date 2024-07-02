import * as React from "react";
const SvgIconBrandParanoid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="url(#icon-brand-paranoid_svg__a)"
      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
    />
    <path
      stroke="#fff"
      strokeWidth={0.825}
      d="M7.646 7.36h-.344v3.323h6.477v6.53h3.377V7.36z"
    />
    <defs>
      <radialGradient
        id="icon-brand-paranoid_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(1002 1002)scale(2000)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F3F46" />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgIconBrandParanoid;
