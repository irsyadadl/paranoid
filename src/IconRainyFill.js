import * as React from "react";
const SvgIconRainyFill = (props) => (
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
      d="M9.422 2C5.866 2 3 4.92 3 8.5S5.866 15 9.422 15h6.703C18.827 15 21 12.782 21 10.068s-2.173-4.932-4.875-4.932q-.348 0-.684.049c-.277.039-.541-.086-.662-.271C13.632 3.162 11.663 2 9.422 2M7.491 18.04a.75.75 0 1 0-1.382-.58l-1.05 2.5a.75.75 0 1 0 1.382.58zm5.024 0a.75.75 0 0 0-1.384-.58l-1.046 2.5a.75.75 0 0 0 1.384.58zm5 0a.75.75 0 0 0-1.384-.58l-1.046 2.5a.75.75 0 1 0 1.384.58z"
    />
  </svg>
);
export default SvgIconRainyFill;
