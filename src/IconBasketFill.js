import * as React from "react";
const SvgIconBasketFill = (props) => (
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
      d="m21.79 9.46-1.75 10.09c-.15.84-.87 1.45-1.72 1.45H5.5c-.85 0-1.58-.61-1.72-1.45L2.02 9.46C1.89 8.7 2.48 8 3.25 8h2.4l1.81-4.53c.15-.38.59-.57.97-.42s.57.59.42.97L7.26 7.99h9.28l-1.59-3.97c-.15-.38.03-.82.42-.97.38-.15.82.03.97.42L18.15 8h2.4c.78 0 1.36.7 1.23 1.46z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBasketFill;
