import * as React from "react";
const SvgIconGift2 = (props) => (
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
      d="M8 16c1.648-1.064 2.916-2.363 4-4m0 0c1.084 1.637 2.352 2.936 4 4m-4-4v-1.417M12 12h-1.417A2.833 2.833 0 0 1 7.75 9.167c0-.783.634-1.417 1.417-1.417A2.833 2.833 0 0 1 12 10.583M12 12h1.417a2.833 2.833 0 0 0 2.833-2.833c0-.783-.634-1.417-1.417-1.417A2.833 2.833 0 0 0 12 10.583M12 12v8.25m0-9.667V3.75m0 0H4.75a1 1 0 0 0-1 1V12M12 3.75h7.25a1 1 0 0 1 1 1V12m0 0v7.25a1 1 0 0 1-1 1H12M20.25 12H3.75M12 20.25H4.75a1 1 0 0 1-1-1V12"
    />
  </svg>
);
export default SvgIconGift2;
