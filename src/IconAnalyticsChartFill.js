import * as React from "react";
const SvgIconAnalyticsChartFill = (props) => (
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
      d="M3 4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75v6.5h-4.298l-2.04-3.85a.75.75 0 0 0-1.34.03L9.96 14.574 8.412 11.65a.75.75 0 0 0-.663-.399H3v-6.5Z"
    />
    <path
      fill="currentColor"
      d="M3 12.75v6.5c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25v-6.5h-4.75a.75.75 0 0 1-.663-.4L14.04 9.429l-3.361 7.141a.75.75 0 0 1-1.342.032L7.298 12.75z"
    />
  </svg>
);
export default SvgIconAnalyticsChartFill;
