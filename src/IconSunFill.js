import * as React from "react";
const SvgIconSunFill = (props) => (
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
      d="M12.75 1.768a.75.75 0 0 0-1.5 0V3.29a.75.75 0 1 0 1.5 0zM4.234 18.705a.75.75 0 0 0 1.061 1.061l1.077-1.077a.75.75 0 0 0-1.06-1.06zM12 19.96a.75.75 0 0 1 .75.75v1.523a.75.75 0 0 1-1.5 0v-1.524a.75.75 0 0 1 .75-.75Zm5.628-14.649a.75.75 0 0 0 1.06 1.061l1.078-1.077a.75.75 0 0 0-1.061-1.06L17.628 5.31ZM19.959 12a.75.75 0 0 1 .75-.75h1.523a.75.75 0 1 1 0 1.5H20.71a.75.75 0 0 1-.75-.75Zm-1.27 5.628a.75.75 0 1 0-1.061 1.06l1.077 1.078a.75.75 0 1 0 1.06-1.06zM1.018 12a.75.75 0 0 1 .75-.75H3.29a.75.75 0 0 1 0 1.5H1.768a.75.75 0 0 1-.75-.75m4.277-7.766a.75.75 0 0 0-1.06 1.061L5.31 6.372a.75.75 0 0 0 1.061-1.06L5.295 4.233Zm2.462 3.523a6 6 0 1 1 8.486 8.486 6 6 0 0 1-8.486-8.486"
    />
  </svg>
);
export default SvgIconSunFill;
