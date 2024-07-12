import * as React from "react";
const SvgIconPersonAdded = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.852 13.251c-3.72.065-6.428 2.567-7.18 5.915-.13.575.337 1.084.926 1.084H11.5m.352-6.999L12 13.25q.528 0 1.029.064m-1.177-.063A8 8 0 0 0 10 13.5m3.029-.186q.501.063.971.186m-.971-.186a7.5 7.5 0 0 1 1.971.524m-.25 4.762 2.2 1.65 3.3-5.5m-4.5-8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0"
    />
  </svg>
);
export default SvgIconPersonAdded;
