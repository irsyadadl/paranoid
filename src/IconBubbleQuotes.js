import * as React from "react";
const SvgIconBubbleQuotes = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 4.75a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1h-4.874a1 1 0 0 0-.638.23l-2.098 1.738a1 1 0 0 1-1.28-.003l-2.066-1.731a1 1 0 0 0-.642-.234H3.75a1 1 0 0 1-1-1z"
    />
    <path
      fill="currentColor"
      d="M9.523 8C8.406 8 7.5 8.91 7.5 10.033a2.028 2.028 0 0 0 2.81 1.874q-.072.132-.157.251c-.353.502-.875.885-1.554 1.34a.453.453 0 0 0-.125.626.45.45 0 0 0 .624.125c.67-.449 1.328-.913 1.79-1.569.474-.674.716-1.51.658-2.66A2.03 2.03 0 0 0 9.523 8m4.945 0c-1.117 0-2.023.91-2.023 2.033a2.028 2.028 0 0 0 2.81 1.874q-.072.132-.156.251c-.353.502-.876.885-1.554 1.34a.453.453 0 0 0-.125.626.45.45 0 0 0 .623.125c.67-.449 1.328-.913 1.79-1.569.474-.674.717-1.51.658-2.66A2.03 2.03 0 0 0 14.468 8"
    />
  </svg>
);
export default SvgIconBubbleQuotes;
