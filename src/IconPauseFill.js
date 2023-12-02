import * as React from 'react';
const SvgIconPauseFill = ({ title, titleId, ...props }) => (
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
            d="M4.75 3a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 9.25 3zm10 0a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75z"
        />
    </svg>
);
export default SvgIconPauseFill;
