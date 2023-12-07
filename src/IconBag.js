import * as React from 'react';
const SvgIconBag = (props) => (
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
            d="M15 8a3 3 0 1 1-6 0M4.75 3.75l-1 16.5h16.5l-1-16.5z"
        />
    </svg>
);
export default SvgIconBag;
