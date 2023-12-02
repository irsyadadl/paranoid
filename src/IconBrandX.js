import * as React from "react";
const SvgIconBrandX = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M17.728 3h3.053l-6.67 7.625L21.959 21h-6.146l-4.812-6.293L5.494 21H2.438l7.136-8.155L2.044 3h6.302l4.35 5.752zm-1.072 16.172h1.692L7.426 4.732H5.611l11.045 14.44Z"
    />
  </svg>
);
export default SvgIconBrandX;
