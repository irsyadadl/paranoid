import * as React from 'react';
const SvgIconReceipt = ({ title, titleId, ...props }) => (
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
            d="M8.75 14.75h6.5M9.875 9.5l1.583 1.583 3.167-3.166M4.75 2.75h14.5V21l-2.583-2-2.334 2.25L12 19l-2.333 2.25L7.333 19 4.75 21z"
        />
    </svg>
);
export default SvgIconReceipt;
