import * as React from "react";
const SvgIconAt = (props) => (
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
      d="M12 2.25a9.75 9.75 0 0 0 0 19.5c2.017 0 4.134-.608 5.665-1.625a.748.748 0 0 0 .003-1.247.75.75 0 0 0-.833-.002c-1.273.847-3.128 1.374-4.835 1.374A8.25 8.25 0 1 1 20.25 12c0 2.48-1.02 3-1.875 3s-1.875-.52-1.875-3V8.25a.75.75 0 1 0-1.5 0v.4a4.5 4.5 0 1 0 .556 6.102c.562 1.125 1.533 1.748 2.819 1.748 2.113 0 3.375-1.682 3.375-4.5A9.76 9.76 0 0 0 12 2.25M12 15a3 3 0 1 1 0-5.999A3 3 0 0 1 12 15"
    />
  </svg>
);
export default SvgIconAt;
