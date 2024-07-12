import * as React from "react";
const SvgIconPizza = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.863 17.676-.442 2.575c-.094.55-.62.919-1.162.787a18.04 18.04 0 0 1-8.505-4.792 18.04 18.04 0 0 1-4.791-8.505c-.133-.542.236-1.068.786-1.162l2.575-.442m11.539 11.54.76-4.43m-.76 4.43a14.4 14.4 0 0 1-4.709-1.783m-6.83-9.757a14.43 14.43 0 0 0 3.993 7.546 14.5 14.5 0 0 0 2.837 2.211m-6.83-9.757 5.8-.994m6.498 8.103a3.088 3.088 0 0 0-5.468 2.648m5.468-2.648 1.39-8.103a1 1 0 0 0-1.155-1.154l-3.168.543m0 0a2.059 2.059 0 1 1-3.564.611m3.564-.611-3.564.61"
    />
  </svg>
);
export default SvgIconPizza;
