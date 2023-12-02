import * as React from 'react';
const SvgIconCart = ({ title, titleId, ...props }) => (
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
            d="M1.75 3.75h3l.48 3m0 0 1.52 9.5h12l1.5-9.5z"
        />
        <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.25}
            d="M8.25 20.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm9 0a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
        />
    </svg>
);
export default SvgIconCart;
