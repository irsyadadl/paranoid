import * as React from 'react';
const SvgIconBug = ({ title, titleId, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth={1.5}
            d="M5.37 9.806 3 9m2.37 4.75H2.75m2.62 3.694L3 18.25m15.63-8.444L21 9m-2.37 4.75h2.62m-2.62 3.694 2.37.806m-9-4.5v7M7.75 7.5V7a4.25 4.25 0 0 1 8.5 0v.5m2 .25H5.75V15a6.25 6.25 0 1 0 12.5 0z"
        />
    </svg>
);
export default SvgIconBug;
