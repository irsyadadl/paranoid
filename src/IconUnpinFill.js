import * as React from "react";
const SvgIconUnpinFill = (props) => (
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
      d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l4.737 4.738-2.779.794a1.75 1.75 0 0 0-.756 2.92l3.892 3.893L3.22 19.72a.75.75 0 1 0 1.06 1.06l4.095-4.094 3.893 3.893a1.75 1.75 0 0 0 2.92-.757l.794-2.78 4.738 4.738a.75.75 0 1 0 1.06-1.06zm13.83 10.878-.212.74-6.735-6.736.74-.211a.25.25 0 0 0 .148-.117l2.148-3.76a1.75 1.75 0 0 1 2.757-.368l5.399 5.398a1.75 1.75 0 0 1-.37 2.757l-3.76 2.148a.25.25 0 0 0-.116.149Z"
    />
  </svg>
);
export default SvgIconUnpinFill;
