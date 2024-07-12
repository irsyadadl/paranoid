import * as React from "react";
const SvgIconSquarePlaceholderFill = (props) => (
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
      d="M5.324 3h13.352c.258 0 .494 0 .692.016.213.018.446.057.677.175.329.168.596.435.764.765.118.23.157.463.175.676.016.198.016.434.016.692v13.352c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.677 1.75 1.75 0 0 1-.765.764 1.8 1.8 0 0 1-.676.175c-.198.016-.434.016-.692.016H5.324c-.258 0-.494 0-.692-.016a1.8 1.8 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.175-.676A9 9 0 0 1 3 18.676V5.324c0-.258 0-.494.016-.692a1.8 1.8 0 0 1 .175-.676 1.75 1.75 0 0 1 .765-.765 1.8 1.8 0 0 1 .676-.175C4.83 3 5.066 3 5.324 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSquarePlaceholderFill;
