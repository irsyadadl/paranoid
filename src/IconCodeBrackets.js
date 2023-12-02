import * as React from 'react';
const SvgIconCodeBrackets = ({ title, titleId, ...props }) => (
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
            d="m9.75 20.25 4.5-16.5m4 4 4 4.25-4 4.25m-12.5 0-4-4.25 4-4.25"
        />
    </svg>
);
export default SvgIconCodeBrackets;
