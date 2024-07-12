import * as React from "react";
const SvgIconPinFill = (props) => (
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
      d="m12.268 20.579-3.893-3.893L4.28 20.78a.75.75 0 0 1-1.06-1.06l4.094-4.095-3.892-3.893a1.75 1.75 0 0 1 .756-2.92l6.724-1.921a.25.25 0 0 0 .149-.117l2.148-3.76a1.75 1.75 0 0 1 2.757-.368l5.399 5.398a1.75 1.75 0 0 1-.37 2.757l-3.76 2.148a.25.25 0 0 0-.116.149l-1.92 6.724a1.75 1.75 0 0 1-2.921.757"
    />
  </svg>
);
export default SvgIconPinFill;
