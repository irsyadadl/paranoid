import * as React from "react";
const SvgIconCloudSnowFill = (props) => (
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
      d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.422 3C5.866 3 3 5.92 3 9.5S5.866 16 9.422 16h6.703C18.827 16 21 13.782 21 11.068s-2.173-4.932-4.875-4.932q-.584.001-1.13.134C13.89 4.32 11.813 3 9.423 3Z"
    />
  </svg>
);
export default SvgIconCloudSnowFill;
