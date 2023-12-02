import * as React from 'react';
const SvgIconSend = ({ title, titleId, ...props }) => (
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
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m14 21 6.5-17.5L3 10l8 3z"
        />
    </svg>
);
export default SvgIconSend;
