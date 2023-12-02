import * as React from 'react';
const SvgIconFolderLink = ({ title, titleId, ...props }) => (
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
            d="M14.25 19.25h7V6.75H12l-2-3H2.75v7M5 20.25a3.25 3.25 0 0 1 0-6.5m3 6.5a3.25 3.25 0 0 0 0-6.5M5.75 17h1.5"
        />
    </svg>
);
export default SvgIconFolderLink;
