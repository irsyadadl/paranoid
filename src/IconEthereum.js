import * as React from "react";
const SvgIconEthereum = (props) => (
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
      d="m12 6.5.607-.441a.75.75 0 0 0-1.214 0zM8 12l-.607-.441a.75.75 0 0 0 0 .882zm4 5.5-.607.441a.75.75 0 0 0 1.214 0zm4-5.5.607.441a.75.75 0 0 0 0-.882zm-4 1.5-.263.702a.75.75 0 0 0 .526 0zm-.607-7.441-4 5.5 1.214.882 4-5.5zm-4 6.382 4 5.5 1.214-.882-4-5.5zm5.214 5.5 4-5.5-1.214-.882-4 5.5zm4-6.382-4-5.5-1.214.882 4 5.5zm-8.87 1.143 4 1.5.526-1.404-4-1.5zm4.526 1.5 4-1.5-.526-1.404-4 1.5zM20.5 12a8.5 8.5 0 0 1-8.5 8.5V22c5.523 0 10-4.477 10-10zM12 20.5A8.5 8.5 0 0 1 3.5 12H2c0 5.523 4.477 10 10 10zM3.5 12A8.5 8.5 0 0 1 12 3.5V2C6.477 2 2 6.477 2 12zM12 3.5a8.5 8.5 0 0 1 8.5 8.5H22c0-5.523-4.477-10-10-10z"
    />
  </svg>
);
export default SvgIconEthereum;
