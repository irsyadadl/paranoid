import * as React from "react";
const SvgIconSun = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.29V1.769m-6.158 16.39-1.077 1.078M12 22.233v-1.524m7.235-15.944-1.077 1.077M20.71 12h1.523m-4.074 6.159 1.077 1.077M1.768 12H3.29m1.474-7.235 1.077 1.077m9.87 2.446a5.25 5.25 0 1 1-7.424 7.424 5.25 5.25 0 0 1 7.424-7.424"
    />
  </svg>
);
export default SvgIconSun;
