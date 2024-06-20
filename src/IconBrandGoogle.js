import * as React from "react";
const SvgIconBrandGoogle = (props) => (
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
      d="M22 12.234C22 17.939 18.029 22 12.164 22 6.54 22 2 17.532 2 12S6.541 2 12.164 2c2.738 0 5.04.988 6.816 2.617l-2.767 2.617C12.594 3.798 5.865 6.379 5.865 12c0 3.488 2.832 6.314 6.299 6.314 4.025 0 5.533-2.838 5.77-4.31h-5.77v-3.44h9.676c.094.513.16 1.005.16 1.67"
    />
  </svg>
);
export default SvgIconBrandGoogle;
