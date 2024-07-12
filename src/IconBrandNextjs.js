import * as React from "react";
const SvgIconBrandNextjs = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <g className="icon-brand-nextjs_svg__icon-brand-nextjs">
      <g className="icon-brand-nextjs_svg__Mask icon-brand-nextjs_svg__group">
        <mask
          id="icon-brand-nextjs_svg__a"
          width={20}
          height={20}
          x={2}
          y={2}
          className="icon-brand-nextjs_svg__a"
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <g className="icon-brand-nextjs_svg__Group">
            <path
              fill="none"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
              className="icon-brand-nextjs_svg__Vector"
            />
          </g>
        </mask>
        <g
          className="icon-brand-nextjs_svg__Group"
          mask="url(#icon-brand-nextjs_svg__a)"
        >
          <path
            fill="none"
            stroke="#fff"
            strokeWidth={0.8}
            d="M12 21.667A9.667 9.667 0 0 0 21.667 12 9.667 9.667 0 0 0 12 2.334C6.66 2.334 2.333 6.66 2.333 12S6.661 21.667 12 21.667Z"
            className="icon-brand-nextjs_svg__Vector"
          />
          <path
            fill="url(#icon-brand-nextjs_svg__b)"
            d="M18.612 19.503 9.682 8H8v7.997h1.346V9.71l8.21 10.606q.556-.372 1.056-.813"
            className="icon-brand-nextjs_svg__Vector"
          />
          <path
            fill="url(#icon-brand-nextjs_svg__c)"
            d="M16.111 8h-1.333v8h1.333z"
            className="icon-brand-nextjs_svg__Vector"
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="icon-brand-nextjs_svg__b"
        x1={14.111}
        x2={18.056}
        y1={14.945}
        y2={19.834}
        className="icon-brand-nextjs_svg__b"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="icon-brand-nextjs_svg__c"
        x1={15.444}
        x2={15.422}
        y1={8}
        y2={13.875}
        className="icon-brand-nextjs_svg__c"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgIconBrandNextjs;
