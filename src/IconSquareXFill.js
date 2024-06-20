import * as React from "react";
const SvgIconSquareXFill = (props) => (
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
      d="M5.324 3c-.258 0-.494 0-.692.016a1.8 1.8 0 0 0-.676.175 1.75 1.75 0 0 0-.765.765 1.8 1.8 0 0 0-.175.676A9 9 0 0 0 3 5.324v13.352c0 .258 0 .494.016.692.018.213.057.446.175.677.168.329.435.596.765.764.23.118.463.157.676.175.198.016.434.016.692.016h13.352c.258 0 .494 0 .692-.016a1.8 1.8 0 0 0 .677-.175 1.75 1.75 0 0 0 .764-.765 1.8 1.8 0 0 0 .175-.676c.016-.198.016-.434.016-.692V5.324c0-.258 0-.494-.016-.692a1.8 1.8 0 0 0-.175-.676 1.75 1.75 0 0 0-.765-.765 1.8 1.8 0 0 0-.676-.175A9 9 0 0 0 18.676 3zM9.53 8.47a.75.75 0 0 0-1.06 1.06L10.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 13.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L13.06 12l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 10.94z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSquareXFill;
