import * as React from 'react';
const SvgIconArrowLeft = ({ title, titleId, ...props }) => (
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
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 18.25 3.75 12m0 0L10 5.75M3.75 12h16.5"
        />
    </svg>
);
export default SvgIconArrowLeft;
