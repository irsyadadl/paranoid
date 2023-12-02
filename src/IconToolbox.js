import * as React from 'react';
const SvgIconToolbox = ({ title, titleId, ...props }) => (
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
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12.75 10.75v-8h6.5v8m-6.5-4h2.5m-10.5 4V6L6.5 2.75h1L9.25 6v4.75m-6.5 0h18.5v9.5H2.75z"
        />
    </svg>
);
export default SvgIconToolbox;
