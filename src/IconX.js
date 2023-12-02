import * as React from 'react';
const SvgIconX = ({ title, titleId, ...props }) => (
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
            strokeWidth={2}
            d="m5 5 14 14m0-14L5 19"
        />
    </svg>
);
export default SvgIconX;
