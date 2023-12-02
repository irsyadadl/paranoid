import * as React from 'react';
const SvgIconFolderOpenFill = ({ title, titleId, ...props }) => (
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
            fillRule="evenodd"
            d="M10.401 3H2v17h18.061l2.942-10H21V6h-8.599zm9.099 7V7.5h-7.901l-2-3H3.5v14h1.439l2.5-8.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconFolderOpenFill;
