import * as React from "react";
const SvgIconPerson = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 6.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM12 13.25c-3.796 0-6.566 2.524-7.328 5.916-.13.575.337 1.084.926 1.084h12.804c.589 0 1.056-.51.926-1.084-.762-3.393-3.532-5.916-7.328-5.916Z"
    />
  </svg>
);
export default SvgIconPerson;
