import * as React from "react";
const SvgIconCursorFill = (props) => (
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
      d="M4.254 2.655c-.995-.359-1.958.604-1.6 1.6l6.132 17.03c.388 1.076 1.896 1.11 2.332.054l2.984-7.236 7.237-2.985c1.057-.436 1.022-1.944-.053-2.332z"
    />
  </svg>
);
export default SvgIconCursorFill;
