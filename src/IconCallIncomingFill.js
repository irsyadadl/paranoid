import * as React from "react";
const SvgIconCallIncomingFill = (props) => (
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
      d="M4.737 3c-.944 0-1.765.766-1.72 1.769.125 2.717.9 5.39 2.268 7.75a17.1 17.1 0 0 0 6.195 6.195c2.382 1.382 5.022 2.11 7.73 2.258 1.008.055 1.79-.767 1.79-1.722v-3.502a1.75 1.75 0 0 0-1.256-1.679l-2.95-.867a1.75 1.75 0 0 0-1.756.467l-.877.914c-.083.086-.186.086-.245.052a12.3 12.3 0 0 1-4.551-4.55c-.034-.06-.034-.163.052-.246l.914-.877a1.75 1.75 0 0 0 .467-1.756l-.868-2.95A1.75 1.75 0 0 0 8.251 3z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.78 3.22a.75.75 0 0 1 0 1.06L16.56 8.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.22-4.22a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCallIncomingFill;
