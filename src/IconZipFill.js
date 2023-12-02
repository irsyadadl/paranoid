import * as React from 'react';
const SvgIconZipFill = ({ title, titleId, ...props }) => (
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
        <path fill="currentColor" d="M10.5 16v-1.5h3V16a1.5 1.5 0 0 1-3 0" />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 6.75A3.75 3.75 0 0 1 6.75 3h10.5A3.75 3.75 0 0 1 21 6.75v10.5A3.75 3.75 0 0 1 17.25 21H6.75A3.75 3.75 0 0 1 3 17.25zM9.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM9 9.75A.75.75 0 0 1 9.75 9h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 9.75M9.75 13a.75.75 0 0 0-.75.75V16a3 3 0 1 0 6 0v-2.25a.75.75 0 0 0-.75-.75z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconZipFill;
