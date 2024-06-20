import * as React from "react";
const SvgIconReplyFill = (props) => (
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
      d="M12 4.37c0-1.08-1.28-1.652-2.085-.93l-8.502 7.63a1.25 1.25 0 0 0 0 1.86l8.502 7.63c.804.722 2.084.15 2.084-.93v-3.375c3.744.05 5.703.482 6.881 1.148 1.195.675 1.672 1.629 2.425 3.135l.024.047a.75.75 0 0 0 1.42-.335c0-4.265-.551-7.455-2.37-9.554-1.737-2.004-4.473-2.845-8.38-2.937z"
    />
  </svg>
);
export default SvgIconReplyFill;
