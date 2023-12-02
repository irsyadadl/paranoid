import * as React from 'react';
const SvgIconCircleInfo = ({ title, titleId, ...props }) => (
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
            d="M10.75 11H12v5.25M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
        />
        <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.25}
            d="M11.375 7.375h1.25v1.25h-1.25z"
        />
    </svg>
);
export default SvgIconCircleInfo;
