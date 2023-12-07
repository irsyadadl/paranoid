import * as React from 'react';
const SvgIconZoom = (props) => (
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
            d="m20 20-3.873-3.873m0 0A7.25 7.25 0 1 0 5.873 5.873a7.25 7.25 0 0 0 10.253 10.253ZM11 7.75v6.5M14.25 11h-6.5"
        />
    </svg>
);
export default SvgIconZoom;
