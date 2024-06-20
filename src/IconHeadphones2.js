import * as React from "react";
const SvgIconHeadphones2 = (props) => (
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
      d="M4.384 11.26c0 1.318.331 2.681.949 3.97-.204.24-.241.685-.023 1.122l1.447 2.946c.143.293.467.452.783.452.37 0 .73-.226.768-.686l-1.657-3.367c-.55-1.123-.957-2.728-.957-4.43 0-3.722 2.54-6.23 6.298-6.23 3.76 0 6.306 2.508 6.306 6.23 0 1.702-.414 3.307-.964 4.43l-1.658 3.367c.038.46.4.686.776.686.31 0 .633-.159.784-.452l1.439-2.946c.218-.437.188-.881-.015-1.123.617-1.288.949-2.651.949-3.97 0-4.316-2.991-7.684-7.617-7.684s-7.608 3.368-7.608 7.684Zm4.12 2.787c-.278-.573-.813-.7-1.22-.535-.452.188-.761.73-.43 1.424l1.884 3.82c.301.617.859.835 1.386.564.452-.226.61-.738.347-1.28zm6.976 0-1.966 3.992c-.263.543-.098 1.055.354 1.281.527.271 1.077.053 1.386-.565l1.876-3.82c.34-.692.023-1.235-.43-1.423-.406-.166-.933-.038-1.22.535"
    />
  </svg>
);
export default SvgIconHeadphones2;
