import * as React from 'react';
const SvgIconArrowTop = ({ title, titleId, ...props }) => (
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
            strokeWidth={1.5}
            d="m5 10.75 7-7 7 7M12 21V4.5"
        />
    </svg>
);
export default SvgIconArrowTop;
