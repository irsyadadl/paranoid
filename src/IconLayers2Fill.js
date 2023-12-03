import * as React from "react";
const SvgIconLayers2Fill = ({ title, titleId, ...props }) => (
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
      d="M12.365 3.095a.75.75 0 0 0-.73 0L2.385 8.25a.75.75 0 0 0 0 1.31l9.25 5.157a.75.75 0 0 0 .73 0l9.25-5.157a.75.75 0 0 0 0-1.31l-9.25-5.156Z"
    />
    <path
      fill="currentColor"
      d="m5.414 12.75-3.03 1.689a.75.75 0 0 0 0 1.31l9.25 5.156a.75.75 0 0 0 .731 0l9.25-5.156a.75.75 0 0 0 0-1.31l-3.03-1.689-6.22 3.468a.75.75 0 0 1-.73 0l-6.22-3.468Z"
    />
  </svg>
);
export default SvgIconLayers2Fill;
