import * as React from "react";
const SvgIconMoveFill = (props) => (
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
      d="M13.06 2.5a1.5 1.5 0 0 0-2.12 0L8.47 4.97a.75.75 0 1 0 1.06 1.06l1.72-1.72v6.94H4.31l1.72-1.72a.75.75 0 0 0-1.06-1.06L2.5 10.94a1.5 1.5 0 0 0 0 2.12l2.47 2.47a.75.75 0 0 0 1.06-1.06l-1.72-1.72h6.94v6.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.47 2.47a1.5 1.5 0 0 0 2.12 0l2.47-2.47a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-6.94h6.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.47-2.47a1.5 1.5 0 0 0 0-2.12l-2.47-2.47a.75.75 0 1 0-1.06 1.06l1.72 1.72h-6.94V4.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
    />
  </svg>
);
export default SvgIconMoveFill;
