import * as React from 'react';
const SvgIconSidebar = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth={1.5}
            d="M11.25 4.75h-8.5v14.5h8.5m0-14.5h10v14.5h-10m0-14.5v14.5"
        />
        <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.5}
            d="M6.25 8.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
        />
    </svg>
);
export default SvgIconSidebar;
