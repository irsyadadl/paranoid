import * as React from "react";
const SvgIconBrandBluesky = (props) => (
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
      d="M12 11.454c-.922-1.915-3.436-5.483-5.772-7.242-1.685-1.27-4.417-2.252-4.417.874 0 .624.357 5.244.566 5.994.728 2.608 3.378 3.273 5.736 2.87-4.121.704-5.17 3.035-2.905 5.366 4.3 4.426 6.18-1.11 6.661-2.53.09-.262.131-.383.131-.276 0-.107.041.014.13.276.482 1.42 2.362 6.956 6.662 2.53 2.264-2.331 1.216-4.662-2.905-5.365 2.358.402 5.008-.263 5.736-2.87.21-.75.566-5.371.566-5.995 0-3.126-2.732-2.144-4.417-.874-2.336 1.76-4.85 5.327-5.772 7.242"
    />
  </svg>
);
export default SvgIconBrandBluesky;
