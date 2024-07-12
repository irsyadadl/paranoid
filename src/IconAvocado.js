import * as React from "react";
const SvgIconAvocado = (props) => (
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
      strokeWidth={1.5}
      d="M12.77 14.313a3.083 3.083 0 1 1-6.166 0 3.083 3.083 0 0 1 6.167 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m4.83 19.203.006.005c2.887 2.892 7.75 2.629 10.551-.263 1.901-1.962 3.835-5.054 4.938-8.011.55-1.48.895-2.925.923-4.179s-.26-2.318-.972-3.03c-.71-.712-1.77-1.001-3.023-.973-1.252.028-2.695.372-4.172.925-2.955 1.105-6.044 3.046-8.007 4.96-2.929 2.855-3.175 7.718-.25 10.56z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAvocado;
