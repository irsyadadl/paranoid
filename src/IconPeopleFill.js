import * as React from "react";
const SvgIconPeopleFill = (props) => (
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
      d="M13.5 6.25a4.25 4.25 0 1 0-8.5 0 4.25 4.25 0 0 0 8.5 0m4.25 0A2.75 2.75 0 0 0 15 3.5.75.75 0 0 1 15 2a4.25 4.25 0 0 1 0 8.5.75.75 0 0 1 0-1.5 2.75 2.75 0 0 0 2.75-2.75m.414 12.857c.168 1.079-.734 1.862-1.664 1.862H2c-.93 0-1.831-.783-1.664-1.862C.951 15.152 4.746 12 9.25 12s8.3 3.152 8.914 7.107M22.25 21c.928 0 1.833-.783 1.662-1.863-.45-2.836-2.569-5.328-5.412-6.335a.75.75 0 1 0-.5 1.414c2.351.833 4.071 2.891 4.43 5.155a.1.1 0 0 1-.001.034.1.1 0 0 1-.022.034.22.22 0 0 1-.157.06h-1.5a.75.75 0 0 0 0 1.5h1.5Z"
    />
  </svg>
);
export default SvgIconPeopleFill;
