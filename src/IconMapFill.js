import * as React from 'react';
const SvgIconMapFill = ({ title, titleId, ...props }) => (
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
            d="m2 5.96 6-2v14.58l-6 2V5.96Zm12.5 14.094-5-1.538V3.945l5 1.539v14.569Zm1.5-.014 6-2V3.46l-6 2z"
        />
    </svg>
);
export default SvgIconMapFill;
