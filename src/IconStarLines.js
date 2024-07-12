import * as React from "react";
const SvgIconStarLines = (props) => (
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
      d="m9.25 15.75-4.5 4.5m2.5-9.5-4.5 4.5m13.5.5-4.5 4.5m1.322-15.26-3.182.737a.5.5 0 0 0-.265.815l2.141 2.466a.5.5 0 0 1 .12.371l-.282 3.254a.5.5 0 0 0 .694.504l3.007-1.274a.5.5 0 0 1 .39 0l3.008 1.274a.5.5 0 0 0 .693-.504l-.283-3.254a.5.5 0 0 1 .12-.37l2.142-2.467a.5.5 0 0 0-.265-.815l-3.182-.737a.5.5 0 0 1-.315-.23l-1.685-2.798a.5.5 0 0 0-.856 0L13.387 4.76a.5.5 0 0 1-.315.23"
    />
  </svg>
);
export default SvgIconStarLines;
