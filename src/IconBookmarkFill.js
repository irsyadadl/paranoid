import * as React from 'react';
const SvgIconBookmarkFill = ({ title, titleId, ...props }) => (
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
        <path fill="currentColor" d="M4 2v20.52l8-4.413 8 4.413V2z" />
    </svg>
);
export default SvgIconBookmarkFill;
