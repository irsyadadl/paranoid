import * as React from "react";
const SvgIconShieldFill = (props) => (
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
      d="M12.553 2.144a1.75 1.75 0 0 0-1.106 0L4.197 4.56A1.75 1.75 0 0 0 3 6.22v5.692c0 2.737 1.184 4.758 2.859 6.347 1.647 1.563 3.8 2.738 5.785 3.809.222.12.49.12.712 0 1.984-1.07 4.138-2.246 5.785-3.809C19.817 16.67 21 14.65 21 11.912V6.22a1.75 1.75 0 0 0-1.197-1.66z"
    />
  </svg>
);
export default SvgIconShieldFill;
