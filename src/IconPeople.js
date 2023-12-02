import * as React from 'react';
const SvgIconPeople = ({ title, titleId, ...props }) => (
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
            d="M15 2.75a3.5 3.5 0 1 1 0 7m5.75 10.5h2.5c0-2.938-2.068-5.703-5-6.741m-9-3.759a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7M1 20.219c0-3.987 3.694-7.469 8.25-7.469s8.25 3.482 8.25 7.469z"
        />
    </svg>
);
export default SvgIconPeople;
