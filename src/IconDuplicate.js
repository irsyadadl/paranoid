import * as React from 'react';
const SvgIconDuplicate = ({ title, titleId, ...props }) => (
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
            d="M7.75 7.75v-4h12.5v12.51h-4m0-8.51v12.5H3.75V7.75z"
        />
    </svg>
);
export default SvgIconDuplicate;
