import * as React from "react";
const SvgIconBackspaceFill = (props) => (
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
      d="M8.275 4a1.75 1.75 0 0 0-1.44.756l-4.31 6.25a1.75 1.75 0 0 0 0 1.987l4.31 6.25a1.75 1.75 0 0 0 1.44.757H20.25A1.75 1.75 0 0 0 22 18.25V5.75A1.75 1.75 0 0 0 20.25 4zm2.443 5.47a.75.75 0 0 1 1.06 0l1.472 1.471 1.471-1.471a.75.75 0 0 1 1.061 1.06l-1.471 1.472 1.47 1.47a.75.75 0 0 1-1.061 1.06l-1.47-1.47-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.472-1.472a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBackspaceFill;
