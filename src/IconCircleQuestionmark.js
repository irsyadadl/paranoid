import * as React from "react";
const SvgIconCircleQuestionmark = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 7h6v3.901l-2.25 1.5V14h-1.5v-2.401l2.25-1.5V8.5h-3V10H9z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M11.25 15.5h1.5V17h-1.5z" />
  </svg>
);
export default SvgIconCircleQuestionmark;
