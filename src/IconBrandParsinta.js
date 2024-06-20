import * as React from "react";
const SvgIconBrandParsinta = (props) => (
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
      fillOpacity={0.3}
      d="M18.321 18.774c.306.328.821.348 1.123.017A10.024 10.024 0 1 0 2.92 16.206c.186.407.683.546 1.074.327.39-.218.526-.71.346-1.12A8.404 8.404 0 1 1 18.334 17.6c-.297.335-.318.846-.013 1.174"
    />
    <path
      fill="currentColor"
      d="M12.036 2.826c0-.45-.365-.818-.814-.782a10.025 10.025 0 1 0 10.806 10.807c.037-.45-.332-.815-.782-.815s-.811.366-.855.814a8.395 8.395 0 1 1-9.169-9.169c.448-.044.814-.404.814-.855"
    />
    <path
      fill="currentColor"
      d="M15.26 11.311a.824.824 0 0 1 0 1.428l-4.234 2.445a.824.824 0 0 1-1.237-.714V9.58a.824.824 0 0 1 1.237-.714z"
    />
  </svg>
);
export default SvgIconBrandParsinta;
