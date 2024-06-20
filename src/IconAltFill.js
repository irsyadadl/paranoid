import * as React from "react";
const SvgIconAltFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M8.082 12.589H6.667l.68-2.308h.034z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25zm2.604 8.615c0 .452.295.726.776.726.407 0 .635-.207.78-.714l.204-.639h2.05l.203.664c.133.49.362.69.801.69.445 0 .764-.304.764-.731 0-.158-.029-.299-.1-.494l-1.49-4.06C8.365 9.186 8 8.92 7.373 8.92c-.593 0-.963.278-1.183.888l-1.477 4.059c-.066.183-.108.37-.108.498Zm6.313-.162c0 .507.282.797.763.797h2.636c.41 0 .676-.224.676-.614s-.27-.614-.676-.614H12.44v-4.06c0-.506-.278-.792-.76-.792-.481 0-.763.286-.763.792zm5.391.096c0 .506.278.792.76.792.481 0 .76-.286.76-.792v-4.06h1.053c.403 0 .677-.224.677-.614s-.266-.614-.677-.614h-3.623c-.415 0-.68.224-.68.614s.273.614.68.614h1.05z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAltFill;
