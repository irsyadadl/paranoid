import * as React from 'react';
const SvgIconBag2 = ({ title, titleId, ...props }) => (
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
            d="M15.25 7.75V6a3.25 3.25 0 0 0-6.5 0v1.75m-2.5 0h11.5l2 13.5H4.25z"
        />
    </svg>
);
export default SvgIconBag2;
