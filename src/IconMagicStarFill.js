import * as React from "react";
const SvgIconMagicStarFill = (props) => (
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
      d="M12.766 3.581c-.677-.577-1.714-.048-1.645.838l.29 3.751-3.206 1.97c-.757.467-.575 1.616.29 1.825l2.802.677-7.077 7.077a.75.75 0 1 0 1.06 1.06l7.078-7.077.677 2.803c.209.865 1.358 1.047 1.824.289l1.97-3.205 3.751.29c.887.068 1.415-.968.838-1.646L18.98 9.37l1.435-3.478c.34-.822-.484-1.645-1.306-1.306L15.63 6.02z"
    />
  </svg>
);
export default SvgIconMagicStarFill;
