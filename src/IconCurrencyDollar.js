import * as React from "react";
const SvgIconCurrencyDollar = (props) => (
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
      d="M12 7.5c-1.466 0-2.487.665-2.487 2.1 0 1.646 1.267 1.999 2.487 2.412 1.22.414 2.487.767 2.487 2.412 0 1.436-1.021 2.1-2.487 2.1M12 7.5c1.06 0 1.834.502 2.23 1.212M12 7.5V5.75m0 10.774c-1.06 0-1.834-.5-2.23-1.211M12 16.524v1.726M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0"
    />
  </svg>
);
export default SvgIconCurrencyDollar;
