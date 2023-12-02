import * as React from 'react';
const SvgIconLogout = ({ title, titleId, ...props }) => (
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
            d="M11.25 20.25h-7.5V3.75h7.5m9 8.25H9m11.25 0-4.5 4.5m4.5-4.5-4.5-4.5"
        />
    </svg>
);
export default SvgIconLogout;
