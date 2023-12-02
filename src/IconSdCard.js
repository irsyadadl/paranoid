import * as React from 'react';
const SvgIconSdCard = ({ title, titleId, ...props }) => (
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
            strokeWidth={1.5}
            d="M9.25 6.75v2.5m3.5-2.5v2.5m-8-6.5h12.5v5l2 3.25v10.25H4.75z"
        />
    </svg>
);
export default SvgIconSdCard;
