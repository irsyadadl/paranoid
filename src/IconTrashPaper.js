import * as React from "react";
const SvgIconTrashPaper = (props) => (
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
      d="m11.21 4.642 2.601-1.72a1.04 1.04 0 0 1 1.141 0l2.144 1.417c.286.189.458.508.458.849v.92c0 .387.22.74.569.913l2.558 1.27c.574.284.748 1.015.363 1.524l-2.433 3.217m-7.402-8.39-5.884.898c-.55.084-.934.587-.865 1.135l.405 3.21m6.344-5.243 2.115 2.622m-8.46 2.622-1.545.766a1.02 1.02 0 0 0-.569.913v1.97c0 .341.172.66.458.849l.736.487c.25.164.413.428.45.722l.409 3.24c.039.31.22.586.491.748l1.698 1.01c.319.19.716.194 1.04.01l3.177-1.8M4.865 9.886l1.062 1.053c.313.31.791.387 1.187.191l.394-.196m3.701 7.867 1.667 2.066c.27.334.72.466 1.129.33l2.295-.758c.13-.043.25-.111.352-.2l3.441-2.986c.368-.32.459-.853.216-1.275l-1.698-2.946m-7.402 5.769-1.057-1.05m8.46-4.719-2.644.524"
    />
  </svg>
);
export default SvgIconTrashPaper;
