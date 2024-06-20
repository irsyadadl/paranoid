import * as React from "react";
const SvgIconBrandMedium = (props) => (
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
      d="M6.769 18.82c3.738 0 6.768-3.051 6.768-6.815S10.507 5.19 6.769 5.19 0 8.24 0 12.005s3.03 6.815 6.769 6.815m10.809-.4c1.87 0 3.385-2.872 3.385-6.415 0-3.542-1.515-6.415-3.385-6.415s-3.384 2.873-3.384 6.415 1.515 6.415 3.384 6.415m5.232-.667c.657 0 1.19-2.573 1.19-5.748 0-3.174-.532-5.748-1.19-5.748s-1.19 2.574-1.19 5.748.532 5.748 1.19 5.748"
    />
  </svg>
);
export default SvgIconBrandMedium;
