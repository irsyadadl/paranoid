import * as React from "react";
const SvgIconCallOutgoingFill = (props) => (
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
      d="M4.721 3c-.943 0-1.765.766-1.72 1.769.125 2.717.9 5.39 2.269 7.75a17.1 17.1 0 0 0 6.195 6.195c2.381 1.382 5.021 2.11 7.729 2.258 1.008.055 1.79-.767 1.79-1.722v-3.502a1.75 1.75 0 0 0-1.256-1.679l-2.95-.867a1.75 1.75 0 0 0-1.756.467l-.877.914c-.083.086-.186.086-.245.052a12.3 12.3 0 0 1-4.55-4.55c-.035-.06-.035-.163.051-.246l.914-.877a1.75 1.75 0 0 0 .467-1.756l-.867-2.95A1.75 1.75 0 0 0 8.235 3H4.722Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.984 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22h-2.69a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCallOutgoingFill;
