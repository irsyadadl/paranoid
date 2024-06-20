import * as React from "react";
const SvgIconBezierCurvesFill = (props) => (
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
      fillRule="evenodd"
      d="M4.75 3A1.75 1.75 0 0 0 3 4.75v14.5c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25V4.75A1.75 1.75 0 0 0 19.25 3zm11.447 4c-1.34 0-2.316.703-3.057 1.601-.712.863-1.274 1.99-1.788 3.019l-.023.045c-.541 1.084-1.034 2.062-1.626 2.78-.574.695-1.165 1.055-1.9 1.055H7.75a.75.75 0 0 0 0 1.5h.053c1.34 0 2.316-.703 3.057-1.6.712-.864 1.274-1.99 1.788-3.02l.023-.045c.541-1.083 1.034-2.061 1.626-2.78.574-.695 1.165-1.055 1.9-1.055h.053a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBezierCurvesFill;
