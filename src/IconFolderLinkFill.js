import * as React from 'react';
const SvgIconFolderLinkFill = ({ title, titleId, ...props }) => (
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
            fill="currentColor"
            d="M10.401 3H2v9.39a5.474 5.474 0 0 1 3-.89h3a5.5 5.5 0 0 1 4.61 8.5H22V6h-9.599z"
        />
        <path
            fill="currentColor"
            d="M5 19.5a2.5 2.5 0 0 1 0-5h.75V13H5a4 4 0 0 0 0 8h.75v-1.5z"
        />
        <path fill="currentColor" d="M8 16.25H5v1.5h3z" />
        <path
            fill="currentColor"
            d="M8 19.5h-.75V21H8a4 4 0 0 0 0-8h-.75v1.5H8a2.5 2.5 0 0 1 0 5"
        />
    </svg>
);
export default SvgIconFolderLinkFill;
