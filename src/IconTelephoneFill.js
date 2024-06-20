import * as React from "react";
const SvgIconTelephoneFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="M8.168 2.917a1.25 1.25 0 0 0-1.958-.243L2.628 6.257a1.72 1.72 0 0 0-.44 1.707 20.5 20.5 0 0 0 5.179 8.67 20.7 20.7 0 0 0 4.106 3.186 20.5 20.5 0 0 0 4.563 1.992c.618.184 1.27 0 1.708-.44l3.582-3.582a1.25 1.25 0 0 0-.243-1.957l-3.516-2.098a1.25 1.25 0 0 0-1.524.19l-1.4 1.4a15.2 15.2 0 0 1-3.404-2.564 15.2 15.2 0 0 1-2.563-3.404l1.4-1.4a1.25 1.25 0 0 0 .19-1.524z"
    />
  </svg>
);
export default SvgIconTelephoneFill;
