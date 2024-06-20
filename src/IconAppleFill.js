import * as React from "react";
const SvgIconAppleFill = (props) => (
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
      d="M9.288 1.586a.75.75 0 1 0-.697 1.328c.86.452 1.457.988 1.87 1.625.226.349.406.742.542 1.188-2.626-.763-4.679-.236-6.069 1.208-1.536 1.595-2.072 4.126-1.905 6.548.168 2.435 1.056 4.961 2.614 6.63.786.842 1.758 1.479 2.9 1.748 1.065.25 2.227.17 3.456-.296 1.23.466 2.392.546 3.455.296 1.144-.269 2.115-.906 2.902-1.748 1.558-1.669 2.447-4.194 2.614-6.63.167-2.422-.368-4.953-1.905-6.548-1.462-1.518-3.655-2.022-6.478-1.08-.175-.784-.454-1.495-.868-2.132-.575-.887-1.38-1.585-2.43-2.137Z"
    />
  </svg>
);
export default SvgIconAppleFill;
