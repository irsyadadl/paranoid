import * as React from "react";
const SvgIconPopcorn = (props) => (
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M19.233 7.75a1.8 1.8 0 0 0-.25-1.19c-.22-.36-.56-.64-.965-.8l-.042-.016a2 2 0 0 1-.648-.41 1.9 1.9 0 0 1-.433-.612l-.017-.04a1.92 1.92 0 0 0-.846-.912 2.1 2.1 0 0 0-1.258-.237l-.048.006a2.1 2.1 0 0 1-.779-.048 2 2 0 0 1-.7-.327l-.033-.024A2.07 2.07 0 0 0 12 2.75c-.439 0-.866.137-1.214.39l-.038.027a2 2 0 0 1-.697.326c-.253.064-.517.08-.776.048l-.05-.006a2.1 2.1 0 0 0-1.258.237c-.38.208-.677.528-.845.912l-.017.039c-.1.23-.247.438-.433.613a2 2 0 0 1-.649.41l-.04.016a1.96 1.96 0 0 0-.965.798 1.8 1.8 0 0 0-.25 1.19m4.482 0H5.367a1 1 0 0 0-.994 1.11l1.278 11.5a1 1 0 0 0 .994.89H10m-.75-13.5.75 13.5m-.75-13.5h5.5M10 21.25h4m.75-13.5h3.883a1 1 0 0 1 .994 1.11l-1.278 11.5a1 1 0 0 1-.994.89H14m.75-13.5L14 21.25"
    />
  </svg>
);
export default SvgIconPopcorn;
