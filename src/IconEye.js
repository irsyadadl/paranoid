import * as React from "react";
const SvgIconEye = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m2 12-.671-.335a.75.75 0 0 0 0 .67zm20 0 .671.335a.75.75 0 0 0 0-.67zm-19.329.335C4.989 7.693 8.555 5.5 12 5.5c3.444 0 7.01 2.193 9.329 6.835l1.342-.67C20.161 6.64 16.141 4 12 4 7.858 4 3.838 6.64 1.329 11.665l1.342.67Zm-1.342 0C3.839 17.359 7.859 20 12 20c4.142 0 8.162-2.64 10.671-7.665l-1.342-.67C19.011 16.307 15.444 18.5 12 18.5c-3.445 0-7.01-2.193-9.329-6.835l-1.342.67ZM14.5 12a2.5 2.5 0 0 1-2.5 2.5V16a4 4 0 0 0 4-4zM12 14.5A2.5 2.5 0 0 1 9.5 12H8a4 4 0 0 0 4 4zM9.5 12A2.5 2.5 0 0 1 12 9.5V8a4 4 0 0 0-4 4zM12 9.5a2.5 2.5 0 0 1 2.5 2.5H16a4 4 0 0 0-4-4z"
    />
  </svg>
);
export default SvgIconEye;
