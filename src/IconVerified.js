import * as React from "react";
const SvgIconVerified = (props) => (
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
      d="m9.5 12.75 1.5 1.5 3.5-3.5M8.822 5.06l-2.063-.327a1.085 1.085 0 0 0-1.255 1.053l-.036 2.088c-.007.375-.206.72-.527.912l-1.79 1.075c-.566.34-.7 1.101-.285 1.614l1.315 1.623c.236.29.305.683.183 1.037l-.68 1.974a1.085 1.085 0 0 0 .819 1.42l2.05.397c.367.072.672.328.806.677l.748 1.95c.237.616.963.88 1.54.56l1.826-1.012a1.09 1.09 0 0 1 1.053 0l1.827 1.012c.577.32 1.303.056 1.54-.56l.748-1.95c.134-.35.439-.605.806-.677l2.05-.398a1.085 1.085 0 0 0 .82-1.419l-.68-1.974a1.09 1.09 0 0 1 .182-1.037l1.315-1.623a1.085 1.085 0 0 0-.285-1.614l-1.79-1.075a1.09 1.09 0 0 1-.527-.912l-.036-2.088a1.085 1.085 0 0 0-1.255-1.053l-2.062.327a1.09 1.09 0 0 1-.99-.36l-1.37-1.576a1.085 1.085 0 0 0-1.638 0L9.81 4.7c-.246.283-.62.419-.99.36Z"
    />
  </svg>
);
export default SvgIconVerified;
