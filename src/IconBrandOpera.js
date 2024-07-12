import * as React from "react";
const SvgIconBrandOpera = (props) => (
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
      d="M22 12.012a10.05 10.05 0 0 1-3.334 7.472c-2.562 1.246-4.95.374-5.746-.174 2.513-.548 4.428-3.611 4.428-7.298s-1.915-6.75-4.428-7.297c.796-.548 3.184-1.42 5.746-.175A10.05 10.05 0 0 1 22 12.012"
    />
    <path
      fill="currentColor"
      d="M8.717 6.359C7.622 7.654 6.9 9.597 6.85 11.763v.474c.05 2.166.771 4.11 1.866 5.404 1.442 1.868 3.557 3.039 5.945 3.039a7.23 7.23 0 0 0 4.005-1.22A9.9 9.9 0 0 1 12 22h-.472C6.229 21.776 2 17.392 2 12.012 2 6.483 6.478 2 12 2h.05c2.537 0 4.85.971 6.616 2.54a7.23 7.23 0 0 0-4.004-1.22c-2.388 0-4.527 1.196-5.945 3.039"
    />
  </svg>
);
export default SvgIconBrandOpera;
