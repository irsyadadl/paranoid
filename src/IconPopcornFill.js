import * as React from "react";
const SvgIconPopcornFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="M4.124 8.5a.5.5 0 0 0-.496.564l1.463 11.409A1.75 1.75 0 0 0 6.827 22H8.69L7.896 8.5zm5.274 0 .795 13.5h3.615l.794-13.5zm6.706 0L15.31 22h1.864a1.75 1.75 0 0 0 1.735-1.527l1.463-11.41a.5.5 0 0 0-.496-.563zM20.285 7a2.3 2.3 0 0 0-1.313-1.388l-.048-.02a2.3 2.3 0 0 1-.751-.49 2.3 2.3 0 0 1-.502-.736l-.02-.048a2.28 2.28 0 0 0-.98-1.094c-.44-.25-.952-.35-1.456-.285l-.057.008a2.36 2.36 0 0 1-1.713-.45l-.038-.029A2.34 2.34 0 0 0 12 2a2.34 2.34 0 0 0-1.407.468l-.044.033a2.33 2.33 0 0 1-1.707.448l-.058-.007a2.35 2.35 0 0 0-1.457.284c-.44.25-.785.635-.979 1.095l-.02.046a2.3 2.3 0 0 1-.501.737 2.3 2.3 0 0 1-.752.49l-.047.02A2.3 2.3 0 0 0 3.715 7z"
    />
  </svg>
);
export default SvgIconPopcornFill;
