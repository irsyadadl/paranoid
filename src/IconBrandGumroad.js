import * as React from "react";
const SvgIconBrandGumroad = (props) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-15.52-.232c0 2.922 1.722 5.272 4.652 5.272s3.676-2.35 3.848-3.553v3.324h2.38v-5.273h-5.424v1.032h2.585c-.288 1.26-.977 2.521-2.585 2.521-1.78 0-2.93-1.547-2.93-3.438s1.15-3.438 2.93-3.438c1.666 0 2.355 1.203 2.412 2.005h2.7c-.058-1.432-1.321-3.954-5.055-3.954-3.618 0-5.514 2.464-5.514 5.502Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandGumroad;
