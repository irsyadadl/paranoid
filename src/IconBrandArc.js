import * as React from "react";
const SvgIconBrandArc = (props) => (
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
      d="M11.45 2.15a2.2 2.2 0 0 1 1.968 1.216l3.635 7.27a7.2 7.2 0 0 0 1.58-3.372 2.2 2.2 0 1 1 4.333.771 11.62 11.62 0 0 1-3.841 6.745l1.442 2.886a2.2 2.2 0 0 1-3.935 1.967l-1.325-2.65a11.6 11.6 0 0 1-3.788.63c-1.37 0-2.685-.237-3.905-.672l-1.346 2.692a2.2 2.2 0 0 1-3.935-1.967l1.484-2.97a11.7 11.7 0 0 1-2.556-3.232A2.2 2.2 0 0 1 5.14 9.39q.326.61.758 1.143l3.583-7.166A2.2 2.2 0 0 1 11.45 2.15M9.606 12.958c.61.166 1.25.255 1.913.255a7.2 7.2 0 0 0 1.791-.223l-1.86-3.721z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandArc;
