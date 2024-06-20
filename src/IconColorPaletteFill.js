import * as React from "react";
const SvgIconColorPaletteFill = (props) => (
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
      d="M2 12c0-5.285 4.517-9.5 10-9.5S22 6.715 22 12c0 1.888-.506 3.152-1.566 3.812-.985.615-2.234.548-3.284.412-.369-.048-.753-.112-1.12-.172l-.492-.08c-.52-.082-.988-.143-1.405-.149-.835-.012-1.24.186-1.462.63-.132.264-.131.583.015 1.018.129.383.335.757.557 1.159l.12.216c.123.226.254.476.345.716.085.226.18.555.108.904-.086.42-.373.705-.727.858-.312.135-.69.176-1.089.176-5.483 0-10-4.215-10-9.5m8.25-5.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3 4.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m8-2.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconColorPaletteFill;
