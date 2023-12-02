import * as React from 'react';
const SvgIconBookmark = ({ title, titleId, ...props }) => (
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
            d="M19.25 21.25V2.75H4.75v18.5l7.25-4z"
        />
    </svg>
);
export default SvgIconBookmark;
