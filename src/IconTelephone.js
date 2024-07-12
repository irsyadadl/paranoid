import * as React from "react";
const SvgIconTelephone = (props) => (
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
      d="M7.754 9.218a15.9 15.9 0 0 0 2.954 4.074 15.9 15.9 0 0 0 4.074 2.954l1.79-1.791a.5.5 0 0 1 .61-.076l3.517 2.098a.5.5 0 0 1 .097.782l-3.583 3.583a.97.97 0 0 1-.963.251 19.7 19.7 0 0 1-4.396-1.92 20 20 0 0 1-3.957-3.07 20 20 0 0 1-3.07-3.957 19.8 19.8 0 0 1-1.92-4.396.97.97 0 0 1 .25-.963l3.584-3.583a.5.5 0 0 1 .782.097l2.098 3.516a.5.5 0 0 1-.076.61z"
    />
  </svg>
);
export default SvgIconTelephone;
