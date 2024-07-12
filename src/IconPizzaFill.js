import * as React from "react";
const SvgIconPizzaFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M14 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
    <path
      fill="currentColor"
      d="M11 6c0-.544.145-1.054.398-1.494l-4.714.809a14.5 14.5 0 0 0 5.365 9.093 4.001 4.001 0 0 1 7.38-1.432L20.75 5.27a1.75 1.75 0 0 0-2.02-2.02l-2.774.475A3 3 0 1 1 11 6"
    />
    <path
      fill="currentColor"
      d="m17.496 17.074.265-.263a2.5 2.5 0 1 0-4.261-1.775v.376a14.4 14.4 0 0 0 3.996 1.662"
    />
    <path
      fill="currentColor"
      d="M18.432 18.795C11.652 17.7 6.299 12.347 5.205 5.568l-1.583.271c-.95.163-1.63 1.088-1.388 2.08a18.8 18.8 0 0 0 4.99 8.857 18.8 18.8 0 0 0 8.857 4.99c.992.242 1.917-.439 2.08-1.388z"
    />
  </svg>
);
export default SvgIconPizzaFill;
