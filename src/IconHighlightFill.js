import * as React from "react";
const SvgIconHighlightFill = (props) => (
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
      d="M18.666 2.511a1.745 1.745 0 0 0-2.468 0l-.46.46L2.51 16.198A1.75 1.75 0 0 0 2 17.432v3.818c0 .414.336.75.75.75h3.818c.463 0 .907-.184 1.234-.511L21.49 7.802a1.745 1.745 0 0 0 0-2.468L18.666 2.51ZM12.02 21.25a.75.75 0 0 1 .75-.75h8.48a.75.75 0 0 1 0 1.5h-8.48a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default SvgIconHighlightFill;
