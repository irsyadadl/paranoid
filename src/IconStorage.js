import * as React from 'react';
const SvgIconStorage = ({ title, titleId, ...props }) => (
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
            d="M21.25 12V4.75H2.75V12m18.5 0H2.75m18.5 0v7.25H2.75V12"
        />
        <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.5}
            d="M6.5 9.125a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 7.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        />
    </svg>
);
export default SvgIconStorage;
