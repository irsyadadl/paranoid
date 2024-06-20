import * as React from "react";
const SvgIconHighlight = (props) => (
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
      d="M12.77 21.25h8.48m-18.5-3.818v3.818h3.818a1 1 0 0 0 .704-.291L20.959 7.272a.995.995 0 0 0 0-1.408l-2.823-2.822a.995.995 0 0 0-1.408 0L3.042 16.728a1 1 0 0 0-.292.704"
    />
  </svg>
);
export default SvgIconHighlight;
