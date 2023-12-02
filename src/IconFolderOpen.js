import * as React from 'react';
const SvgIconFolderOpen = ({ title, titleId, ...props }) => (
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
            d="m5.5 19.25 2.5-8.5h12.25M5.5 19.25h14l2.5-8.5h-1.75M5.5 19.25H2.75V3.75H10l2 3h8.25v4"
        />
    </svg>
);
export default SvgIconFolderOpen;
