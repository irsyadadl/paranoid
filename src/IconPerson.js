import * as React from 'react';
const SvgIconPerson = ({ title, titleId, ...props }) => (
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
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.75 6.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM12 13.25c-4.19 0-7.131 3.075-7.5 7h15c-.369-3.925-3.31-7-7.5-7Z"
        />
    </svg>
);
export default SvgIconPerson;
