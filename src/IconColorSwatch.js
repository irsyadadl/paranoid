import * as React from "react";
const SvgIconColorSwatch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="m17.623 6.467.375-.65zm.366 1.366.65.375zm3.294 5.04.65-.375zm-.366 1.366-.375-.65zM3.75 3.5h7.5V2h-7.5zm7.75.25V16.5H13V3.75zm-8 12.75V3.75H2V16.5zm4 4a4 4 0 0 1-4-4H2A5.5 5.5 0 0 0 7.5 22zm4-4a4 4 0 0 1-4 4V22a5.5 5.5 0 0 0 5.5-5.5zM3.75 2A1.75 1.75 0 0 0 2 3.75h1.5a.25.25 0 0 1 .25-.25zm13.59 5.458L10.963 18.5l1.3.75 6.375-11.042-1.3-.75Zm3.202 6.131L9.5 19.964l.75 1.3 11.042-6.376zm.092-.341a.25.25 0 0 1-.092.341l.75 1.3a1.75 1.75 0 0 0 .64-2.391zM11.77 3.954l5.477 3.163.75-1.3-5.477-3.162-.75 1.3Zm-.52-.454a.25.25 0 0 1 .224.14l1.343-.67A1.75 1.75 0 0 0 11.25 2zm.224.14a.23.23 0 0 1 .026.11H13c0-.278-.066-.544-.183-.78zm5.998 4.13 3.162 5.478 1.299-.75L18.77 7.02l-1.3.75Zm-.224-.653a.25.25 0 0 1 .125.232l1.497.093a1.75 1.75 0 0 0-.872-1.624zm.125.232a.25.25 0 0 1-.034.11l1.3.75c.139-.242.215-.504.23-.767zM8.5 16.5a1 1 0 0 1-1 1V19a2.5 2.5 0 0 0 2.5-2.5zm-1 1a1 1 0 0 1-1-1H5A2.5 2.5 0 0 0 7.5 19zm-1-1a1 1 0 0 1 1-1V14A2.5 2.5 0 0 0 5 16.5zm1-1a1 1 0 0 1 1 1H10A2.5 2.5 0 0 0 7.5 14z"
    />
  </svg>
);
export default SvgIconColorSwatch;
