import * as React from "react";
const SvgIconSun = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.29V1.768M5.842 18.16l-1.077 1.077M12 22.233v-1.524m7.236-15.944-1.077 1.077M20.709 12h1.524m-4.074 6.158 1.077 1.077M1.768 12H3.29m1.474-7.236 1.077 1.078m9.87 2.446a5.25 5.25 0 1 1-7.424 7.424 5.25 5.25 0 0 1 7.424-7.424Z"
    />
  </svg>
);
export default SvgIconSun;
