import * as React from "react";
const SvgIconAccessibleFill = (props) => (
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
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-.76 5.183c-.07 1.567-.627 2.785-1.925 4.025a.75.75 0 1 0 1.036 1.084c.734-.7 1.283-1.417 1.67-2.183.393.76.931 1.468 1.608 2.164a.75.75 0 1 0 1.075-1.046c-1.244-1.28-1.863-2.497-1.946-4.044.489-.025.995-.07 1.422-.113q.586-.061 1.17-.137a.747.747 0 0 0 .643-.842.753.753 0 0 0-.843-.645q-.559.073-1.121.131c-.648.066-1.43.129-2.03.129s-1.38-.063-2.028-.129a42 42 0 0 1-1.121-.13.753.753 0 0 0-.843.644.747.747 0 0 0 .643.842q.584.076 1.17.137c.427.043.932.088 1.42.113"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAccessibleFill;
