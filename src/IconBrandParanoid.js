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
      d="M17.5 1h-11A5.5 5.5 0 0 0 1 6.5v11A5.5 5.5 0 0 0 6.5 23h11a5.5 5.5 0 0 0 5.5-5.5v-11A5.5 5.5 0 0 0 17.5 1"
    />
    <path
      stroke="#fff"
      strokeWidth={0.825}
      d="M7.21 6.895h-.378v3.657h7.125v7.183h3.715V6.895z"
    />
    <defs>
      <radialGradient
        id="icon-brand-paranoid_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(1101 1101)scale(2200)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F3F46" />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgIconBrandParanoid;
