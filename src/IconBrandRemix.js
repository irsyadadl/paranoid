import * as React from "react";
const SvgIconBrandRemix = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <g clipPath="url(#icon-brand-remix_svg__a)">
      <path fill="#212121" d="M22 2H2v20h20z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.699 15.194c.106 1.367.106 2.007.106 2.706h-3.161c0-.152.003-.291.005-.433.009-.439.018-.897-.053-1.821-.094-1.354-.677-1.655-1.75-1.655h-4.97v-2.463h5.122c1.354 0 2.031-.412 2.031-1.503 0-.958-.677-1.54-2.03-1.54H6.874v-2.41h5.686c3.066 0 4.589 1.448 4.589 3.76 0 1.73-1.072 2.859-2.52 3.047 1.222.244 1.937.94 2.069 2.312Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M6.875 17.9v-1.836h3.342c.559 0 .68.414.68.661V17.9z"
      />
      <path
        stroke="#fff"
        strokeOpacity={0.8}
        strokeWidth={0.025}
        d="M6.863 17.9v.012h4.046v-1.187a.73.73 0 0 0-.132-.43c-.103-.139-.277-.244-.56-.244H6.863z"
      />
    </g>
    <defs>
      <clipPath id="icon-brand-remix_svg__a">
        <path fill="#fff" d="M2 2h20v20H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconBrandRemix;
