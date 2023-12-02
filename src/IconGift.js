import * as React from 'react';
const SvgIconGift = ({ title, titleId, ...props }) => (
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
            d="M12 7.75V6.083m0 1.667h-1.667A3.333 3.333 0 0 1 7 4.417c0-.92.746-1.667 1.667-1.667A3.333 3.333 0 0 1 12 6.083m0 1.667h1.667A3.333 3.333 0 0 0 17 4.417c0-.92-.746-1.667-1.667-1.667A3.333 3.333 0 0 0 12 6.083m0 1.667v12.5M4.75 12v8.25h14.5V12m-14.5 0h14.5m-14.5 0h-1V7.75h16.5V12h-1"
        />
    </svg>
);
export default SvgIconGift;
