import * as React from "react";
const SvgIconBrandKarteil = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <g
      className="icon-brand-karteil_svg__icon-brand-karteil"
      clipPath="url(#icon-brand-karteil_svg__a)"
    >
      <rect
        width={16.5}
        height={16.5}
        x={0.354}
        y={12}
        fill="#0E0E10"
        stroke="#3F3F46"
        strokeWidth={0.5}
        className="icon-brand-karteil_svg__Rectangle icon-brand-karteil_svg__7"
        rx={1.749}
        transform="rotate(-45 .354 12)"
      />
    </g>
    <defs>
      <clipPath
        id="icon-brand-karteil_svg__a"
        className="icon-brand-karteil_svg__a"
      >
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconBrandKarteil;
