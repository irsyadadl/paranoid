import * as React from "react";
const SvgIconBagHeart = (props) => (
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
      d="M15 8a3 3 0 1 1-6 0m10.765 4.254-.458-7.564a1 1 0 0 0-.998-.94H5.69a1 1 0 0 0-.998.94l-.879 14.5a1 1 0 0 0 .999 1.06h7.44M18 21.278c.27 0 3.25-1.535 3.25-3.611 0-1.445-.903-2.167-1.805-2.167-.903 0-1.445.542-1.445.542s-.542-.542-1.444-.542c-.903 0-1.806.722-1.806 2.167 0 2.076 2.98 3.61 3.25 3.61Z"
    />
  </svg>
);
export default SvgIconBagHeart;
