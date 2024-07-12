import * as React from "react";
const SvgIconBirthdayCake = (props) => (
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
      d="M4.75 15.5v4.75a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1V15.5M12 7.25a2.25 2.25 0 0 1-1.593-3.841l1.591-1.591 1.591 1.59A2.25 2.25 0 0 1 12 7.25m0 0v2.5m0 0H5.25a1 1 0 0 0-1 1v3.406a1 1 0 0 0 .521.878l1.726.942a1 1 0 0 0 .994-.02l1.495-.897a1 1 0 0 1 1.028 0l1.472.882a1 1 0 0 0 1.028 0l1.472-.883a1 1 0 0 1 1.028 0l1.495.897a1 1 0 0 0 .994.02l1.726-.94a1 1 0 0 0 .521-.879V10.75a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgIconBirthdayCake;
