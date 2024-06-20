import * as React from "react";
const SvgIconSquarePlusFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.324 3c-.258 0-.494 0-.692.016a1.8 1.8 0 0 0-.676.175 1.75 1.75 0 0 0-.765.765 1.8 1.8 0 0 0-.175.676A9 9 0 0 0 3 5.324v13.352c0 .258 0 .494.016.692.018.213.057.446.175.677.168.329.435.596.765.764.23.118.463.157.676.175.198.016.434.016.692.016h13.352c.258 0 .494 0 .692-.016a1.8 1.8 0 0 0 .677-.175 1.75 1.75 0 0 0 .764-.765 1.8 1.8 0 0 0 .175-.676c.016-.198.016-.434.016-.692V5.324c0-.258 0-.494-.016-.692a1.8 1.8 0 0 0-.175-.676 1.75 1.75 0 0 0-.765-.765 1.8 1.8 0 0 0-.676-.175A9 9 0 0 0 18.676 3zm9.926 9.75a.75.75 0 0 0 0-1.5h-2.5V8.758a.75.75 0 0 0-1.5 0v2.492H8.757a.75.75 0 0 0 0 1.5h2.493v2.493a.75.75 0 0 0 1.5 0V12.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSquarePlusFill;
