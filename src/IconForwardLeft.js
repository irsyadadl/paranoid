import * as React from 'react';
const SvgIconForwardLeft = ({ title, titleId, ...props }) => (
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
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.25 12.368v5.882L2.75 12l8.5-6.25v5.882m0 .736 8 5.882V5.75l-8 5.882m0 .736v-.736"
        />
    </svg>
);
export default SvgIconForwardLeft;
