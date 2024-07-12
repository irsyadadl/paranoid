import * as React from "react";
const SvgIconInboxEmptyFill = (props) => (
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
      d="M4.904 4.952c.3-.584.9-.952 1.557-.952H17.54a1.75 1.75 0 0 1 1.557.952l3.711 7.241c.127.247.193.52.193.798v5.259A1.75 1.75 0 0 1 21.25 20H2.75A1.75 1.75 0 0 1 1 18.25v-5.259c0-.277.066-.55.193-.798zM21.5 13.5h-5.42a.25.25 0 0 0-.198.098l-.937 1.219a1.75 1.75 0 0 1-1.388.683h-3.114a1.75 1.75 0 0 1-1.388-.683l-.937-1.22a.25.25 0 0 0-.198-.097H2.5v4.75c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconInboxEmptyFill;
