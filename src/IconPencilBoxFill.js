import * as React from "react";
const SvgIconPencilBoxFill = (props) => (
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
      d="M19.987 2.427a1.75 1.75 0 0 0-2.474 0L12.22 7.72a.75.75 0 0 0-.22.53v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .53-.22l5.293-5.293a1.75 1.75 0 0 0 0-2.475zm-1.414 1.06a.25.25 0 0 1 .354 0l1.586 1.586a.25.25 0 0 1 0 .354L15.439 10.5H13.5V8.56z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11.159 6.659 14.818 3H5.324c-.258 0-.494 0-.692.016a1.8 1.8 0 0 0-.676.175 1.75 1.75 0 0 0-.765.765 1.8 1.8 0 0 0-.175.676A9 9 0 0 0 3 5.324v13.352c0 .258 0 .494.016.692.018.213.057.446.175.677.168.329.435.596.765.764.23.118.463.157.676.175.198.016.434.016.692.016h13.352c.258 0 .494 0 .692-.016a1.8 1.8 0 0 0 .677-.175 1.75 1.75 0 0 0 .764-.765 1.8 1.8 0 0 0 .175-.676c.016-.198.016-.434.016-.692V9.182l-3.659 3.659a2.25 2.25 0 0 1-1.591.659h-3a2.25 2.25 0 0 1-2.25-2.25v-3c0-.597.237-1.169.659-1.591"
    />
  </svg>
);
export default SvgIconPencilBoxFill;
