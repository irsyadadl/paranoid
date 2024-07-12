import * as React from "react";
const SvgIconTrash = (props) => (
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
      d="m5.69 20.314-.749.049zm12.62 0 .749.049zM2.75 5a.75.75 0 0 0 0 1.5zm18.5 1.5a.75.75 0 0 0 0-1.5zM10.5 10.75a.75.75 0 0 0-1.5 0zM9 16.25a.75.75 0 0 0 1.5 0zm6-5.5a.75.75 0 0 0-1.5 0zm-1.5 5.5a.75.75 0 0 0 1.5 0zm1.648-10.313a.75.75 0 1 0 1.452-.374zM4.002 5.798l.94 14.565 1.496-.097-.94-14.564zM6.688 22h10.624v-1.5H6.688zm12.37-1.637.94-14.565-1.496-.096-.94 14.564 1.497.097ZM19.25 5H4.75v1.5h14.5zM2.75 6.5h2V5h-2zm16.5 0h2V5h-2zM17.312 22a1.75 1.75 0 0 0 1.747-1.637l-1.497-.097a.25.25 0 0 1-.25.234zm-12.37-1.637A1.75 1.75 0 0 0 6.687 22v-1.5a.25.25 0 0 1-.25-.234l-1.497.097ZM9 10.75v5.5h1.5v-5.5zm4.5 0v5.5H15v-5.5zM12 3.5a3.25 3.25 0 0 1 3.148 2.437l1.452-.374A4.75 4.75 0 0 0 12 2zM8.852 5.937A3.25 3.25 0 0 1 12 3.5V2a4.75 4.75 0 0 0-4.6 3.563z"
    />
  </svg>
);
export default SvgIconTrash;
