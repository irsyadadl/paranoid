import * as React from "react";
const SvgIconAlbumFill = (props) => (
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
      d="M12.802 4.489a.25.25 0 0 0-.302.245v14.533a.25.25 0 0 0 .302.244l6.5-1.374a.25.25 0 0 0 .198-.245V6.108a.25.25 0 0 0-.198-.245zM11 4.734a1.75 1.75 0 0 1 2.112-1.713l6.5 1.374A1.75 1.75 0 0 1 21 6.108v11.784a1.75 1.75 0 0 1-1.388 1.713l-6.5 1.374A1.75 1.75 0 0 1 11 19.267zM7.75 4a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 7.75 4m-4 1a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 3.75 5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAlbumFill;
