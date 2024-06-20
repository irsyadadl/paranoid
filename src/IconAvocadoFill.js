import * as React from "react";
const SvgIconAvocadoFill = (props) => (
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
      d="M12.81 2.955q-.69.259-1.384.571C8.83 4.696 6.273 6.39 4.536 8.084c-3.204 3.124-3.52 8.488-.248 11.666v.001l.002.002c3.219 3.224 8.577 2.9 11.65-.272 1.982-2.045 3.97-5.23 5.107-8.278.569-1.526.94-3.06.972-4.43.03-1.365-.278-2.673-1.197-3.593-.918-.92-2.224-1.23-3.586-1.199-1.369.03-2.902.403-4.426.974M9.688 17.812a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAvocadoFill;
