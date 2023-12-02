import * as React from 'react';
const SvgIconDateTime = ({ title, titleId, ...props }) => (
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
            d="m2.49 10.12 1.446 8.207 6.178-1.09M2.49 10.12l-.723-4.103L15.06 3.673l.648 3.673M2.49 10.12l10.76-1.897M16 11.75V14l2 2m4.25-2a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0"
        />
    </svg>
);
export default SvgIconDateTime;
