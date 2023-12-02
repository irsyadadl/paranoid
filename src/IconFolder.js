import * as React from 'react';
const SvgIconFolder = ({ title, titleId, ...props }) => (
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
            d="M2.75 3.75v15.5h18.5V6.75H12l-2-3z"
        />
    </svg>
);
export default SvgIconFolder;
