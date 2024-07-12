import * as React from "react";
const SvgIconAlt = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 4.75H3.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M5.38 15.092c-.481 0-.776-.274-.776-.727 0-.128.042-.315.108-.498l1.477-4.059c.22-.61.59-.888 1.183-.888.627 0 .992.266 1.22.888l1.49 4.06c.071.194.1.335.1.493 0 .428-.32.73-.764.73-.44 0-.668-.199-.8-.688l-.204-.665h-2.05l-.204.64c-.145.506-.373.714-.78.714m1.287-2.503h1.415l-.701-2.308h-.034zM11.68 15c-.481 0-.763-.29-.763-.797v-4.49c0-.507.282-.793.763-.793s.76.286.76.793v4.059h1.876c.407 0 .676.224.676.614s-.265.614-.676.614zm5.388.092c-.482 0-.76-.287-.76-.793v-4.06h-1.05c-.407 0-.68-.223-.68-.614 0-.39.265-.614.68-.614h3.623c.411 0 .677.224.677.614s-.274.615-.677.615h-1.054v4.059c0 .506-.278.793-.76.793Z"
    />
  </svg>
);
export default SvgIconAlt;
