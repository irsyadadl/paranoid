import * as React from "react";
const SvgIconShieldCheckFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.447 2.144c.359-.12.747-.12 1.106 0l7.25 2.416A1.75 1.75 0 0 1 21 6.22v5.692c0 2.737-1.183 4.758-2.859 6.347-1.647 1.563-3.8 2.738-5.785 3.809a.75.75 0 0 1-.712 0c-1.984-1.07-4.138-2.246-5.785-3.809C4.184 16.67 3 14.65 3 11.912V6.22a1.75 1.75 0 0 1 1.197-1.66zm3.833 7.886a.75.75 0 1 0-1.06-1.06L11 12.19l-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconShieldCheckFill;
