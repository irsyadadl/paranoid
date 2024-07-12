import * as React from "react";
const SvgIconCupStraw = (props) => (
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
      d="m17.927 11.75-.617 9.564a1 1 0 0 1-.998.936H7.688a1 1 0 0 1-.998-.936l-.617-9.564m11.854 0 .254-3.936a1 1 0 0 0-.998-1.064H6.817a1 1 0 0 0-.998 1.064l.254 3.936m11.854 0H6.073m5.677-5V3.552a1 1 0 0 1 .783-.976l3.717-.826"
    />
  </svg>
);
export default SvgIconCupStraw;
